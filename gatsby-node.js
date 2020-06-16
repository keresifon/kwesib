const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pixTemplate = path.resolve("./src/templates/pictures.js")
  const res = await graphql(`
    query query {
        allCloudinaryMedia {
          edges {
            node {
              secure_url
              id
              tags
            }
          }
        }
      }
  `)



  res.data.allCloudinaryMedia.edges.forEach(edge => {
    createPage({
      component: pixTemplate,
      path: `/${edge.node.tags}`,
      context: {
    tags: edge.node.tags,
      },
    })
  })
}
