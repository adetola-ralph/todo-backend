module.exports = (sequelize, DataTypes) => {
  const TodoTask = sequelize.define('TodoTask', {
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  }, {});
  TodoTask.associate = function associations(models) {
    const { TodoList } = models;

    TodoTask.belongsTo(TodoList, {
      foreignKey: 'todoListId',
    });
  };

  return TodoTask;
};
