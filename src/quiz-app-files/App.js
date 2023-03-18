import React from 'react'
import QuizDetails from './QuizDetails'
import QuizList from './QuizList'

/*** I copied these files over from the other React app and threw them in this folder for reference **/

const TEST_QUIZZES = [
  {
    id: 0,
    title: "What character are you?",
    question: "Do you serve Voldermort?"
  },
  {
    id: 0,
    title: "What condiment are you?",
    question: "Are you spicy?"
  }
]

export default function App() {
  return (
    <div>
      <h1>Quiz App</h1>
      <div className="d-flex">
        <QuizList quizList={TEST_QUIZZES}/>
        <QuizDetails quiz={TEST_QUIZZES[0]}/>
      </div>
    </div>
  )
}

