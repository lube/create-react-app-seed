import 'react-hot-loader/patch'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import Theme from './theme'
import ConnectedRouter from './routing/router'
import Routes from 'routing/routes'
import createStore from './store'

import './index.css'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const store = createStore()
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Theme>
          <ConnectedRouter>
            <Routes />
          </ConnectedRouter>
        </Theme>
      </Provider>
    </AppContainer>,
    MOUNT_NODE
  )
}

if (process.env.NODE_ENV === 'development' && module.hot) {
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require('redbox-react').default

    ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
  }
  render = () => {
    try {
      renderApp(Math.random())
    } catch (error) {
      renderError(error)
    }
  }
  module.hot.accept('./routing/routes', () => {
    let NextApp = require('./routing/routes').default
    ReactDOM.render(
      <Provider store={store}>
        <Theme>
          <ConnectedRouter>
            <NextApp />
          </ConnectedRouter>
        </Theme>
      </Provider>,
      MOUNT_NODE
    )
  })
}

// ========================================================
// Go!
// ========================================================
render()
