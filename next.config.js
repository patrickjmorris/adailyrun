require('dotenv').config()

module.exports = {
  env: {
    GHOST_CMS_URL: process.env.GHOST_CMS_URL,
    GHOST_API_KEY: process.env.GHOST_API_KEY,
    GHOST_API_VERSION: process.env.GHOST_API_VERSION,
  },
}
