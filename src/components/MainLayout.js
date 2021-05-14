import React, { useState } from 'react'
import { ReactComponent as GitIcon } from '../assets/GitHubIcon.svg'

export default function MainLayout({ children, setUsername }) {
    const [searchValue, setSearchValue] = useState('')

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') setUsername(searchValue);
    }
    return (
        <>
            <header className="header" >
                <div className="image-wrapper">
                    <GitIcon className="git-icon" />
                </div>
                <div className="search-section">
                    <input type="search" className="search" onKeyDown={(e) => {handleKeyPress(e)}} onChange={(e) => setSearchValue(e.target.value)} placeholder="Enter GitHub username" spellCheck="false" />
                </div>
            </header>
            <main className="main content" >
                {children}
            </main>
        </>
    )
}
