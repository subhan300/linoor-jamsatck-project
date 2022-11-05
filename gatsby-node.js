/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/template/BlogsPage.js")

  const result = await graphql(`
  {
    allWpPost {
      edges {
        node {
          content
          slug
          title
          seo {
            breadcrumbs {
              text
              url
            }
          }
          author {
            node {
              firstName
              lastName
              name
            }
          }
          date(formatString: "YYYY-MM-DD")
          tags {
            nodes {
              name
            }
          }
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
              description
            }
          }
        }
      }
      totalCount
      pageInfo {
        perPage
      }
    
    }
  }
  
  
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const BlogPosts = result.data.allWpPost.edges
  BlogPosts.forEach(post => {
    createPage({
      path: `/blogs/${post.node.slug}`,
      component: BlogPostTemplate,
      context: {
        id: post.slug,
        data:{post,        allData:BlogPosts},
        allData:BlogPosts
      },
    })
  })
}