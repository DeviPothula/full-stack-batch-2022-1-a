'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Groupmembers,User}) {
      // define association here
      this.hasMany(Groupmembers,{foreignKey:'group_id'})
      this.belongsTo(User,{foreignKey:'createdBy'})
    }
  }
  Group.init({
    
    // group_id: DataTypes.INTEGER,
    group_name:
    {
      type:DataTypes.STRING,
      allowNull:false
      
    },
    createdBy:
    {
      type:DataTypes.INTEGER,
      allowNull:false
    },
  
  }, {
    sequelize,
    tableName:'groups',
    modelName: 'Group',
  });
  return Group;
};