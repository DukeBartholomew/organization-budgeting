import { connection } from "../mysql/connect.js";

async function createOrganization(organization) {
    const { orgId, orgName, dateCreated } = organization;
    const query = `
    INSERT INTO organizations 
    (orgId, orgName, dateCreated) 
    VALUES (?, ?, ?)`;
    try {
      const results = await connection.query(query, [
        orgId,
        orgName,
        dateCreated
      ]);
      return {
        orgId: results[0].insertId,
        orgName,
        dateCreated,
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
  
  async function getOrgByOrgId(orgId) {
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
    getOrgByOrgId,
    deleteAllOrganizations
  };
  