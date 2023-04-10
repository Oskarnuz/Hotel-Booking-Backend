import { Router } from "express";

import { getAllCustomersController, getCustomerByIdController, createCustomerController, updateCustomerController, deleteCustomerController } from "./customer.controller"


const router = Router()

router.get("/", getAllCustomersController);
router.get("/:id", getCustomerByIdController);
router.post("/", createCustomerController);
router.put("/:id", updateCustomerController);
router.delete("/:id", deleteCustomerController);


export default router