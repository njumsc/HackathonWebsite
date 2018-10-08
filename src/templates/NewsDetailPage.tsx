import * as React from "react";
import Helmet from "react-helmet";

import Page from "../components/Page";
import Container from "../components/Container";
import Link from "gatsby-link";
import TagGroup from "../components/TagGroup";
import { News } from "../models/News";
import { graphql } from "gatsby";
import IndexLayout from "../layouts";

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: {
          name: string;
          url: string;
        }
      },
    }
    markdownRemark: News,
  };
}

export default function NewsItemPageTemplate(props: Props) {
  const { frontmatter, html } = props.data.markdownRemark;
  return (
  <IndexLayout>
    <Page>
      <Helmet title={`${frontmatter.title}`} />
      <Container>
        <Link to={"/"}>Back To Home</Link>
        <h1>{frontmatter.title}</h1>
        {frontmatter.date && <p>{new Date(frontmatter.date).toLocaleString()}</p>}
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <hr />
      </Container>
    </Page>
  </IndexLayout>
  );
}

export const query = graphql`
  query PageTemplateQuery($id_name: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(frontmatter: { id_name: { eq: $id_name } }) {
      html
      excerpt
      frontmatter {
        date
        id_name
        title
      }
    }
  }
`;
