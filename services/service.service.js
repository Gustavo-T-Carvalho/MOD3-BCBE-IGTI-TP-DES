import ServiceRepository from '../repositories/service.repository.js'


async function createService(service) {
    return await ServiceRepository.insertService(service);
}

async function getServices(proprietarioId) {
    if(proprietarioId){
        return await ServiceRepository.getServicesByProprietarioId(proprietarioId);
    }
    return await ServiceRepository.getServices();
}


export default {
    createService,
    getServices
}