import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Prime Hire Minds Portal" <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `[ENQUIRY] ${subject || "Service Inquiry"} - ${name}`,
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
            .info-label { display: table-cell; padding: 8px 0; font-weight: bold; color: #666666; width: 140px; font-size: 13px; }
            .info-value { display: table-cell; padding: 8px 0; color: #0B2C5F; font-size: 14px; }
            .message-box { background-color: #f8f9fa; border: 1px solid #eeeeee; padding: 25px; margin-top: 10px; font-style: italic; color: #444444; border-left: 4px solid #0B2C5F; }
            .footer { background-color: #f4f4f4; padding: 20px; text-align: center; color: #888888; font-size: 11px; }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h1>Prime Hire Minds Consulting</h1>
            </div>
            <div class="content">
              <div class="section-title">New Service Enquiry</div>
              
              <div class="info-grid">
                <div class="info-row">
                  <div class="info-label">Client Name:</div>
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
                  <div class="info-label">Subject:</div>
                  <div class="info-value">${subject || "General Inquiry"}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Timestamp:</div>
                  <div class="info-value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)</div>
                </div>
              </div>

              <div class="section-title">Client Message</div>
              <div class="message-box">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            <div class="footer">
              This is an automated notification from your website's contact portal.<br>
              &copy; ${new Date().getFullYear()} Prime Hire Minds Consulting.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
