import React from "react";
import { StaticQuery, graphql } from "gatsby";

function TitleAndDescription({ data }) {
  const { title, description } = data.site.siteMetadata;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Fira Code",
      }}
    >
      <h2 style={{ marginBottom: 10 }}>{title}</h2>
      <p style={{ marginTop: 0, opacity: 0.5 }}>{description}</p>
    </div>
  );
}

function Header() {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={(data) => <TitleAndDescription data={data} />}
    />
  );
}

export default Header;
