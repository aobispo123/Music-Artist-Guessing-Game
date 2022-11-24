import React, { useEffect, useState } from "react";
import fetchFromSpotify, { request } from "../services/api";
import { useRecoilState } from "recoil";
import { gameSongsState, notNullPreviewsState, numSongsState, selectedArtistState, selectedGenreState, tracksState } from "../GlobalState";

const AUTH_ENDPOINT =
  "https://nuod0t2zoe.execute-api.us-east-2.amazonaws.com/FT-Classroom/spotify-auth-token"
const TOKEN_KEY = "whos-who-access-token"

const Game = () => {
  const [selectedGenre, setSelectedGenre] = useRecoilState(selectedGenreState) // No need to use setSelectedGenre
  const [tracks, setTracks] = useRecoilState(tracksState)
  const [selectedArtist, setSelectedArtist] = useRecoilState(selectedArtistState)
  const [selectedArtistSongs, setSelectedArtistSongs] = useRecoilState(gameSongsState)
  const [notNullPreviews, setNotNullPreviews] = useRecoilState(notNullPreviewsState)
  const [numSongs, setNumSongs] = useRecoilState(numSongsState)
  const [authLoading, setAuthLoading] = useState(false)
  const [configLoading, setConfigLoading] = useState(false)
  const [token, setToken] = useState("")

  const loadTracks = async t => {
    setConfigLoading(true)
    const response = await fetchFromSpotify({
      token: t,
      endpoint: "recommendations",
      params: {
        market: "US",
        seed_genres: selectedGenre,
        limit: 20,
      },
    })
    setTracks(response.tracks)
    const targetArtist = response.tracks[0].artists[0].id
    setSelectedArtist(targetArtist)
    setConfigLoading(false)
    loadArtistSongs(t, targetArtist)
  }

  

  const loadArtistSongs = async (t, artist) => {
    const response = await fetchFromSpotify({
      token: t,
      endpoint: `artists/${artist}/top-tracks`,
      params: {
        market: "US"
      },
    })
    setSelectedArtistSongs(response)
    let newNotNullPreviews = []
    for(let i = 0; i < response.tracks.length; i++){
      if(response.tracks[i].preview_url != null){
        newNotNullPreviews.push(response.tracks[i].preview_url)
      }
    }
    setNotNullPreviews(newNotNullPreviews)
  }

  useEffect(() => {
    setAuthLoading(true)

    const storedTokenString = localStorage.getItem(TOKEN_KEY)
    if (storedTokenString) {
      const storedToken = JSON.parse(storedTokenString)
      if (storedToken.expiration > Date.now()) {
        console.log("Token found in localstorage")
        setAuthLoading(false)
        setToken(storedToken.value)
        loadTracks(storedToken.value)
        // if(notNullPreviews.length <= numSongs){
        //   loadTracks(newToken.value)
        // }
        
      }
    }
    console.log("Sending request to AWS endpoint")
    request(AUTH_ENDPOINT).then(({ access_token, expires_in }) => {
      const newToken = {
        value: access_token,
        expiration: Date.now() + (expires_in - 20) * 1000,
      }
      localStorage.setItem(TOKEN_KEY, JSON.stringify(newToken))
      setAuthLoading(false)
      setToken(newToken.value)
      loadTracks(newToken.value)
      // if(notNullPreviews.length <= numSongs){
      //   loadTracks(newToken.value)
      // }
    })
  }, [])

  if (authLoading || configLoading) {
    return <div>Loading...</div>
  }

  // let guessCounter = 3
  // if(selectedArtist != gameArtist){
  //  guessCounter--
  //  if (guessCounter === 0){ game over }
 // }
 // if(selectedArtist === gameArtist){ you win }
  
  return (
    <div>
      <h2>Game Page</h2>
      <button onClick={() => console.log(selectedGenre)}>Log Selected Genre</button>
      <button onClick={() => console.log(tracks)}>Log Loaded Tracks</button>
      <button onClick={() => console.log(selectedArtist)}>Log Selected Artist</button>
      <button onClick={() => console.log(selectedArtistSongs)}>Log Artist Tracks</button>
      <button onClick={() => console.log(selectedArtistSongs.tracks[0].preview_url)}>Log preview url</button>
      <button onClick={() => console.log(notNullPreviews)}>Log preview url list</button>
      <button onClick={() => console.log(notNullPreviews.length)}>Log length of notNullPreviews</button>
      <button onClick={() => console.log(numSongs)}>Log Number of songs to listen</button>
    </div>
  );
};

export default Game;
