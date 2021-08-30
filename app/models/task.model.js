module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define("task", {
    Id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    Description: { type: Sequelize.STRING, allowNull: false },
    DueDate: { type: Sequelize.DATEONLY, allowNull: false },
    Completed: { type: Sequelize.BOOLEAN },
    CompletedDate: { type: Sequelize.DATEONLY },
    CreatedDate: { type: Sequelize.DATEONLY },
  });

  return Task;
};
