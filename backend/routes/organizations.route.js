import { Router } from "express";

import {
    createOrganizationHandler,
    getAllOrganizationsHandler,
    getOrgByOrgIdHandler,
    deleteAllOrganizationsHandler,
} from "../controllers/organizations.controllers.js";

const orgsRouter = Router();

orgsRouter.post("/", createOrganizationHandler);
orgsRouter.get("/", getAllOrganizationsHandler);
orgsRouter.get("/:orgId", getOrgByOrgIdHandler);
orgsRouter.delete("/clearOrg", deleteAllOrganizationsHandler);

export default orgsRouter;
