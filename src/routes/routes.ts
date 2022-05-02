import { Router } from "express";
import * as userCreate from '../modules/users/create/controller'
import * as userGetAll from '../modules/users/getAll/controller'
import * as userGetOne from '../modules/users/getOne/controller'
import * as userUpdate from '../modules/users/update/controller'
import * as userDelete from '../modules/users/delete/controller'
import { validate } from '../shared/middleware/validate'
import { createUserSchema, updateUserSchema } from '../shared/validators/user'

const router = Router();

router.post("/users", validate(createUserSchema), userCreate.create);
router.get("/users", userGetAll.getAll);
router.get("/users/:id", userGetOne.getOne);
router.put("/users", validate(updateUserSchema), userUpdate.update);
router.delete("/users/:id", userDelete.remove);

export default router;