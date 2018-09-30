module.exports = {
  up: async (queryInterface, Sequelize) => {
    const result = await queryInterface.addColumn('TodoTasks', 'todoListId', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'TodoLists',
        key: 'id',
      }
    });

    return result;
  },

  down: async (queryInterface) => {
    const result = await queryInterface.removeColumn('TodoTasks', 'todoListId');
    return result;
  }
};
