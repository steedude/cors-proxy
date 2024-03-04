module.exports = {
  apps: [
    {
      name: 'cors-proxy',
      script: './index.js',
      env: {
        NODE_ENV: 'prod',
      },
      env_dev: {
        NODE_ENV: 'dev',
      },
    },
  ],
}
