const _ = require('lodash')
const axios = require('axios')
const path = require('path')
// import dotenv from 'dotenv'
// dotenv.config({
//   path: '.env'
// })

const { POSTHOG_API_KEY } = process.env
console.log({ POSTHOG_API_KEY })

const getStats = async () => {
  const projectId = '10336'
  try {
    const res = await axios.get(`https://eu.posthog.com/api/projects/${projectId}/insights`, {
      headers: {
        Authorization: `Bearer ${POSTHOG_API_KEY}`
      }
    })
    const insightList = res.data.results
    const insights = _.keyBy(insightList, 'name')
    const kumulatiivinen = insights['Kumulatiivinen'].result
    const insightFields = _.keyBy(kumulatiivinen, 'label')
    const linkClicks = insightFields['LinkClick'].count
    const pageViews = insightFields['$pageview'].count
    const STATS = { linkClicks, pageViews }
    // console.log({ STATS, insightFields, kumulatiivinen })
    return STATS
  }
  catch {
    return null
  }
}

exports.onCreateNode = ({ node, actions, getNode }: any) => {

  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark` || node.internal.type === `Mdx`) {
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName
    });
  };
};

const getAllLinks = ((nodes: any): [{
  name: string,
  url: string
}] => {
  const links = nodes
    .map((node: any) => node.frontmatter) // .filter(({ slug }: any) => slug != 'microbit' && slug != 'scratch')
    .map(({ slug, links }: any) =>
      !links ? [] : links.map(({ title, url }: any) => ({
        name: `${slug} - ${title}`,
        url
      }))
    )
    .flat()

  return links
})

const assertThatLinksDoNotReturn404 = async (links: [{
  name: string,
  url: string
}]) => {
  const linkPromises = links.map((link: any) => {
    const { name, url } = link
    axios
      .get(url)
      .then(() => {
        console.log(`Link fetched: ${name}`)
      })
      .catch(() => {
        throw new Error(`Loading ${name} failed.`)
      })
  })
  await Promise.all(linkPromises)
}

exports.createPages = async ({ graphql, actions: { createPage }}: any) => {

  const DATE = (new Date()).toLocaleDateString('fi-FI')
  const STATS = POSTHOG_API_KEY
    ? await getStats()
    : null

  const { data } = await graphql(cardsQuery)
  const { nodes } = data.allMarkdownRemark

  if (process.env.NODE_ENV === 'development') {
    const links = getAllLinks(nodes)
    await assertThatLinksDoNotReturn404(links)
  }

  createPage({
    path: '/',
    component: path.resolve('./src/templates/index.tsx'),
    context: {
      STATS,
      DATE,
      data
    }
  })
}


const cardsQuery = `
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(sort: { frontmatter: { priority: ASC }}) {
      nodes {
        fields {
          collection
        }
        frontmatter {
          title
          developer
          time
          difficulty
          priority
          tags
          slug
          numbered_links
          links {
            title
            url
          }
          hero {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        html
        id
      }
    }
  }
`
