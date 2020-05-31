import React from "react";
import { graphql, Link } from "gatsby";

const Template = ({ data, pageContext }) => {
  const { prev, next } = pageContext;

  const { markdownRemark } = data;
  const { title } = markdownRemark.frontmatter;
  const html = data.markdownRemark.html;
  return (
    <div>
      <h1 style={{ fontFamily: "Fira Code" }}>
        {title}
      </h1>
      <div
        className="blogspot"
        dangerouslySetInnerHTML={{ __html: html }}
        style={{ fontFamily: "Office Code Pro" }}
      />

      {next &&
        <Link to={next.frontmatter.path} style={{ fontFamily: "Fira Code" }}>
          Next
        </Link>}

      {prev &&
        <Link to={prev.frontmatter.path} style={{ fontFamily: "Fira Code" }}>
          Prev
        </Link>}
    </div>
  );
};

export const query = graphql`
    query ($pathSlug: String!) {
        markdownRemark (frontmatter: { path: { eq: $pathSlug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;

export default Template;
