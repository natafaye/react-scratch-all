import React from 'react'
import QuestionCard from './QuestionCard'

export default function QuizDetails(props) {
  return (
    <div className="flex-grow-1 bg-light border rounded p-3 m-3">
        <h2>{ props.quiz.title }</h2>
        <p>{ props.quiz.question }</p>
        <QuestionCard/>
    </div>
  )
}
