import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import "prismjs/themes/prism-solarizedlight.css";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  postType,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container">
        <h1 className="title">{title}</h1>
        <div className="columns post-overview-wrapper">
          {tags && tags.length ? (
            <div className={`card col-${postType === 'ideas' ? 4 : 3} col-mx-auto`}>
              <div className="card-header">
                <div className="card-title h5">Tags</div>
              </div>
              <div className="card-body">
                {" "}
                {tags.map(tag => (
                  <span className="chip" key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </span>
                ))}
              </div>
            </div>
          ) : null}
          <div className={`card col-${tags ? (postType === 'ideas' ? 6 : 7) : 10} col-mx-auto`}>
            <div className="card-header">
              <div className="card-title h5">Description</div>
              <div className="card-body">{description}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container content">
        <div className="columns">
          <PostContent content={content} className="column col-12 blog-post" />
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        postType={post.frontmatter.postType}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        postType
      }
    }
  }
`;
