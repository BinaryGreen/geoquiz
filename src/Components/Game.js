import React, { useState, useEffect } from 'react'
import axios from 'axios';

const URL = 'https://restcountries.com/v3.1/all';

const Game = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentChoices, setCurrentChoices] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [score, setScore] = useState(0);

  /*
    fetch API and place into array UNEDITED, score init 0 and currentQuestion init 1
    get 4 random countries and place into another array CORRECT ANSWERS
    4 buttons (choices) map and filter over array to randomly choose 3 countries not equal to those in CORRECT ANSWERS
    if button is clicked which contains country object in CORRECT ANSWERS = correct
      - setTimeOut, show correct and incorrect answers, score++, currentQuestion++ and re-map
    repeat until (for now) currentQuestion = CORRECT ANSWERS.length (test with 5), setViewState('results')
  */

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

export default Game