import { Router } from "express";
import * as userCreate from '../modules/users/create/controller'
import * as userGetAll from '../modules/users/getAll/controller'
import * as userGetOne from '../modules/users/getOne/controller'
import * as userUpdate from '../modules/users/update/controller'
import * as userDelete from '../modules/users/delete/controller'
import * as addressCreate from '../modules/address/create/controller'
import * as addressGetAll from '../modules/address/getAll/controller'
import * as addressGetOne from '../modules/address/getOne/controller'
import * as addressUpdate from '../modules/address/update/controller'
import * as addressDelete from '../modules/address/delete/controller'
import * as userLogin from '../modules/login/controller'
import { validate } from '../shared/middleware/validate'
import { auth } from '../shared/middleware/auth'
import { createUserSchema, updateUserSchema } from '../shared/validators/user'
import { createAddressSchema, getAllAddressSchema, updateAddressSchema } from '../shared/validators/address'
import { idParamSchema } from '../shared/validators/id'
import { loginSchema } from '../shared/validators/login'

const router = Router();

router.post("/users", validate(createUserSchema), userCreate.create);
router.get("/users", auth, userGetAll.getAll);
router.get("/users/:id", auth, validate(idParamSchema), userGetOne.getOne);
router.put("/users", auth, validate(updateUserSchema), userUpdate.update);
router.delete("/users/:id", auth, validate(idParamSchema), userDelete.remove);

router.post("/addresses", auth, validate(createAddressSchema), addressCreate.create);
router.get("/addresses", auth, validate(getAllAddressSchema), addressGetAll.getAll);
router.get("/addresses/:id", auth, validate(idParamSchema), addressGetOne.getOne);
router.put("/addresses", auth, validate(updateAddressSchema), addressUpdate.update);
router.delete("/addresses/:id", auth, validate(idParamSchema), addressDelete.remove);

router.post("/login", validate(loginSchema), userLogin.login);
export default router;