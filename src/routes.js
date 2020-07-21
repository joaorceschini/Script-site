import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home'
import Commands from './pages/Commands'
import About from './pages/About'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact component={Home} path="/" />
      <Route exact component={Commands} path="/comandos" />
      <Route exact component={About} path="/sobre" />
    </BrowserRouter>
  )
}