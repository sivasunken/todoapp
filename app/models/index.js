const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.task = require("./task.model.js")(sequelize, Sequelize);
// db.user = require("./user.model.js")(sequelize, Sequelize);

// User has One-Many relation to Task
// db.user.hasMany(db.task, { as: "tasks" });
// db.task.belongsTo(db.user, { foreignKey: "userId", as: "user" });

module.exports = db;
