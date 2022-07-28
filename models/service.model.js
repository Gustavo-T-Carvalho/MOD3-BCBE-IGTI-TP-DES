import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Dog from "./dog.model.js";

const Service = db.define('servicos', {
    servicoId:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    valor: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    }
}, {underscored: true});

Service.belongsTo(Dog, {foreignKey: "animalId"})

export default Service;