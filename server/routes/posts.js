import express from 'express';

import {getPosts,createPost} from '../controllers/posts.js'

const router=express.Router();

//executing routes here but defining function for the in controllers
router.get('/',getPosts);
router.post('./',createPost)

export default router;