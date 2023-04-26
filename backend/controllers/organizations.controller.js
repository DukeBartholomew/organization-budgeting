import {
  createOrganization,
  getAllOrganizations,
  getOrgById,
  getOrganizationByName,
  deleteAllOrganizations,
  deleteOrganization,
  getOrganizationByCreator,
} from "../services/organizations.services.js";

async function createOrganizationHandler(req, res) {
  try {
    const newOrganization = await createOrganization(req.body);
    console.log(newOrganization);
    res.status(201).json(newOrganization);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}

async function getAllOrganizationsHandler(req, res) {
  try {
    const organization = await getAllOrganizations();
    console.log(organization);
    res.status(200).json(organization);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}

async function getOrganizationByIdHandler(req, res) {
  try {
    const organization = await getOrgById(req.params.orgId);
    console.log(organization);
    res.status(200).json(organization);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}

async function getOrganizationByNameHandler(req, res) {
  try {
    const organization = await getOrganizationByName(req.params.orgName);
    console.log(organization);
    res.status(200).json(organization);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
}

async function getOrganizationByCratorHandler(req, res) {
  try{
    const organization = await getOrganizationByCreator(req.params.creator);
    console.log(organization);
    res.status(200).json(organization);
  }catch (error) {
    console.log(error);
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

async function deleteOrganizationHandler(req, res) {
  try {
    const rowsDeleted = await deleteOrganization(req.params.orgName);
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
  getOrganizationByNameHandler,
  deleteAllOrganizationsHandler,
  deleteOrganizationHandler,
  getOrganizationByCratorHandler,
};
