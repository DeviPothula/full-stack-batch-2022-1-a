'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Friend,Expense,Group}) {
      // define association here
      this.hasMany(Friend,{foreignKey:'user_id'});
      this.hasMany(Expense,{foreignKey:'created_by'});
      this.hasMany(Group,{foreignKey:'createdBy'})
    }
  }
  User.init({
    name:
    {
      type:DataTypes.STRING,
      allowNull:false
    },
    phone_number:
    {
      type:DataTypes.TEXT,
      allowNull:false
    },
    email:
    {
      type:DataTypes.STRING,
      allowNull:false
    },
    password:
    {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    tableName:'user_details',
    modelName: 'User',
  });
  return User;
};