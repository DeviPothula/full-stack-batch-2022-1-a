'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Groupmembers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Group}) {
      // define association here
      this.belongsTo(Group,{foreignKey:'group_id'})
    }
  }
  Groupmembers.init({
    group_id:
    {
       type:DataTypes.INTEGER,
       allowNull:false
    },
    member_id:
    {
       type:DataTypes.INTEGER,
       allowNull:false
    }
  }, {
    sequelize,
    tableName:'groupmembers',
    modelName: 'Groupmembers',
  });
  return Groupmembers;
};