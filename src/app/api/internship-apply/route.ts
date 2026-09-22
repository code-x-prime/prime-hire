import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_SIZE = 8 * 1024 * 1024; // 8MB
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ALLOWED_EXT = [".pdf", ".doc", ".docx"];
const ALLOWED_TYPES_LABEL = "PDF, DOC or DOCX";

function fail(message: string, status = 400) {
  return NextResponse.json({ success: false, message }, { status });
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const internshipType = String(formData.get("internshipType") || "").trim();
    const resume = formData.get("resume");

    if (!name) return fail("Name is required");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail("Valid email is required");
    if (!internshipType) return fail("Internship type is required");
    if (!(resume instanceof File) || resume.size === 0) return fail("Resume file is required");

    const ext = resume.name.toLowerCase().slice(resume.name.lastIndexOf("."));
    if (!ALLOWED_TYPES.includes(resume.type) && !ALLOWED_EXT.includes(ext)) {
      return fail(`Resume must be ${ALLOWED_TYPES_LABEL}`);
    }
    if (resume.size > MAX_SIZE) return fail("Resume must be 8MB or smaller", 413);

    const buffer = Buffer.from(await resume.arrayBuffer());

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Prime Hire Minds Portal" <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `[INTERNSHIP APPLICATION] ${internshipType} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .email-container { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0; }
            .header { background-color: #0B2C5F; padding: 30px; text-align: center; border-bottom: 4px solid #C89B3C; }
            .header h1 { color: #ffffff; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px; }
            .content { padding: 40px; color: #333333; line-height: 1.6; }
            .section-title { font-size: 14px; font-weight: bold; color: #C89B3C; text-transform: uppercase; margin-bottom: 20px; border-bottom: 1px solid #eeeeee; padding-bottom: 5px; }
            .info-grid { display: table; width: 100%; margin-bottom: 30px; }
            .info-row { display: table-row; }
            .info-label { display: table-cell; padding: 8px 0; font-weight: bold; color: #666666; width: 160px; font-size: 13px; }
            .info-value { display: table-cell; padding: 8px 0; color: #0B2C5F; font-size: 14px; }
            .footer { background-color: #f4f4f4; padding: 20px; text-align: center; color: #888888; font-size: 11px; }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h1>Prime Hire Minds Consulting</h1>
            </div>
            <div class="content">
              <div class="section-title">New Internship Application</div>

              <div class="info-grid">
                <div class="info-row">
                  <div class="info-label">Applicant Name:</div>
                  <div class="info-value">${name}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Email Address:</div>
                  <div class="info-value"><a href="mailto:${email}" style="color: #0B2C5F; text-decoration: none;">${email}</a></div>
                </div>
                <div class="info-row">
                  <div class="info-label">Phone Number:</div>
                  <div class="info-value">${phone || "N/A"}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Internship Type:</div>
                  <div class="info-value"><strong>${internshipType}</strong></div>
                </div>
                <div class="info-row">
                  <div class="info-label">Resume:</div>
                  <div class="info-value">Attached (${(resume.size / (1024 * 1024)).toFixed(2)} MB)</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Timestamp:</div>
                  <div class="info-value">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} (IST)</div>
                </div>
              </div>
            </div>
            <div class="footer">
              This is an automated notification from your website's internship portal.<br>
              &copy; ${new Date().getFullYear()} Prime Hire Minds Consulting.
            </div>
          </div>
        </body>
        </html>
      `,
      attachments: [
        {
          filename: resume.name.replace(/[^\w.\-() ]+/g, "_"),
          content: buffer,
          contentType: resume.type || "application/octet-stream",
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Application submitted successfully" });
  } catch (error) {
    console.error("Error sending internship application:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit application" },
      { status: 500 }
    );
  }
}
