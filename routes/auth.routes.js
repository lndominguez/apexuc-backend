import express from 'express';
import bodyParser from 'body-parser';
import { register, login } from '../controllers/authController.js';

const router = express.Router();
router.use(bodyParser.json());

router.post('/auth/register', register);
router.post('/auth/login', login);

export default router;
