import React from 'react'

const App = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline mt-4 mb-4 text-center bg-blue-500 p-4'>App</h1>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors duration-200 ' onMouseEnter={mouseEntered}>Click me</button>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors duration-200 ' onMouseLeave={mouseLeft}>Click me</button>
    </div>
  )
}

function buttonClicked(){
  alert("Button clicked") 
}
function mouseEntered(){
  alert("Mouse entered")
}
function mouseLeft(){
  alert("Mouse left")
}

export default App