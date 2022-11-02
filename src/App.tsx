import React from 'react'
import './App.scss'
import logo from './assets/logo.svg'
import LaunchList from './components/LaunchList/LaunchList'
import Roadster from './components/Roadster/Roadster'

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <header className="app__header">
          <img src={logo} alt="SpaceX logo" className="app__logo" />
        </header>

        <main className="app__content">
          <LaunchList />

          <Roadster />
        </main>
      </div>
    </div>
  )
}

export default App
