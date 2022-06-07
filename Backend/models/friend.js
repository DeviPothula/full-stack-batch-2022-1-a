'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
    this.belongsTo(User,{foreignKey:'user_id'})
    }
  }
  Friend.init({
    frd_id:
    {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    user_id:
    {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    tableName:'friends',
    modelName: 'Friend',
  });
  return Friend;
};