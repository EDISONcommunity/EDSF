import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (
      key: string,
      trackingId: string,
      config: { page_path: string }
    ) => void
  }
}

export const useTracking = (
  trackingId: string | undefined = process.env.REACT_APP_GA_MEASUREMENT_ID
) => {
  const { listen } = useHistory()

  useEffect(() => {
    const unlisten = listen((location) => {
      if (!window.gtag) return
      if (!trackingId) {
        console.log(
          'Tracking not enabled, as `trackingId` was not given and there is no `GA_MEASUREMENT_ID`.'
        )
        return
      }

      window.gtag('config', trackingId, { page_path: window.location.pathname })
    })

    return unlisten
  }, [trackingId, listen])
}