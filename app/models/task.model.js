module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define("task", {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    description: { type: Sequelize.STRING, allowNull: false },
    dueDate: { type: Sequelize.DATEONLY, allowNull: false },
    completed: { type: Sequelize.BOOLEAN },
    completedDate: { type: Sequelize.DATEONLY },
    createdDate: { type: Sequelize.DATEONLY },
  });

  return Task;
};
