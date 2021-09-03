module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    Id: { type: Sequelize.STRING, primaryKey: true },
    Email: { type: Sequelize.STRING },
    Password: { type: Sequelize.STRING },
    CreatedDate: { type: Sequelize.DATEONLY },
  });

  return User;
};
