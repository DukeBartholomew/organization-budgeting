import {
  createOrganization,
  getAllOrganizations,
  getOrgById,
  deleteAllOrganizations,
} from "../services/organizations.services.js";

async function createOrganizationHandler(req, res) {
  try {
    const newOrg = await createOrganization(req.body);
    console.log(newOrg);
    res.status(201).json(newOrg);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}

async function getAllOrganizationsHandler(req, res) {
  try {
    const orgs = await getAllOrganizations();
    console.log(orgs);
    res.status(200).json(orgs);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}

async function getOrganizationByIdHandler(req, res) {
  try {
    const org = await getOrgById(req.params.orgId);
    console.log(org);
    res.status(200).json(org);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}

async function deleteAllOrganizationsHandler(req, res) {
  try {
    const rowsDeleted = await deleteAllOrganizations();
    console.log(rowsDeleted);
    res.status(200).json(rowsDeleted);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}

export {
  createOrganizationHandler,
  getAllOrganizationsHandler,
  getOrganizationByIdHandler,
  deleteAllOrganizationsHandler,
};
