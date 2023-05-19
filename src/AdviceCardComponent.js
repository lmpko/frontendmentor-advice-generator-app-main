import React, { useEffect,useState } from 'react'
import divide from "/images/pattern-divider-mobile.svg"
import dice from "/images/icon-dice.svg"

const AdviceCardComponent = () => {
  const [data, setData] = useState([]);
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    setIsClicked(false)
    return () => {
      
    };
  }, [isClicked]);

  return (
    <div className='card'> 
      <h1 className='adviceID'>Advice #{data?.slip?.id}</h1>
      <blockquote>
        "{data?.slip?.advice}"
      </blockquote>

      <img src={divide} alt="divide" className='divide-img' />

      <button type="submit" onClick={handleClick}>
        <img src={dice} alt="dice"/>
      </button>
    </div>
  )
}

export default AdviceCardComponent