import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

import './styles/colours.css'
import './styles/fonts.css'
import './index.css'

Sentry.init({
  dsn: 'https://9de6de81795a4ee38479b43a279b49e2@o1170466.ingest.sentry.io/6454738',
  integrations: [new Integrations.BrowserTracing()],
  autoSessionTracking: true,

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
