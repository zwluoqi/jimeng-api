module.exports = {
    apps: [{
      name: 'jimeng-api',
      script: 'node --enable-source-maps --no-node-snapshot dist/index.js',
      env_production: {
        NODE_ENV: 'production',
        PORT: '5100',
      }
    }]
  }