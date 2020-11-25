import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app=express();

//app.use('/posts',postRoutes) //every route inside of posts routes is goint to start from posts ,that is added a prefix posts to all routes ,//localhost:5000/posts

app.use(bodyParser.json({limit:"30mb",extended:true})) //limit the size of data/images received to 30mb
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

app.use('/posts',postRoutes);//every route inside of posts routes is goint to start from posts ,that is added a prefix posts to all routes ,//localhost:5000/posts

const CONNECTION_URL='mongodb+srv://TaranjotSingh:Taranjot123@cluster0.vytf8.mongodb.net/<dbname>?retryWrites=true&w=majority'
const PORT=process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
    .catch((error)=>console.log(error.message))

mongoose.set('useFindAndModify',false);