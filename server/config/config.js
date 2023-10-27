
// DB config attributes...
module.exports = {
  secret: process.env.SECRET_KEY,
  database: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
  },
};
