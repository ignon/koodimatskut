// dynamic import to not break
// build-process (where 'window' isn't available)
const loadPosthog = async () =>
  (typeof window !== 'undefined')
    ? (await import('posthog-js')).default
    : null

// This site should never use cookies or local storage
// but we'll make sure about that in case Posthog
// or Cusdis start doing something weird
const clearEverything = () => {
  if (typeof window == 'undefined') return;
  window.localStorage.clear();
  deleteAllCookies()
}

function deleteAllCookies() {
    if (typeof document == 'undefined') return;

    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

const init = async () => {
  clearEverything()

  const posthog = await loadPosthog()
  posthog?.init(
    'phc_4uAPt8VrJceprv64DF10bPVxwDeiI075LuqXhScqYyL',
    {
      api_host: 'https://eu.posthog.com',
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
