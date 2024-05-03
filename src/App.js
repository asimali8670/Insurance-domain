import React from 'react'
import questions from './components/data'
import Accordion from './components/Accordion'
import './components/styles.css'

const App = () => {
  return (
    <div className='App'>
    <h1>Accordion by react</h1>

    {questions.map((question) => {
      return <Accordion {...question} />
    })}
      
    </div>
  )
}

export default App
