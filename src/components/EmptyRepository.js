import React from 'react'
import {ReactComponent as NoRepositoryIcon} from '../assets/NoRepositoryIcon.svg'
export default function StartingPage() {
    return (
        <div className="repos-section">
            <div className="centered">
                <div className="image-wrapper">
                    <NoRepositoryIcon />
                </div>
                <p>Repository is empty</p>
            </div>
        </div>
)
}
