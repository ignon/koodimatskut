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

exports.createPages = async ({ actions: { createPage }}: any) => {

  const DATE = (new Date()).toLocaleDateString('fi-FI')
  const STATS = POSTHOG_API_KEY
    ? await getStats()
    : null

  createPage({
    path: '/',
    component: path.resolve('./src/pages/index.tsx'),
    context: {
      STATS,
      DATE
    }
  })
}
