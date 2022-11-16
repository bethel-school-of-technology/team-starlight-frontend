"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeFactory = exports.Recipes = void 0;
const sequelize_1 = require("sequelize");
class Recipes extends sequelize_1.Model {
}
exports.Recipes = Recipes;
function recipeFactory(sequelize) {
    Recipes.init({
        recipeId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        recipeName: {
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
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        }
    }, {
        freezeTableName: true,
        tableName: 'recipes',
        sequelize
    });
}
exports.recipeFactory = recipeFactory;
