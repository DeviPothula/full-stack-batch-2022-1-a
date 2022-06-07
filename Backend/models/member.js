'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Member.init({
    expanse_id: 
    {type:DataTypes.INTEGER,
      allowNull:false
    },
    amount: 
    {type:DataTypes.INTEGER,
    allowNull:false},
    member_id: {type:DataTypes.INTEGER,allowNull:false}
  }, {
    sequelize,
    tableName:'members',
    modelName: 'Member',
  });
  return Member;
};