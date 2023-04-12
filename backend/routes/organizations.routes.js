import { Router } from "express";

import {
  createOrganizationHandler,
  getAllOrganizationsHandler,
  getOrganizationByIdHandler,
  deleteAllOrganizationsHandler,
} from "../controllers/organizations.controller.js";

const organizationsRouter = Router();

organizationsRouter.post("/", createOrganizationHandler);
organizationsRouter.get("/", getAllOrganizationsHandler);
organizationsRouter.get("/:orgId", getOrganizationByIdHandler);
organizationsRouter.delete(
  "/clearOrganizations",
  deleteAllOrganizationsHandler
);

export default organizationsRouter;
