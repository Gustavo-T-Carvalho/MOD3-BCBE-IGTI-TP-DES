import PostService from "../services/post.service.js";

async function createPost(req, res, next) {
    try {
        let post = req.body;
        res.send(await PostService.createPost(post));
        logger.info(`POST /post - ${JSON.stringify(post)}`);
    } catch (error) {
        next(error)
    }
}

async function getPosts(req, res, next) {
    try {
        const response = await PostService.getPosts()
        console.log(response)
        res.send(response);
        logger.info(`GET /Post`)
    } catch (error) {
        next(error)
    }
}

async function insertCommentary(req, res, next) {
    try {
        let commentary = req.body;
        res.send(await PostService.insertCommentary(commentary));
        logger.info(`post /commentary`)
    } catch (error) {
        next(error)
    }
}

export default {
    createPost,
    getPosts,
    insertCommentary
}