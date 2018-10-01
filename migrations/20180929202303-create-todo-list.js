const logger = require('./../services/logger');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('TodoLists', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
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
  down: queryInterface => queryInterface.dropTable('TodoLists')
    .catch(error => logger.error(error))
};
