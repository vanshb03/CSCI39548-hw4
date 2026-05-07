import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'
import './App.css'

function App() {
  const [espresso, setEspresso] = useState(0)
  const [latte, setLatte] = useState(0)
  const [coldBrew, setColdBrew] = useState(0)

  const incrementEspresso = () => setEspresso(espresso + 1)
  const incrementLatte = () => setLatte(latte + 1)
  const incrementColdBrew = () => setColdBrew(coldBrew + 1)
  const resetCounts = () => {
    setEspresso(0)
    setLatte(0)
    setColdBrew(0)
  }

  return (
    <div className="app">
      <header>
        <h1>CSCI 39548 Assignment 4</h1>
        <h2>Coffee Tracker</h2>
        <p className="subtitle">Logging every cup, one click at a time</p>
        <p className="subtitle-2">by vansh</p>
      </header>

      <main>
        <section className="give-feedback">
          <h2>What did you order today?</h2>
          <div className="button-row">
            <Button handleClick={incrementEspresso} text="Espresso" />
            <Button handleClick={incrementLatte} text="Latte" />
            <Button handleClick={incrementColdBrew} text="Cold Brew" />
            <Button handleClick={resetCounts} text="Reset" variant="reset" />
          </div>
        </section>

        <Statistics
          espresso={espresso}
          latte={latte}
          coldBrew={coldBrew}
        />
      </main>

      <footer>
        <p>CSCI 39548 Assignment 4</p>
      </footer>
    </div>
  )
}

export default App
