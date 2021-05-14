import React from 'react'

export default function RepoItem({ repoName, html_url, description }) {
    return (
        <div className="repo-item">
            <h2 className="name">
                <a href={html_url} target="_blank">{repoName}</a>
            </h2>
            <p className="description">{description}</p>
        </div>
    )
}
