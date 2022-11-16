"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeFactory = exports.Recipe = void 0;
const sequelize_1 = require("sequelize");
class Recipe extends sequelize_1.Model {
}
exports.Recipe = Recipe;
function RecipeFactory(sequelize) {
    Recipe.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        title: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        servings: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        readyInMinutes: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        tableName: 'items',
        sequelize
    });
}
exports.RecipeFactory = RecipeFactory;
