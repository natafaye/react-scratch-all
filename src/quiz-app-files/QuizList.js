import React from 'react'

export default function QuizList(props) {
  return (
    <div>
        { props.quizList.map(quiz => (
            <div key={quiz.id}>
                <h4>{quiz.title}</h4>
            </div>
        )) }
    </div>
  )
}
