import express from "express";
import PostController from "../controllers/post.controller.js";


const router = express.Router();
router.post('/', PostController.createPost);
router.get('/', PostController.getPosts);
router.post('/commentary', PostController.insertCommentary);


export default router;