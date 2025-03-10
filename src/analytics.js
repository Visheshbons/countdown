import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
import { EVENTS } from './countdown-app/countdown-app'

if (GA_TRACKING_ID) {
    const analytics = Analytics({
        app: 'countdown',
        plugins: [
          googleAnalytics({
            measurementIds: [GA_TRACKING_ID]
          })
        ]
      })

    analytics.page()

    document.addEventListener(EVENTS.NEW_GAME_CREATED, (event) => {
        analytics.track(`New ${event.detail.gameMode} Game` , {
          category: 'New Game'
        });
    })
}
