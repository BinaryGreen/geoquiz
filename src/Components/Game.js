import React, { useState, useEffect } from 'react'
import axios from 'axios';

const URL = 'https://restcountries.com/v3.1/all';

const Game = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentChoices, setCurrentChoices] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(URL);
      console.log(res);
      const correctAnswerArray = [];
    
      for (let i = 0; i < 10; i++) {
        let country = res.data[Math.floor(Math.random() * res.data.length)];
        let idx = res.data.indexOf(country);
        res.data.splice(idx, 1);
        correctAnswerArray.push(country);
      }
      
      console.log(correctAnswerArray);
      console.log(res.data.length);
      setCorrectAnswer(correctAnswerArray);
      console.log(correctAnswer);
    }
    fetchData();
  }, [])

  useEffect(() => {

  }, [currentQuestion])

  return (
    <div className='container'>
      <div>
        <div className='bg-white p-8 rounded shadow mb-4'>
          <p className='text-2xl'>
            What is the capital of COUNTRY_CORRECT ANSWER?
          </p>
        </div>
        <div className='flex flex-wrap mt-4 justify-around'>
          <button className='bg-white w-5/12 p-4 text-black font-semibold rounded shadow mb-4
          transition duration-300 ease-in-out hover:scale-110'>
            CHOICE 1
          </button>
          <button className='bg-white w-5/12 p-4 text-black font-semibold rounded shadow mb-4
          transition duration-300 ease-in-out hover:scale-110'>
            CHOICE 2
          </button>
          <button className='bg-white w-5/12 p-4 text-black font-semibold rounded shadow mb-4
          transition duration-300 ease-in-out hover:scale-110'>
            CHOICE 3
          </button>
          <button className='bg-white w-5/12 p-4 text-black font-semibold rounded shadow mb-4
          transition duration-300 ease-in-out hover:scale-110'>
            CHOICE 4
          </button>
        </div>
        <p className='text-center text-xl'>{score} / 10</p>
      </div>
    </div>
  )
}

export default Game;