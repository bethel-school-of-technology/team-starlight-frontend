import { Sequelize } from "sequelize";
import { recipeFactory } from "./recipes";

const dbName = 'FoodGrubDB';
const username = 'root';
const password = 'Password1!';

const sequelize = new Sequelize(dbName, username, password, {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
});

recipeFactory(sequelize);

export const db = sequelize;