import { getClient } from "./mongo.db.js";
import { ObjectId } from "mongodb";

async function insertPost(post) {
    const client = getClient();
    try {
        await client.connect();
        return await client.db("blog").collection("posts").insertOne(post);
    } catch (err) {
        throw err;
    } finally {
        await client.close()
    }
}

async function getPosts() {
    const client = getClient();
    try {
        await client.connect();
        return await client.db("blog").collection("posts").find().toArray();
    } catch (err) {
        throw err;
    } finally {
        await client.close()
    }
}
async function updatePost(post) {
    const client = getClient();
    try {
        await client.connect();
        await client.db("blog").collection("posts").updateOne({ productId: productInfo.productId }, { $set: { post } });
    } catch (err) {
        throw err;
    } finally {
        await client.close()
    }
}
async function insertCommentary({ _id, nome, conteudo }) {

    const comentarioObject = {
        nome,
        conteudo
    }
    console.log(comentarioObject);
    const client = getClient();
    try {
        await client.connect();
        const actualPost = await client.db("blog").collection("posts").findOne({ _id : ObjectId(_id) });
        actualPost.comentarios.push(comentarioObject);

        console.log(actualPost)
        return await client.db("blog").collection("posts").updateOne({_id :ObjectId(_id)}, { $set: { ...actualPost } });
    } catch (err) {
        throw err;
    } finally {
        await client.close()
    }
}


export default {
    insertPost,
    getPosts,
    insertCommentary

}