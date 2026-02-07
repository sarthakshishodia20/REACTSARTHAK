import React from 'react'
import { Bookmark } from 'lucide-react'
const CompanyCards = (props) => {
  return (
    <div>
      <div className='card'>
        <div className='top'>
          <img src={props.img} alt="" />
          <button> Save <Bookmark /> </button>
        </div>
        <div className='center'>
          <h3>{props.company} <span>{props.time}</span></h3>
          <h2>{props.title}</h2>
        </div>
        <div className='bottom'>
          <p>{props.description}</p>
          <button>{props.button}</button>
        </div>
      </div>
    </div>
  )
}

export default CompanyCards