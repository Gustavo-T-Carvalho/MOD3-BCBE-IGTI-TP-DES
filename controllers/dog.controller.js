import DogService from "../services/dog.service.js";

async function createDog(req, res, next) {
    try {
        let dog = req.body;
        if (!dog.nome || !dog.tipo || !dog.proprietarioId) {
            throw new Error('Nome, tipo e proprietarioId são obrigatórios')
        }
        res.send(await DogService.createDog(dog));
        logger.info(`POST /dog - ${JSON.stringify(dog)}`);
    } catch (error) {
        next(error)
    }
}

async function getDogs(req, res, next) {
    try {
        res.send(await DogService.getDogs(req.query.proprietarioId));
        logger.info(`GET /dog`)
    } catch (error) {
        next(error)
    }
}

async function getDog(req, res, next) {
    try {
        let id = req.params.id;
        if (!id) {
            throw new Error('O id é obrigatório');
        }
        res.send(await DogService.getDog(id));
        logger.info(`GET /dog`)
    } catch (error) {
        next(error)
    }
}


async function deleteDog(req, res, next) {
    try {
        let id = req.params.id;
        if (!id) {
            throw new Error('O id é obrigatório');
        }
        await DogService.deleteDog(id);
        res.end();
        logger.info(`DELETE /dog - ${id}`)
    } catch (error) {
        next(error)
    }
}

async function updateDog(req, res, next) {
    try {
        let dog = req.body;
        
        if (!dog.nome || !dog.tipo || !dog.proprietarioId || !dog.animalId) {
            throw new Error('Nome, tipo, proprietario_id e dog_id são obrigatórios')
        }
        res.send(await DogService.updateDog(dog));
        logger.info(`PUT /dog - ${JSON.stringify(dog)}`)
    } catch (error) {
        next(error)
    }
}

export default {
    createDog,
    getDogs,
    getDog,
    deleteDog,
    updateDog
}