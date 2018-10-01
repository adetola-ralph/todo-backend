const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
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
  }, {});

  User.associate = function associations(models) {
    const { TodoList } = models;

    User.hasMany(TodoList, {
      foreignKey: 'userId'
    });
  };

  User.comparePassword = function comparePassword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
  };

  return User;
};
