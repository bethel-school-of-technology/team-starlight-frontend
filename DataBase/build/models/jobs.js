"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobFactory = exports.Jobs = void 0;
const sequelize_1 = require("sequelize");
class Jobs extends sequelize_1.Model {
}
exports.Jobs = Jobs;
function jobFactory(sequelize) {
    Jobs.init({
        jobsId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        companyName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        jobTitle: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        yearsWorked: {
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
        tableName: 'jobs',
        sequelize
    });
}
exports.jobFactory = jobFactory;
