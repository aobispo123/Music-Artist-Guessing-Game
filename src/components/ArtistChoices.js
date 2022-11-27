import React, { useEffect, useState } from "react"
import { useRecoilState } from "recoil";
import { artistNamesForGameState, artistNamesState, guessCounterState, selectedArtistNameState } from "../GlobalState";

const ArtistChoices = () => {
    const [guessCounter, setGuessCounter] = useRecoilState(guessCounterState)
    const [selectedArtistName, setSelectedArtistName] = useRecoilState(selectedArtistNameState)
    const [artistNames, setArtistNames] = useRecoilState(artistNamesState)
    
    let artistNamesForGame = [artistNames[0], artistNames[1], artistNames[2]]
    
    const setName = (artistArray) => {
        const index = Math.floor(Math.random() * artistArray.length);
        let currentName = artistArray[index]
        artistNamesForGame.splice(index, 1)
        return currentName
    }

    // const checkGuess = () => {
    //     if(value === selectedArtistName){

    //     }
    // }

    return(
        <div>
            <button onClick={() => console.log(guessCounter)}>Test Guess Counter From Artist Choices</button>
            <button onClick={() => console.log(selectedArtistName)}>Test Selected Artist From Artist Choices</button>
            <button onClick={() => console.log(artistNames)}>Test Artists Names from Artist Choices</button>
            <button onClick={() => console.log(artistNamesForGame)}>Log Artists Names for Game</button>
            <button onClick={() => console.log(setName(artistNamesForGame))}>Log Set Name</button>
        </div>
    )
}

export default ArtistChoices