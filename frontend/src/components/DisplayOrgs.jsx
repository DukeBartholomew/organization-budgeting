import React from "react";

export const DisplayOrgs = (props) => {
  const display = (props) => {
    const { orgs } = props;

    if (orgs.length > 0) {
      return orgs.map((org, index) => {
        console.log(org);
        return (
          <div className="org" key={org.orgId}>
            <span>
              <h3 className="org-title">{org.orgName}</h3>
              <p className="date-created">{org.dateCreated}</p>
            </span>
            <span className="spacing"></span>
            <section className="clear"></section>
          </div>
        );
      });
    } else {
      return <h3>No Organazations Yet</h3>;
    }
  };

  return <>{display(props)};</>;
};
