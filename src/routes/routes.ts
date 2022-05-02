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
import { validate } from '../shared/middleware/validate'
import { createUserSchema, updateUserSchema } from '../shared/validators/user'

const router = Router();

router.post("/users", validate(createUserSchema), userCreate.create);
router.get("/users", userGetAll.getAll);
router.get("/users/:id", userGetOne.getOne);
router.put("/users", validate(updateUserSchema), userUpdate.update);
router.delete("/users/:id", userDelete.remove);

router.post("/addresses", addressCreate.create);
router.get("/addresses", addressGetAll.getAll);
router.get("/addresses/:id", addressGetOne.getOne);
router.put("/addresses", addressUpdate.update);
router.delete("/addresses/:id", addressDelete.remove);

export default router;