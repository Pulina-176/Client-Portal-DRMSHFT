import express from 'express';
const router = express.Router();
import { verifyToken } from '../utils/verifyUser.js';

import { test, getAllTasks } from '../controllers/admin.controller.js';


router.get('/', test);
//router.get('/gettask/:taskid', fetchTaskWithSubtasks); 

// router.get('/allprojects', verifyToken, getAllTasks);
router.get('/allprojects', getAllTasks);

export default router;