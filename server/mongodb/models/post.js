import { mongoose } from "mongoose";



const post  = new mongoose.Schema({
    title: {type: String, required: true},
    prompt: {type: String, required: true},
    photo: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})


const postSchema = mongoose.model('Post', post);
export default postSchema;