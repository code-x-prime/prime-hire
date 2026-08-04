module.exports = {
  apps: [
    {
      name: "prime-hire",
      cwd: "/root/prime-hire",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 7011
      },
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "800M",
      error_file: "/root/.pm2/logs/prime-hire-error.log",
      out_file: "/root/.pm2/logs/prime-hire-out.log",
      log_date_format: "DD/MM/YYYY HH:mm:ss"
    }
  ]
};
