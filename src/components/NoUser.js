import React from 'react'
import {ReactComponent as BigUserIcon} from '../assets/BigUserIcon.svg'
export default function StartingPage() {
    return (
        <div className="centered">
            <div className="image-wrapper">
                <BigUserIcon />
            </div>
            <p>User not found</p>
        </div>
    )
}
