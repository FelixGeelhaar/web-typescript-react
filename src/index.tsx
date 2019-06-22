import * as React from 'react'
import * as ReactDom from 'react-dom'

const App = () => <div>Hello World</div>

const DOMEl = document.createElement('div')
DOMEl.setAttribute('id', 'root')
document.body.appendChild(DOMEl)

const root = ReactDom.render(<App />, document.getElementById('root'))
