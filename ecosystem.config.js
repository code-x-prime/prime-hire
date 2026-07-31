module.exports = {
  apps: [
    {
      name: "yashika-management-service",
      cwd: "/root/yashika-management-service",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 7009
      },
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "800M",
      error_file: "/root/.pm2/logs/yashika-management-service-error.log",
      out_file: "/root/.pm2/logs/yashika-management-service-out.log",
      log_date_format: "DD/MM/YYYY HH:mm:ss"
    }
  ]
};
