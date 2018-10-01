module.exports = (sequelize, DataTypes) => {
  const TodoList = sequelize.define('TodoList', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});

  TodoList.associate = function association(models) {
    const { TodoTask, User } = models;

    TodoList.hasMany(TodoTask, {
      foreignKey: 'todoListId',
    });

    TodoList.belongsTo(User, {
      foreignKey: 'userId',
      as: 'owner'
    });
  };

  return TodoList;
};
