const { Sequelize, Model } = require('sequelize');
const bcrypt = require('bcrypt');

/**
 * User model class
 *
 * @class Users
 */
class User extends Model {
  static modelFields = {
    id: {
      type: Sequelize.UUID,
      primaryKey: true
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^[A-Za-z][A-Za-z]{2,39}$/i,
          msg: 'firstname must start with a letter, have no spaces, and be 3 - 40 characters long.'
        }
      },
      set(value) {
        this.setDataValue('firstname', value.trim());
      }
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^[A-Za-z][A-Za-z]{2,39}$/i,
          msg: 'surname must start with a letter, have no spaces, and be 3 - 40 characters long.'
        }
      },
      set(value) {
        this.setDataValue('surname', value.trim());
      }
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: {
        args: true,
        msg: 'Oops. There is an existing account with this email address.',
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'The email you entered is invalid.'
        },
      },
      set(value) {
        this.setDataValue('email', value);
      }
    },
    imageUrl: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        isValidImageUrl(value) {
          if (!/(https?:\/\/.*\.(?:png|jpg))/i.test(value)) {
            throw new Error('Invalid image URL.');
          }
        }
      },
      set(value) {
        this.setDataValue('imageUrl', value.trim());
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        isLongEnough(value) {
          if (value.length < 8) {
            throw new Error('Please choose a longer password');
          }
          const salt = bcrypt.genSaltSync(10);
          const hash = bcrypt.hashSync(value, salt);
          this.setDataValue('password', hash);
        }
      }
    },
  };

  /**
   * Initializes the user model
   *
   * @static
   * @param {*} sequelize - the sequelize obbject
   * @returns {object} the User model
   * @memberof User
   */
  static init(sequelize) {
    const model = super.init(User.modelFields, { sequelize });
    return model;
  }

  /**
   * Compares string password with the hashed password
   *
   * @static
   * @param {any} password the supplied password
   * @param {any} hashedPassword the hashed password
   * @returns {boolean} the result of the password comparison
   * @memberof User
   */
  static comparePassword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
  }

  /**
   * User mode association
   *
   * @static
   * @param {*} models - all models in the application
   * @memberof User
   */
  static associate(models) {
    const { TodoList } = models;

    User.hasMany(TodoList, {
      foreignKey: 'userId'
    });
  }
}

module.exports = Users;
