import express from "express";
import DogController from "../controllers/dog.controller.js";


const router = express.Router();
router.post('/', DogController.createDog);
router.get('/', DogController.getDogs);
router.get('/:id', DogController.getDog);
router.delete('/:id', DogController.deleteDog);
router.put('/', DogController.updateDog);

export default router;