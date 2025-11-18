import { Router } from "express";
import { login, register } from "../controllers/userController.js";

const router: Router = Router();

router.post('/signin', login);
router.post('/signup', register);


export default router;