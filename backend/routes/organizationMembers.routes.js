import { Router } from "express";

import {
  addMemberToOrganizationHandler,
  getAllOrganizationMembersHandler,
  getOrganizationsWithMember,
  getMembersFromOrganization,
  getOrganizationMemberByOrgIdAndUserIdHandler,
  deleteAllOrganizationMembersHandler,
} from "../controllers/organizationMembers.controller.js";

const organizationMembersRouter = Router();

organizationMembersRouter.post("/", addMemberToOrganizationHandler);
organizationMembersRouter.get("/", getAllOrganizationMembersHandler);
organizationMembersRouter.get("/:userId", getOrganizationsWithMember);
organizationMembersRouter.get("/:orgId", getMembersFromOrganization);
organizationMembersRouter.get(
  "/:orgId/:userId",
  getOrganizationMemberByOrgIdAndUserIdHandler
);
organizationMembersRouter.delete(
  "/clearOrgMembers",
  deleteAllOrganizationMembersHandler
);

export default organizationMembersRouter;
