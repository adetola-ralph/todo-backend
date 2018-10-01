const logger = require('./../services/logger');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('TodoTasks', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    task: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    completed: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }).catch(error => logger.error(error)),
  down: queryInterface => queryInterface.dropTable('TodoTasks')
    .catch(error => logger.error(error))
};
