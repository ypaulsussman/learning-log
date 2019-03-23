import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Helmet from "react-helmet";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section index-page">
          <Helmet titleTemplate="%s">
            <title>{`Notes | ${data.site.siteMetadata.title}`}</title>
            <meta
              name="description"
              content="The six most-recent posts with the 'Notes' tag."
            />
          </Helmet>
          <h1 className="">Latest Notes</h1>
          <p> Hi! Below are half-a-dozen of my most-recent notes on books, workshops, websites I've encountered, etc. </p>
          <p>I'l be honest: I've posted them here for my own ease of access: they're generally pretty disorganized, and so (<em>while I'd never dissuade you from exploring!</em>) I can't really recommend you get your hopes up for any novelty or insight.</p>
          <p>Finally: the day will come when I add pagination... but this is not. That. Day.</p>
          {posts.map(({ node: post }) => (
            <div className="card latest-posts" key={post.id}>
              <span className="card-header">
                <Link className="" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <small>{post.frontmatter.date}</small>
              </span>
              <span className="card-body">{post.frontmatter.description}</span>
              <span className="card-footer">
                <Link className="" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </span>
            </div>
          ))}
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query NotesQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { postType: { eq: "notes" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`;
