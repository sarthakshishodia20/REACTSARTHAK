import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
  const user = 'sarthak';
  const age = 89;
  return (
    <>
    <h1> Hello guys I am {user}</h1>
    <p>I am {age} years old</p>
    <Navbar />
    <Card />
    <Card />
    <Card />
    </>
  )
}

export default App