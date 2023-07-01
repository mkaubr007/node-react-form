import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';

const router = express.Router();

//route to get all users
router.get('/getAllUsers', userController.getAllUsers);

//route to create a new user
router.post('/newUser', newUserValidator, userController.newUser);

export default router;
