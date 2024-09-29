import express from 'express';
const router = express.Router();

import { test, getAllTasks } from '../controllers/admin.controller.js';

router.get('/', test);
//router.get('/gettask/:taskid', fetchTaskWithSubtasks); 

router.get('/allprojects', getAllTasks);

export default router;