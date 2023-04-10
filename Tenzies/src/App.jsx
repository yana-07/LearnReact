import { useEffect, useState } from 'react'
import Die from "./components/Die"
import './App.css'

function App() {
  const [dice, setDice] = useState(allNewDice)

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6 ),
      isHeld: false
    }
  }

  function allNewDice() {
    const dice = [];
    for (let i = 0; i < 10; i++) {
      dice.push(generateNewDie());
    }

    return dice;
  }

  const diceElements = dice.map(die => 
      <Die 
        value={die.value} 
      />
  ); 

  return (
    <main>
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-cotainer">
        {diceElements}
      </div>
      <button>Roll</button>
    </main>
  )
}

export default App
