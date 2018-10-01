module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    favorited: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {});

  Favorite.associate = function association(models) {
    const { User, TodoTask } = models;

    Favorite.belongsTo(User, {
      foreignKey: 'userId',
    });

    Favorite.belongsTo(TodoTask, {
      foreignKey: 'todoTaskId',
    });
  };

  return Favorite;
};
