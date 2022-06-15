'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Activity.init({
    user_id:
    {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    activity_name:
    {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    created_Time:
    {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    tableName:'activities',
    modelName: 'Activity',
  });
  return Activity;
};