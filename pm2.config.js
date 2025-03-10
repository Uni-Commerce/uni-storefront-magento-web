module.exports = {
  apps: [
    {
      name: 'uni',
      exec_mode: 'cluster',
      instances: 1,
      args: 'start',
      script: './node_modules/next/dist/bin/next',
      watch: false,
      autorestart: true,
      combine_logs: true,
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      exp_backoff_restart_delay: 100,
      ignore_watch: ['node_modules'],
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      pid_file: '/tmp/.pm2/pid/cmc.pid',
      error_file: '/tmp/.pm2/logs/cmc_err.log'
    },
    {
      name: 'uni-auth',
      exec_mode: 'cluster',
      instances: 1,
      args: 'start',
      script: './dist/server.js',
      watch: false,
      autorestart: true,
      combine_logs: true,
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      exp_backoff_restart_delay: 100,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      pid_file: '/tmp/.pm2/pid/cmc.pid',
      error_file: '/tmp/.pm2/logs/cmc_auth_err.log'
    }
  ]
}
