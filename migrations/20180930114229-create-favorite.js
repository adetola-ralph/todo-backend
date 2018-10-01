const logger = require('./../services/logger');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Favorites', {
    favorited: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Users',
        key: 'id',
      }
    },
    todoTaskId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TodoTasks',
        key: 'id',
      }
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
  down: async queryInterface => queryInterface.dropTable('Favorites')
    .catch(error => logger.error(error))
};
