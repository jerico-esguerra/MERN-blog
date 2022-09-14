import express from 'express';
import auth from "../middleware/auth.js";

import { getPosts, getPostsBySearch, getPost, createPost, updatePost, likePost, commentPost, deletePost, savePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', auth,  createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.post('/:id/commentPost', auth, commentPost);
router.patch('/:id/savePost', auth, savePost);

export default router;