module.exports = {
  up: async (queryInterface, Sequelize) => {
    const result = await queryInterface.addColumn('TodoLists', 'userId', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      }
    });

    return result;
  },

  down: async (queryInterface) => {
    const result = await queryInterface.removeColumn('TodoLists', 'userId');
    return result;
  }
};
