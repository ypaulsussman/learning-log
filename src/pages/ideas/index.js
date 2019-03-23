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
            <title>{`Ideas | ${data.site.siteMetadata.title}`}</title>
            <meta
              name="description"
              content="The six most-recent posts witht the 'Ideas' tag."
            />
          </Helmet>
          <h1 className="">Latest Ideas</h1>
          <p>Below are my half-a-dozen most-recent actual (<em>approximations of</em>) blog posts.</p>
          <p>As of early/mid-2019, they're mostly each a brainstorm/rumination prompted by returning to a given document of notes from prior years. They usually take the format of "<em>these notes' context; thoughts while rereading; ways to apply what I gained in the future.</em>"</p>
          <p>Their main role (<em>beyond keeping me in the habit of shaping thoughts as words, and eliciting contemplation of previous learning</em>) is to serve as a handy store of toy-app/hacking ideas, for when I'm bored on a Saturday.</p>
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
  query IdeasQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { postType: { eq: "ideas" } } }
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
