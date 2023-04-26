import { Router } from "express";

import {
  createOrganizationHandler,
  getAllOrganizationsHandler,
  getOrganizationByIdHandler,
  getOrganizationByNameHandler,
  deleteAllOrganizationsHandler,
  deleteOrganizationHandler,
  getOrganizationByCratorHandler,
} from "../controllers/organizations.controller.js";
import { validateToken } from "../middleware/token.validation.js";

const organizationsRouter = Router();

organizationsRouter.post("/", createOrganizationHandler);
organizationsRouter.get("/", getAllOrganizationsHandler);
organizationsRouter.get("/:orgId", getOrganizationByIdHandler);
organizationsRouter.get("/name/:orgName", getOrganizationByNameHandler);
organizationsRouter.get("/creator/:creator", getOrganizationByCratorHandler);
organizationsRouter.delete(
  "/clearOrganizations",
  deleteAllOrganizationsHandler
);

organizationsRouter.delete("/:orgName", deleteOrganizationHandler);
export default organizationsRouter;
