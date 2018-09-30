const { Sequelize, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const TodoTask = sequelize.define('TodoTask', {
    task: DataTypes.STRING
  }, {});
  TodoTask.associate = function(models) {
    // associations can be defined here
  };
  return TodoTask;
};


/**
 * TodoTask model class
 *
 * @class TodoTask
 * @extends {Model}
 */
class TodoTask extends Model {
  static modelFields = {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
    },
    task: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    completed: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  };

  /**
   * Initialise TodoTask model
   *
   * @static
   * @param {*} sequelize - the sequelize obbject
   * @returns the TodoTask model
   * @memberof TodoTask
   */
  static init(sequelize) {
    const model = super.init(TodoTask.modelFields, { sequelize });
    return model;
  }

  /**
   * TodoTask associations
   *
   * @static
   * @param {*} models = models in the application
   * @memberof TodoTask
   */
  static associate(models) {
    const { TodoList } = models;

    TodoTask.belongsTo(TodoList, {
      foreignKey: 'todoListId',
    });
  }
};

module.exports = TodoTask;
