import ServiceService from "../services/service.service.js";

async function createService(req, res, next) {
    try {
        let service = req.body;
        if (!service.descricao  || !service.valor || !service.animalId) {
            throw new Error('Nome, tipo e animalId são obrigatórios')
        }
        res.send(await ServiceService.createService(service));
        logger.info(`POST /service - ${JSON.stringify(service)}`);
    } catch (error) {
        next(error)
    }
}

async function getServices(req, res, next) {
    try {
        res.send(await ServiceService.getServices(req.query.proprietarioId));
        logger.info(`GET /dog`)
    } catch (error) {
        next(error)
    }
}

export default {
    createService,
    getServices,
   
}