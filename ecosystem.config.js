module.exports = {
  apps : [{
    name: 'SakamichiFE',
    port: '3000',
    script: './.output/server/index.mjs',
    args: 'start',
    // env_production: {
    //   NODE_ENV: "production",
    //   STRAPI_URL: 'https://api.sakamichi.online'
    // },
    // env: {
    //   NODE_ENV: "development",
    //   STRAPI_URL: 'https://api.sakamichi.online'
    // }
  }],

  deploy : {
    development : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',

    }
  }
};
