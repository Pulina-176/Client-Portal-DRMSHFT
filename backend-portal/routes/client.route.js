import express from 'express';
import { test, fetchTaskWithSubtasks } from '../controllers/client.controller.js';
const router = express.Router();


router.get('/', test);
router.get('/gettask/:taskid', fetchTaskWithSubtasks); 


export default router;