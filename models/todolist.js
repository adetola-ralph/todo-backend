const { Sequelize, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const TodoList = sequelize.define('TodoList', {
    name: DataTypes.STRING
  }, {});
  TodoList.associate = function(models) {
    // associations can be defined here
  };
  return TodoList;
};

/**
 * TodoList model class
 *
 * @class TodoList
 * @extends {Model}
 */
class TodoList extends Model {
  static modelFields = {
    id: {
      type: Sequelize.UUID,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  };

  /**
   * Initializes the todolist model
   *
   * @static
   * @param {*} sequelize - the sequelize obbject
   * @returns {object} the TodoList model
   * @memberof TodoList
   */
  static init(sequelize) {
    const model = super.init(TodoList.modelFields, { sequelize });
    return model;
  }

  /**
   * TodoList association
   *
   * @static
   * @param {*} models - models in the application
   * @memberof TodoList
   */
  static associate(models) {
    const { TodoTask, User } = models;

    TodoList.hasMany(TodoTask, {
      foreignKey: 'todoListId',
    });

    TodoList.belongsTo(User, {
      foreignKey: 'userId',
      as: 'owner'
    });
  }
}

module.exports = TodoList;
