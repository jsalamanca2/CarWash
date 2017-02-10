module.exports = function(sequelize, DataTypes) {
  return sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true

    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [20],
        isAlphanumberic: true,
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:true,
        isPassword: function(value) {
          if(value < 8 || value > 16 ) {
            throw new Error('The password must have a minimum of 8 and maximum of 16 characters!')
          }
          if(value.search(/[A-Z]/) < 0) {
            throw new Error('The password must have a minimum of one UPPERCASE letter in it!')
          }
          if(value.search(/[0-9]/) < 0) {
            throw new Error('The password must have a minimum of one number in it!')
          }
        }
      }
    },
  email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
      notEmpty: true
    }
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        notEmpty: true
      }
    }
  }
}