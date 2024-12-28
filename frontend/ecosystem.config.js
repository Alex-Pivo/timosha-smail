module.exports = {
  apps: [
    {
      name: 'frontend',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3002,  // Change to 3002 or another available port
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 3002,  // Change to 3002 or another available port
      },
    },
    {
      name: 'manage',
      script: '/root/Timosha/timosha-smail/backend/djangoProject/manage.py',
      interpreter: '/root/Timosha/timosha-smail/backend/djangoProject/venv/bin/python',
      args: 'runserver 0.0.0.0:8000',
      watch: true,
    },
  ],
};
