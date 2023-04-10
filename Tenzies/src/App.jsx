import { useEffect, useState } from 'react'
import Die from "./components/Die"
import Confetti from "react-confetti"
import './App.css'
import {nanoid} from "nanoid"

function App() {
  const [dice, setDice] = useState(allNewDice)
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    // keeping two internal pieces of state in sync with each other is 
    // a really common use case for useEffect
    if (dice.every((die, idx) => {
      return idx > 0 ?
            (die.isHeld && dice[idx].value === dice[idx-1].value) : 
            die.isHeld
    })) {
      console.log("You won!")
      setTenzies(true)
    }
  }, [dice])

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6 ),
      isHeld: false,
      id: nanoid()
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
        key={die.id} 
        value={die.value} 
        isHeld={die.isHeld} 
        holdDice ={() => holdDice(die.id)} 
      />
  ); 

  function rollDice() {
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld ? die : generateNewDie()
    }))
  }

  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? 
          {...die, isHeld: !die.isHeld} : 
          die
    }))
  }

  return (
    <main>
      {tenzies && <Confetti/> }
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-cotainer">
        {diceElements}
      </div>
      <button onClick={rollDice}>{tenzies ? "New Game": "Roll"}</button>
    </main>
  )
}

export default App