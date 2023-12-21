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
  clearLocalStorage()
  deleteAllCookies()
}


const checkForTestAccount = () => {
  if (typeof window == 'undefined') return null;

  const params = new URLSearchParams(window.location.search)
  const isTestAccount = params.get('test_account') || localStorage.getItem('test_account')
  return isTestAccount ? true : false

}

const isTestAccount = checkForTestAccount();
if (isTestAccount) {
  localStorage.setItem('test_account', 'true')
}

const clearLocalStorage = () => {
  const test_account = window.localStorage.getItem('test_account')
  window.localStorage.clear();
  if (test_account) {
    localStorage.setItem('test_account', 'true')
  }
}

const deleteAllCookies = () => {
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
  checkForTestAccount()

  const posthog = await loadPosthog()
  posthog?.init(
    'phc_4uAPt8VrJceprv64DF10bPVxwDeiI075LuqXhScqYyL',
    {
      api_host: 'https://eu.posthog.com',
      persistence: 'memory',
      autocapture: false,
      capture_pageview: false
    }
  )

  sendEvent('$pageview')
}
init()

const sendEvent = async (eventId: string, options: any = {}) => {
  const posthog = await loadPosthog()
  if (isTestAccount) {
    options.test_account = true
  }

  posthog?.capture(eventId, options)

  console.log({
    sendAnalyticsEvent: {
      eventId, options
    }
  })
}

const analytics = { sendEvent }

export default analytics
