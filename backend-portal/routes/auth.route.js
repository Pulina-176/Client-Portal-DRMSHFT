import express from 'express';
import { signin } from '../controllers/auth.controller.js';


const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: "Auth route"});
});
router.post('/signin', signin);

export default router;