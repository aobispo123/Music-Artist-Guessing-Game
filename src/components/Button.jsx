import styled from "styled-components";

export const SelectOptionForm = styled.form`
text-align: center;
border: 1px solid black;
border-radius: 50px;
margin: 200px 200px 200px 200px;
background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
`
export const SelectionOption = styled.option`
text-align: center;
border-radius: 15px;
`
export const Selection = styled.select`
border-radius: 15px;
font-size: 25px;
width: 250px;
height: 50px;
font-family: Roboto;
`


export const SelectOption = styled.div`
text-align: center;
font-size: 50px;
margin-top: 30px;
font-family: Roboto;
`

export const SubmitPlayButton = styled.button`
border-radius: 15px;
border: none;
font-family: Roboto;
font-size: 65px;
margin-top: 100px;
margin-bottom: 50px;
color: black;
background-color: white;
position: flex;
`

export const Song = styled.div`
text-align: center;
border: 1px solid black;
border-radius: 50px;
margin: 10px 70px 10px 70px;
margin-bottom: 10%;
margin-right: 30%;
margin-left: 30%;
background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
`
export const Choice = styled.div`
text-align: center;
border: 1px solid black;
border-radius: 50px;
margin: 10px 70px 10px 70px;
margin-right: 30%;
margin-left: 30%;
background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
` 

export const Guess = styled.div`
text-align: center;
margin-right: 10%;
border: 1px solid black;
border-radius: 50px;
margin: 10px 70px 10px 90%;
background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);

`

export const PlaySongButton = styled.button`
text-align: center;
border: 1px solid black;
border-radius: 50px;
margin: 10px 10px 10px 10px;
color: black;
background-color: white;
position: relative;
&:disabled {
    visibility: hidden;
}
`

export const ArtistChoice = styled.button`
justify-content: center;
text-align: center;
border: 1px solid black;
border-radius: 50px;
margin: 10px 10px 10px 10px;
color: black;
background-color: white;
position: flex;
&:disabled {
    visibility: hidden;
}
`

// Loading Animation
export const SpinnerOverlay =styled.div`
    height: 60vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SpinnerContainer = styled.div`
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(195, 195, 195, 0.6);
    border-radius: 50%;
    border-top-color: #636767;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
    @keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        to {
            -webkit-transforms: rotate(360deg);
        }
    }
`;

// Win/Lose screen

export const Winner = styled.div`
text-align: center;
    form {
        text-align: center;
        border: 1px solid black;
        border-radius: 50px;
        margin: 200px 200px 200px 200px;
        background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
        
        p {
            font-family: Roboto;
        }

        button {
            text-align: center;
            border: 1px solid black;
            border-radius: 50px;
            margin: 10px 10px 10px 10px;
            color: black;
            background-color: white;
            position: relative;
            &:disabled {
                visibility: hidden;
            }
        }
    }
        
`
export const Loser = styled.div`
text-align: center;
    form {
        text-align: center;
        border: 1px solid black;
        border-radius: 50px;
        margin: 200px 200px 200px 200px;
        background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
        
        p {
            font-family: Roboto;
        }

        button {
            text-align: center;
            border: 1px solid black;
            border-radius: 50px;
            margin: 10px 10px 10px 10px;
            color: black;
            background-color: white;
            position: relative;
            &:disabled {
                visibility: hidden;
            }
        }
    }
        
`