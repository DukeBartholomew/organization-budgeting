import axios from "axios";
import React, { useEffect, useState } from "react";

export const DisplayOrgs = (props) => {
  const display = (props) => {
    const { orgs } = props;
    console.log(orgs);

    // const rows = orgs.map((org) => (
    //   <tr key={org.budgetId}>
    //     <td>{org.orgName}</td>
    //     <td><DisplayBudget org={org}/></td>
    //   </tr>
    // ));

    if (orgs.length > 0) {
      return orgs.map((org, index) => {
        console.log(org);
        return (
          <div className="org" key={org.orgId}>
            <span>
              <h3 className="org-title">{org.orgName}</h3>
              <DisplayBudget org={org} />
              <p className="date-created">{org.dateCreated}</p>
            </span>
            <span className="spacing"></span>
            <section className="clear"></section>
          </div>
          // <tbody>{rows}</tbody>
        );
      });
      return <><tbody>{rows}</tbody></>;
    } else {
      return <h3>No Organizations Yet</h3>;
    }
  };

  return <>{display(props)};</>;
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
