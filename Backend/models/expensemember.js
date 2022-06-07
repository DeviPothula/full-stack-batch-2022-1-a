'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExpenseMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Expense}) {
      // define association here
      this.belongsTo(Expense,{foreignKey:'expense_id'})
    }
  }
  ExpenseMember.init({
    expense_id:
    {
       type:DataTypes.INTEGER,
       allowNull:false
    } ,
    member_id:
    {
     type:DataTypes.INTEGER,
    allowNull:false},
    amount:{
     type:DataTypes.INTEGER,allowNull:false}
  }, {
    sequelize,
    tableName:"expenseMembers",
    modelName: 'ExpenseMember',
  });
  return ExpenseMember;
};