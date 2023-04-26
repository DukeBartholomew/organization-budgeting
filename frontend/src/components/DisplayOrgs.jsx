import axios from "axios";
import React, { useEffect, useState } from "react";

export const DisplayOrgs = (props) => {
  const display = (props) => {
    const { orgs } = props;
    console.log(orgs);

    if (orgs.length > 0) {
      const rows = orgs.map((org) => (
        <tr key={org.budgetId}>
          <td><h3>{org.orgName}</h3>Description: {org._description}<br></br>Venmo: @{org.venmo}</td>
          <td><DisplayBudget org={org}/></td>
        </tr>
      ));
      return <><tbody>{rows}</tbody></>;
    } else {
      return <tbody>No Organizations Yet</tbody>;
    }
  };

  return <>{display(props)}</>;
};

const DisplayBudget = ({ org }) => {
  const [budget, setBudget] = useState("");

  getBudget(org.orgName, setBudget);

  return budget;
};

const getBudget = (orgName, setBudget) => {
  const url = "http://localhost:8000";

  axios
    .get(url + "/budgets/name/" + orgName)
    .then((res) => {
      setBudget(res.data.budgetAmount);
      console.log(res.budgetAmount);
    })
    .catch((err) => {
      console.log(err);
    });
};
