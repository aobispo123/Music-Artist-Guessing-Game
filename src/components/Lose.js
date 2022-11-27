import React from 'react'
import { useHistory } from "react-router-dom"

const Lose = () => {
    const history = useHistory()

    const goHome = event => {
        event.preventDefault()
        history.push("/")
    }

    return(
        <div>
            <form onSubmit={goHome}>
                <p>You Lose</p>
                <button type='submit'>Play again</button>
            </form>
        </div>
    )
}

export default Lose