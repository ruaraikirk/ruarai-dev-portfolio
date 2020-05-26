const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Blog Posts
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const blogQueryResult = await graphql(
    `
      {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/(\\/content\\/blog)/.*\\\\.md$/"}}
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (blogQueryResult.errors) {
    throw blogQueryResult.errors
  }

  // Create blog posts pages.
  const posts = blogQueryResult.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Blog Posts
  const projectPost = path.resolve(`./src/templates/project-post.js`)
  const projectQueryResult = await graphql(
    `
      {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/(\\/content\\/projects)/.*\\\\.md$/"}}
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (projectQueryResult.errors) {
    throw projectQueryResult.errors
  }

  // Create blog posts pages.
  const projects = projectQueryResult.data.allMarkdownRemark.edges

  projects.forEach((project, index) => {
    const previous = index === projects.length - 1 ? null : projects[index + 1].node
    const next = index === 0 ? null : projects[index - 1].node

    createPage({
      path: project.node.fields.slug,
      component: projectPost,
      context: {
        slug: project.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node);
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
