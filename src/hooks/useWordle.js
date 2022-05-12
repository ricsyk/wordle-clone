import { useState } from "react"

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('') //empty string, updated whenever hit new key using handlekeyup
    const [guesses, setGuesses] = useState([...Array(6)]) // each guess is empty array, as new guesses are made, this fills
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false) // only change true when user wins game

    // format into an array of letter objects

    const formatGuess = () => {
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((l) => {
            return {key: l, color: 'grey'}
        })

        // determine correct letters
        formattedGuess.forEach((l, i) => {
            if (solutionArray[i] === l.key) {
                formattedGuess[i].color = 'green'
                solutionArray[i] = null
            }
        })

        // determine yellow matches

        formattedGuess.forEach((l, i) => {
            if (solutionArray.includes(l.key) && l.color != 'green') {
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null

            }
        })

        return formattedGuess
    }
    
    // add a new guess to guesses state
    // update isCorrect state if guess is correct
    // add one to the turn state
    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution) {
            setIsCorrect(true)
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })
        setTurn((prevTurn) => {
            return prevTurn + 1
        })
        setCurrentGuess('')
    }

    // handle keyup event, track current guess
    // if user presses enter, add new guess


    const handleKeyUp = ({key}) => {

        if (key === 'Enter') {
            // only guess if num. turns < 5

            if (turn > 5) {
                console.log('You have no more guesses')
                return
            }

            // do not allow duplicate word guesses

        if (history.includes(currentGuess)) {
            console.log('Word previously tried')
            return
        }
            // check word is 5 charts

        if (currentGuess.length !== 5) {
            console.log('Word must be 5 chars long')
            return
        }
        const formatted = formatGuess()
        addNewGuess(formatted)
    }

        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return
        }
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