import { Router } from "express";

import { getAllCustomersController, getCustomerByIdController, createCustomerController, updateCustomerController, deleteCustomerController } from "./customer.controller"
import { auth } from "../middlewares/auth";


const router = Router()

router.get("/", getAllCustomersController);
router.get("/:id", getCustomerByIdController);
router.post("/", createCustomerController);
router.put("/:id", auth, updateCustomerController);
router.delete("/:id", auth, deleteCustomerController);


export default router