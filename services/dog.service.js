import DogRepository from '../repositories/dog.repository.js'

async function createDog(dog) {
    return await DogRepository.insertDog(dog);
}

async function getDogs(proprietario_id) {
    if(proprietario_id){
        return await DogRepository.getDogsByProprietarioId(proprietario_id);
    }
    return await DogRepository.getDogs();
}

async function getDog(id) {
    return await DogRepository.getDog(id);
}

async function deleteDog(id) {
    await DogRepository.deleteDog(id);
}

async function updateDog(dog) {
    return await DogRepository.updateDog(dog);
}


export default {
    createDog,
    getDogs,
    getDog,
    deleteDog,
    updateDog
}