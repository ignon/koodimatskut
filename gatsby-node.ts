exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.frontmatter) {
    createNodeField({
      node,
      name: 'hero',
      value: './hero.png'
    });

    console.log(node)
  }

};
