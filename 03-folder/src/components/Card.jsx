import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Tnrv29LSvDZ4O4LbY0nNbEygh49f88efww&s" alt="" />
        <h1>{props.user}</h1>
        <p>I am {props.age} years old</p>
        <button>Click Me</button>
    </div>
  )
}

export default Card