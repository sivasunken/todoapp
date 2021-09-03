module.exports = {
  HOST: process.env.MYSQL_HOST_IP || "localhost",
  USER: process.env.MYSQL_USER || "root",
  PASSWORD: process.env.MYSQL_PASSWORD || "W@C60^vKRCSB",
  DB: process.env.MYSQL_DATABASE || "tododb",
  PORT: "9906",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
