import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useRecoilState } from "recoil";
import { artistNamesForGameState, artistNamesState, guessCounterState, selectedArtistNameState } from "../GlobalState";

const ArtistChoices = () => {
    const [guessCounter, setGuessCounter] = useRecoilState(guessCounterState)
    const [selectedArtistName, setSelectedArtistName] = useRecoilState(selectedArtistNameState)
    const [artistNames, setArtistNames] = useRecoilState(artistNamesState)
    
    let artistNamesForGame = [artistNames[0], artistNames[1], artistNames[2]]
    let guesses = guessCounter
    
    const setName = (artistArray) => {
        const index = Math.floor(Math.random() * artistArray.length);
        let currentName = artistArray[index]
        artistNamesForGame.splice(index, 1)
        return currentName
    }

    let artist1 = setName(artistNamesForGame)
    let artist2 = setName(artistNamesForGame)
    let artist3 = setName(artistNamesForGame)

    const history = useHistory()

    const checkGuess = (artist) => {
        if(artist != selectedArtistName){
            guesses--
            setGuessCounter(guesses)
            console.log('incorrect guess')
            if(guesses === 0){
                history.push('/lose')
            }
        }else {
            history.push('/win')
        }
    }

    // Disable buttons depending on numArtists AND WATCH OUT for which button has the correctArtist
    // That buttons always needs to be SHOWN
    return(
        <div>
            <button onClick={() => checkGuess(artist1)}>Log Artist 1</button>
            <button onClick={() => console.log(artist2)}>Log Artist 2</button>
            <button onClick={() => console.log(artist3)}>Log Artist 3</button>
            <button onClick={() => console.log(selectedArtistName)}>Test Selected Artist From Artist Choices</button>
            <button onClick={() => console.log(artistNames)}>Test Artists Names from Artist Choices</button>
            <button onClick={() => console.log(artistNamesForGame)}>Log Artists Names for Game</button>
            <button onClick={() => console.log(setName(artistNamesForGame))}>Log Set Name</button>
        </div>
    )
}

export default ArtistChoices