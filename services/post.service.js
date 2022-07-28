import PostRepository from '../repositories/post.repository.js'


async function createPost(post) {
    return await PostRepository.insertPost(post);
}

async function getPosts() {
    return await PostRepository.getPosts();
}

async function insertCommentary(commentary) {
    return await PostRepository.insertCommentary(commentary);
}


export default {
    createPost,
    getPosts,
    insertCommentary
}