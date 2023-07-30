import posthog from 'posthog-js'

posthog.init(
  'phc_2SLjm4aa2jlGn5vbQ8kJRrKV5D3An9SS8931qxSb23U',
  {
    api_host: 'https://app.posthog.com',
    persistence: 'memory',
    autocapture: false,
    capture_pageview: true
  }
)

const sendEvent = (eventId: string, options: object) => {
  posthog.capture(eventId, options)

  console.log({
    sendAnalyticsEvent: {
      eventId, options
    }
  })
}

const analytics = { sendEvent }

export default analytics
