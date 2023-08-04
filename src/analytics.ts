// dynamic import to not break
// build-process (where 'window' isn't available)
const loadPosthog = async () =>
  (typeof window !== 'undefined')
    ? (await import('posthog-js')).default
    : null

const init = async () => {
  const posthog = await loadPosthog()
  posthog?.init(
    'phc_2SLjm4aa2jlGn5vbQ8kJRrKV5D3An9SS8931qxSb23U',
    {
      api_host: 'https://app.posthog.com',
      persistence: 'memory',
      autocapture: false,
      capture_pageview: true
    }
  )
}
init()

const sendEvent = async (eventId: string, options: object) => {
  const posthog = await loadPosthog()
  posthog?.capture(eventId, options)

  console.log({
    sendAnalyticsEvent: {
      eventId, options
    }
  })
}

const analytics = { sendEvent }

export default analytics
