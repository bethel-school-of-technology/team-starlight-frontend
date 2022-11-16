import { InferAttributes, InferCreationAttributes, Model, DataTypes, Sequelize } from "sequelize";


export class Recipes extends Model<InferAttributes<Recipes>, InferCreationAttributes<Recipes>>{
    declare id: number;
    declare title: string;
    declare imgUrl: string;
    declare description: string;
    declare createdAt?: Date
}

export function recipeFactory(sequelize: Sequelize) {
    Recipes.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        
    }, {
        freezeTableName: true,
        tableName: 'recipes',
        sequelize
    });
}

