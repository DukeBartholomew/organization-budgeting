import { query } from "express";
import { connection } from "../mysql/connect.js";

async function createOrganization(organization) {
  const { orgName, _description, venmo, creator } = organization;
  const query = `
    INSERT INTO organizations 
    (orgName, _description, venmo, creator) 
    VALUES (?, ?, ?, ?)`;
  try {
    const results = await connection.query(query, [
      orgName,
      _description,
      venmo,
      creator,
    ]);
    return {
      orgId: results[0].insertId,
      orgName,
      _description,
      venmo,
      dateCreated: results[0].dateCreated,
    };
  } catch (error) {
    console.log(error);
  }
}

async function getAllOrganizations() {
  const query = `
    SELECT * 
    FROM organizations`;
  const [rows] = await connection.query(query);
  return rows;
}

async function getOrgById(orgId) {
  const query = `
      SELECT * 
      FROM organizations
      WHERE orgId = ?`;
  const [rows] = await connection.query(query, [orgId]);
  return rows[0];
}

async function getOrganizationByName(orgName) {
  const query = `
  SELECT *
  FROM organizations
  WHERE orgName = ?`;
  const [rows] = await connection.query(query, [orgName]);
  return rows[0];
}

async function getOrganizationByCreator(creator) {
  const query = `
  SELECT *
  FROM organizations
  WHERE creator = ?`;
  const [rows] = await connection.query(query, [creator]);
  return rows;
}

async function deleteAllOrganizations() {
  const query = `DELETE FROM organizations`;
  const results = await connection.query(query);
  return results[0].affectedRows;
}

async function deleteOrganization(orgName) {
  const query = `
  DELETE FROM organizations
  WHERE orgName = ?`;
  const results = await connection.query(query, [orgName]);
  return results[0].affectedRows;
}

export {
  createOrganization,
  getAllOrganizations,
  getOrgById,
  getOrganizationByName,
  deleteOrganization,
  deleteAllOrganizations,
  getOrganizationByCreator,
};
