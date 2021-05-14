import React from 'react'
import {ReactComponent as SearchIconBig} from '../assets/SearchIconBig.svg'
export default function StartingPage() {
    return (
        <div className="centered">
            <div className="image-wrapper">
                <SearchIconBig />
            </div>
            <p>Start with searching <br/> a GitHub user</p>
        </div>
    )
}
