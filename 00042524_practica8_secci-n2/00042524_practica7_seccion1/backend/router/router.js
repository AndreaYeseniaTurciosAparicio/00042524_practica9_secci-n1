import express from "express";
const router = express.Router();

import { verifyToken } from "../middleware/index.js";
import { SignIn } from "../controllers/signin.js"; 
import { SignUp } from "../controllers/signup.js";
import { displayHome } from "../controllers/displayHome.js";
import { getUsersDesc, getUserById } from "../controllers/getUsers.js";
import { updateUser } from "../controllers/updateUser.js";
import { deleteUser } from "../controllers/deleteUser.js";



router.get('/displayHome', displayHome);
router.post('/signin', SignIn);
router.post('/signup', SignUp);
router.get('/users', verifyToken, getUsersDesc);       
router.get('/users/:id', verifyToken, getUserById);
router.put('/users/:id', verifyToken, updateUser);
router.delete('/users/:id', verifyToken, deleteUser);

export default router;