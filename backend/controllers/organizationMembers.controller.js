import {
  addMemberToOrganization,
  getAllOrganizationMembers,
  getOrganizationsWithMember,
  getMembersFromOrganization,
  getOrganizationMemberByOrgIdAndUserId,
  deleteAllOrganizationMembers,
} from "../services/organizationMembers.services.js";

async function addMemberToOrganizationHandler(req, res) {
  try {
    //todo figure out how front end will send userId and orgId
    const orgId = 1; //change these later to req.params or.body
    const userId = 1;
    const newMember = await addMemberToOrganization(orgId, userId);
    console.log(newMember);
    res.status(200).json(newMember);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
}

async function getAllOrganizationMembersHandler(req, res) {
  try {
    const organizationMembers = await getAllOrganizationMembers();
    console.log(organizationMembers);
    res.status(200).json(organizationMembers);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
}

async function getOrganizationsWithMember(req, res) {
  try {
    const userId = 1; //todo figure out how frontend wants to send this
    const organizations = await getOrganizationsWithMember(userId);
    console.log(organizations);
    res.status(200).json(organizations);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
}

async function getMembersFromOrganization(req, res) {
  try {
    const orgId = 1; //todo figure out how frontend wants to send this
    const members = getMembersFromOrganization(orgId);
    console.log(members);
    res.status(200).json(members);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
}

async function getOrganizationMemberByOrgIdAndUserIdHandler(req, res) {
  try {
    //double check this is how front end will want to send orgId/userId
    const member = await getOrganizationMemberByOrgIdAndUserId(
      req.params.orgId,
      req.params.userId
    );
    console.log(member);
    res.status(200).json(member);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
}

async function deleteAllOrganizationMembersHandler(req, res) {
  try {
    const rowsDeleted = await deleteAllOrganizationMembers();
    console.log(rowsDeleted);
    res.status(200).json(rowsDeleted);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
}

export {
  addMemberToOrganizationHandler,
  getAllOrganizationMembersHandler,
  getOrganizationsWithMember,
  getMembersFromOrganization,
  getOrganizationMemberByOrgIdAndUserIdHandler,
  deleteAllOrganizationMembersHandler,
};
