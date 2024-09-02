import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import PostRoute from "./routes/PostRoute.js";

const app = express();
mongoose.connect('mongodb://localhost:27017/sitemate_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));
app.use(express.json());
app.use(PostRoute);

app.listen(5000, ()=> console.log('Server up and running...'));