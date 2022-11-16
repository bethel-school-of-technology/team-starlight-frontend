"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeFactory = exports.Recipes = void 0;
const sequelize_1 = require("sequelize");
class Recipes extends sequelize_1.Model {
}
exports.Recipes = Recipes;
function recipeFactory(sequelize) {
    Recipes.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        imgUrl: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
    }, {
        freezeTableName: true,
        tableName: 'recipes',
        sequelize
    });
}
exports.recipeFactory = recipeFactory;
