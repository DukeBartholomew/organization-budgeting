import { Router } from "express";

import {
  createOrganizationHandler,
  getAllOrganizationsHandler,
  getOrgByIdHandler,
  deleteAllOrganizationsHandler,
} from "../controllers/organizations.controllers.js";

const orgsRouter = Router();

orgsRouter.post("/", createOrganizationHandler);
orgsRouter.get("/", getAllOrganizationsHandler);
orgsRouter.get("/:orgId", getOrgByIdHandler);
orgsRouter.delete("/clearOrg", deleteAllOrganizationsHandler);

export default orgsRouter;
