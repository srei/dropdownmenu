import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'

const Default = App.default;

render(<App />, document.getElementById('app'))
