import mongoose from "mongoose";

const Post = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
});

export default mongoose.model('Posts', Post);