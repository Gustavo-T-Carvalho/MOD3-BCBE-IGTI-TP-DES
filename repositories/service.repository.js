import Service from "../models/service.model.js"
import Dog from "../models/dog.model.js"
import Owner from "../models/owner.model.js";
async function insertService(service) {
    try {
        return await Service.create(service);
    } catch (err) {
        throw err
    }
}

async function getServices() {
    try {
        return await Service.findAll({
            include: [
                {
                    model: Dog,
                    include:{
                        model: Owner
                    }
                    
                }
            ]
        });
    } catch (err) {
        throw err
    }
}

async function getServicesByProprietarioId(proprietarioId) {
    try {
        return await Service.findAll({
            include: [
                {
                    model: Dog,
                    where: {
                        proprietarioId: proprietarioId
                    },
                }
            ]
        });
    } catch (err) {
        throw err
    }
}


export default {
    insertService,
    getServices,
    getServicesByProprietarioId,
  
}