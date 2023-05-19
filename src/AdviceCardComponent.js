import React from 'react'
import divide from "/images/pattern-divider-mobile.svg"
import dice from "/images/icon-dice.svg"

const AdviceCardComponent = () => {
  return (
    
    <div className='card'>
      <span className='adviceID'>Advice #</span>
      <blockquote>
        "dsdfdsfsdfsdfs sdf dsf sdf df dsf dsf sfd"
      </blockquote>

      <img src={divide} alt="divide" className='divide-img' />

      <button type="">
        <img src={dice} alt="dice"/>
      </button>
    </div>
  )
}

export default AdviceCardComponent