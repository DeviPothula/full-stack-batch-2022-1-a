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
    static associate({Member,User}) {
      // define association here
      this.hasMany(Member,{foreignKey:'expanse_id'})
      this.belongsTo(User,{foreignKey:'created_by'})
    }
  }
  Expense.init({
    group_id:
    {
       type:DataTypes.INTEGER,
       allowNull:true
    },
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