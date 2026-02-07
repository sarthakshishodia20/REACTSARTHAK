import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <>
    <h1>Hello guys I am Sarthak</h1>
    <p>I am 21 years old</p>
    <button>Click Me</button>
    <Card user='Aman' age='21'/>
    <Card user='Baman' age='89'/>
    <Card user='Chaman' age='100'/>
    </>
  )
}

export default App;