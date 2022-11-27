import React from 'react'
import { useHistory } from "react-router-dom"

const Win = () => {
    const history = useHistory()

    const goHome = event => {
        event.preventDefault()
        history.push("/")
    }
     
    return(
        <div>
            <form onSubmit={goHome}>
                <p>You win</p>
                <button type='submit'>Play again</button>
            </form>
        </div>
    )
}

export default Win