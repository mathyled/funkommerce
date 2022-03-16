import { Router } from "express";
const router = Router();

import { signUp, signIn, profile, confirm, forgotPassword, newPassword } from "../../controllers/user";
import { tokenValidate } from "../../helpers/user"

router.post("/signUp", signUp); //estas dos rutas solo devolveran un mensaje
router.post("/signIn", signIn); 
router.get("/confirm/:token", confirm); //automaticamente se confirma el usuario
router.get("/profile", tokenValidate, profile); //ruta protegida trae todos los datos del usuario
router.post("/newPassword", forgotPassword); //por esta ruta se manda el email para el cambio de contraseña
router.put("/newPassword/confirm/:token", newPassword); //mandar nueva contraseña y repetirla para confirmar
export default router;