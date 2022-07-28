import express from "express";
import ServiceController from "../controllers/service.controller.js";


const router = express.Router();
router.post('/', ServiceController.createService);
router.get('/', ServiceController.getServices);
router.get('/:id', ServiceController.getServices);


export default router;