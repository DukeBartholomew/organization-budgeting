import { Router } from "express";

import {
  createOrganizationHandler,
  getAllOrganizationsHandler,
  getOrganizationByIdHandler,
  getOrganizationByNameHandler,
  deleteAllOrganizationsHandler,
} from "../controllers/organizations.controller.js";
import { validateToken } from "../middleware/token.validation.js";

const organizationsRouter = Router();

organizationsRouter.post("/", createOrganizationHandler);
organizationsRouter.get("/", getAllOrganizationsHandler);
organizationsRouter.get("/:orgId", getOrganizationByIdHandler);
organizationsRouter.get("/name/:orgName", getOrganizationByNameHandler);
organizationsRouter.delete(
  "/clearOrganizations",
  deleteAllOrganizationsHandler
);

export default organizationsRouter;
