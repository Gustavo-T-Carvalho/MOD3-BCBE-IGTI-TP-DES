import Dog from "../models/dog.model.js"

async function insertDog(dog) {
    try {
        return await Dog.create(dog);
    } catch (err) {
        throw err
    }
}

async function getDogs() {
    try {
        return await Dog.findAll();
    } catch (err) {
        throw err
    }
}

async function getDogsByProprietarioId(proprietarioId) {
    try {
        return await Dog.findAll({
            where: {
                proprietarioId
            }
        });
    } catch (err) {
        throw err
    }
}


async function getDog(id) {
    try {
        return await Dog.findByPk(id);
    } catch (err) {
        throw err;
    }
}

async function updateDog(dog) {
    try {
        await Dog.update(dog, {
            where: {
                animalId: dog.animalId
            }
        });
        return await getDog(dog.animalId);
    } catch (err) {
        throw err;
    }
}

async function deleteDog(id) {
    try {
        await Dog.destroy({
            where: {
                animalId: id
            }
        });
    } catch (err) {
        throw err;
    }
}

export default {
    insertDog,
    getDogs,
    getDog,
    updateDog,
    deleteDog,
    getDogsByProprietarioId
}