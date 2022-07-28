import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Owner from "./owner.model.js";

const Dog = db.define('animais', {
    animalId:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {underscored: true});

Dog.belongsTo(Owner, {foreignKey: "proprietarioId"})

export default Dog;