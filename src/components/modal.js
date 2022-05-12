import React from 'react'

export default function Modal({ isCorrect, turn, solution}) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Won!</h1>
          <p className="solution">The solution was: {solution}</p>
          <p>You found the solution in {turn}.</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>You Lost!</h1>
          <p className="solution">{solution}</p>
          <p>You didn't get it right.</p>
        </div>
      )}
    </div>
  )
}
