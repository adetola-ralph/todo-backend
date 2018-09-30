const { Sequelize, Models } = require('sequelize');

class Favorite extends Models {
  static modelFields = {
    favorited: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  }

  /**
   * Initializes the favorite model
   *
   * @static
   * @param {*} Sequelize - the sequelize object
   * @memberof Favorite - Favorite model
   */
  static init(sequelize) {
    return super.init(Model.modelFields, { sequelize });
  }

  /**
   * Favorite model association
   *
   * @static
   * @memberof Favorite
   */
  static associate(models) {
    const { User, TodoTask } = models;

    Favorite.belongsTo(User, {
      foreignKey: 'userId',
    });

    Favorite.belongsTo(TodoTask, {
      foreignKey: 'todoTaskId',
    });
  }
}

module.exports = Favorite;
