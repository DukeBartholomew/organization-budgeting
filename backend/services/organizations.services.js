import { connection } from "../mysql/connect.js";

async function createOrganization(organization) {
  const { orgName } = organization;
  const query = `
    INSERT INTO organizations 
    (orgName) 
    VALUES (?)`;
  try {
    const results = await connection.query(query, [orgName]);
    return {
      orgId: results[0].insertId,
      orgName,
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
  console.log(rows);
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

async function deleteAllOrganizations() {
  const query = `DELETE FROM organizations`;
  const results = await connection.query(query);
  console.log(results[0].affectedRows);
  return results[0].affectedRows;
}

export {
  createOrganization,
  getAllOrganizations,
  getOrgById,
  deleteAllOrganizations,
};
