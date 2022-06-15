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
    static associate({Expense}) {
      // define association here
      this.belongsTo(Expense,{foreignKey:'expanse_id'})
    }
  }
  Member.init({
    group_id:
    {
      type:DataTypes.INTEGER,
      allowNull:true
    },
    expanse_id: 
    {type:DataTypes.INTEGER,
      allowNull:false
    },
    amount: 
    {type:DataTypes.INTEGER,
    allowNull:false},
    member_id: 
    {type:DataTypes.INTEGER,allowNull:false},
    is_settled:
    {
      type:DataTypes.BOOLEAN,
      defaultValue:false
    }
   },
     
    {
    sequelize,
    tableName:'members',
    modelName: 'Member',
  });
  return Member;
};