import { useState } from "react"

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('') //empty string, updated whenever hit new key using handlekeyup
    const [guesses, setGuesses] = useState([]) // each guess is empty array, as new guesses are made, this fills
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false) // only change true when user wins game

    // format into an array of letter objects

    const formatGuess = () => {

    }
    
    // add a new guess to guesses state
    // update isCorrect state if guess is correct
    // add one to the turn state
    const addNewGuess = () => {

    }
    // handle keyup event, track current guess
    // if user presses enter, add new guess
    const handleKeyUp = ({key}) => {
        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key
                })
             
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyUp}
}

export default useWordle;