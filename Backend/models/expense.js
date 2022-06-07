'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ExpenseMember,User}) {
      // define association here
      this.hasMany(ExpenseMember,{foreignKey:'expense_id'})
      this.belongsTo(User,{foreignKey:'created_by'})
    }
  }
  Expense.init({
    created_by:
    {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    amount:
    {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    desc:
    {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    tableName:'expenses',
    modelName: 'Expense',
  });
  return Expense;
};