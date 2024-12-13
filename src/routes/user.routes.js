import { Router } from "express";
import { registerUser , logInUser , logOutUser , refereshAccessToken } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        {name:"avatar" , maxCount:1},
        {name:"coverImage" , maxCount:1}
    ]),
    registerUser
);

router.route("/login").post(logInUser);

router.route("/logout").post(verifyJWT ,logOutUser);

router.route("/refresh-token").post(refereshAccessToken);


export default router; 