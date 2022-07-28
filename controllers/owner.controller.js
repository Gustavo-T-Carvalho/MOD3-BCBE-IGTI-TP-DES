import ownerService from "../services/owner.service.js";

async function createOwner(req, res, next) {
    try {
        let owner = req.body;
        if (!owner.nome || !owner.telefone) {
            throw new Error('Nome e telefone são obrigatórios')
        }
        res.send(await ownerService.createOwner(owner));
        logger.info(`POST /owner - ${JSON.stringify(owner)}`);
    } catch (error) {
        next(error)
    }
}

async function getOwners(req, res, next) {
    try {
        res.send(await ownerService.getOwners());
        logger.info(`GET /owner`)
    } catch (error) {
        next(error)
    }
}

async function getOwner(req, res, next) {
    try {
        let id = req.params.id;
        if (!id) {
            throw new Error('O id é obrigatório');
        }
        res.send(await ownerService.getOwner(id));
        logger.info(`GET /owner`)
    } catch (error) {
        next(error)
    }
}


async function deleteOwner(req, res, next) {
    try {
        let id = req.params.id;
        if (!id) {
            throw new Error('O id é obrigatório');
        }
        await ownerService.deleteOwner(id);
        res.end();
        logger.info(`DELETE /owner - ${id}`)
    } catch (error) {
        next(error)
    }
}

async function updateOwner(req, res, next) {
    try {
        let owner = req.body;
        if (!owner.nome || !owner.telefone || !owner.proprietarioId) {
            throw new Error('Nome, telefone e proprietario_id são obrigatórios')
        }
        res.send(await ownerService.updateOwner(owner));
        logger.info(`PUT /owner - ${JSON.stringify(owner)}`)
    } catch (error) {
        next(error)
    }
}

export default {
    createOwner,
    getOwners,
    getOwner,
    deleteOwner,
    updateOwner
}