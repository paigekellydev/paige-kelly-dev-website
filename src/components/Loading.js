import React from 'react'
import '../stylesheets/Loading.css';

export default function Loading({stopLoading}) {
    return (
        <div onClick={stopLoading} id="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img src="https://i.imgur.com/8YS2MSr.png" className="App-logo" alt="logo" />
        </div>
    )
}
