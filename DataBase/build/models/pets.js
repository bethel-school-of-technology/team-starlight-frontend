"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.petFactory = exports.Pets = void 0;
const sequelize_1 = require("sequelize");
class Pets extends sequelize_1.Model {
}
exports.Pets = Pets;
function petFactory(sequelize) {
    Pets.init({
        petId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        petName: {
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
        tableName: 'pets',
        sequelize
    });
}
exports.petFactory = petFactory;
