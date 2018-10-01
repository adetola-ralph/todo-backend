const logger = require('./../services/logger');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const result = await queryInterface.addColumn('TodoLists', 'userId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        }
      });
      return result;
    } catch (error) {
      logger.error(error);
    }
  },

  down: async queryInterface => queryInterface.removeColumn('TodoLists', 'userId')
    .catch(error => logger.error(error))
};
