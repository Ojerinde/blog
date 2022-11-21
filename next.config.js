const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')


// Configurations for development
/** @type {import('next').NextConfig} */
const devNextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    mogodb_username: 'joel',
    mogodb_password: 'joel',
    monodb_clustername: 'cluster0',
    mongodb_database: 'my-site-dev'
  }
}

// Production configurations
const proNextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    mogodb_username: 'joel',
    mogodb_password: 'joel',
    monodb_clustername: 'cluster0',
    mongodb_database: 'my-site'
  }
}

module.exports = () => {
  if (phase = PHASE_DEVELOPMENT_SERVER) {
    return devNextConfig
  }
  return proNextConfig
} 
