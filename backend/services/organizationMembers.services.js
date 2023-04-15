import { connection } from "../mysql/connect.js";

async function addMemberToOrganization(
  orgId,
  userId,
  role = null,
  favorited = false
) {
  const query = `
    INSERT INTO organizationMembers
    (userId, orgId, role, favorited)
    VALUES (?, ?, ?, ?)`;
  try {
    const results = await connection.query(query, [
      orgId,
      userId,
      role,
      favorited,
    ]);
    return {
      orgId,
      userId,
      role,
      dateJoind: results[0].dateJoined,
      favorited,
    };
  } catch (error) {
    console.log(error);
  }
}

async function getAllOrganizationMembers() {
  const query = `
    SELECT *
    FROM organizationMembers`;
  const [rows] = connection.query(query);
  return rows;
}

async function getOrganizationsWithMember(userId) {
  //todo need to update this sql statement to get organizations, not organizationMembers
  const query = `
    SELECT orgId
    FROM organizationMembers
    WHERE userId = ?`;
  const [rows] = connection.query(query, [userId]);
  return rows;
}

async function getMembersFromOrganization(orgId) {
  const query = `
    SELECT userId
    FROM organizationMembers
    WHERE orgId = ?`;
  const [rows] = connection.query(query, [orgId]);
  return rows;
}

async function getOrganizationMemberByOrgIdAndUserId(orgId, userId) {
  const query = `
    SELECT *
    FROM organizationMembers
    WHERE orgId = ?
    AND userId = ?`;
  const [rows] = connection.query(query, [orgId, userId]);
  return rows[0];
}

async function deleteAllOrganizationMembers() {
  const query = `
    DELETE FROM organizationMembers`;
  const results = connection.query(query);
  return results[0].affectedRows;
}

export {
  addMemberToOrganization,
  getAllOrganizationMembers,
  getOrganizationsWithMember,
  getMembersFromOrganization,
  getOrganizationMemberByOrgIdAndUserId,
  deleteAllOrganizationMembers,
};
