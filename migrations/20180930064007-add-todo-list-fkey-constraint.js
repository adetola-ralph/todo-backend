const logger = require('./../services/logger');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const result = await queryInterface.addColumn('TodoTasks', 'todoListId', {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'TodoLists',
          key: 'id',
        }
      });
      return result;
    } catch (error) {
      logger.error(error);
    }
  },

  down: async queryInterface => queryInterface.removeColumn('TodoTasks', 'todoListId')
    .catch(error => logger.error(error))
};
