require('dotenv/config');

module.exports = {
  dialect: process.env.DB_USER,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
