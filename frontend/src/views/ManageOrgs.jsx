import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Container, Table } from "@mantine/core";
import { NavbarMinimal } from "../components/NavbarMinimal";

const ManageOrgs = () => {
  const [orgs, setOrgs] = useState([]);

  const url = "http://localhost:8000";

  const getOrganizations = () => {
    axios
      .get(url + "/organizations")
      .then((res) => {
        setOrgs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getOrganizations();
  }, []);

  const handleDelete = (orgId) => {
    if (window.confirm("Are you sure you want to delete this organization?")) {
      axios
        .delete(url + "/organizations/" + orgId)
        .then((res) => {
          console.log("Organization deleted successfully");
          getOrganizations();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleEdit = (orgId, orgName, budgetAmount) => {
    const newOrgName = prompt(
      "Please enter the new name for the organization:",
      orgName
    );
    const newBudgetAmount = prompt(
      "Please enter the new budget for the organization:",
      budgetAmount
    );
    if (newOrgName && newBudgetAmount) {
      axios
        .put(url + "/organizations/" + orgId, {
          orgName: newOrgName,
          budgetAmount: newBudgetAmount,
        })
        .then((res) => {
          console.log("Organization updated successfully");
          getOrganizations();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const th = (
    <tr>
      <th>Organization Name</th>
      <th>Budget</th>
      <th>Action</th>
    </tr>
  );

  const rows = orgs.map((org) => (
    <tr key={org.orgId}>
      <td>
        <h3>{org.orgName}</h3>Description: {org._description}
        <br></br>Venmo: @{org.venmo}
      </td>

      <td>
        <DisplayBudget orgName={org.orgName} />
      </td>
      <td>
        <button
          className="btn btn-primary mr-2"
          onClick={() => handleEdit(org.orgId, org.orgName)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(org.orgId)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <NavbarMinimal />
      <Navbar />
      <section style={{ float: "right", width: "80%", marginRight: "50px" }}>
        <Container bg="white">
          <Table
            horizontalSpacing="xl"
            verticalSpacing="xs"
            fontSize="md"
            striped
            highlightOnHover
            withBorder
            withColumnBorders
          >
            <thead>{th}</thead>
            <tbody>{rows}</tbody>
          </Table>
        </Container>
        <br />
        <br />
      </section>
    </>
  );
};

const DisplayBudget = ({ orgName }) => {
  const url = "http://localhost:8000";
  const [budget, setBudget] = useState("");

  const getBudget = () => {
    axios
      .get(url + "/budgets/name/" + orgName)
      .then((res) => {
        setBudget(res.data.budgetAmount);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBudget();
  }, []);

  return budget;
};

export default ManageOrgs;
