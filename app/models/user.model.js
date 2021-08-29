module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define("task", {
    Id: { type: Sequelize.STRING, primaryKey: true },
    Email: { type: Sequelize.STRING },
    Password: { type: Sequelize.STRING },
    CreatedDate: { type: Sequelize.DATEONLY },
  });

  return Task;
};
