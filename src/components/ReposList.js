import React, { useState } from 'react'
import RepoItem from './RepoItem'
import EmptyRepository from './EmptyRepository'
import ReactPaginate from 'react-paginate'
import {ReactComponent as Arrow} from '../assets/Arrow.svg'

export default function ReposList({ repos }) {
    const [currentPageNumber, setCurrentPageNumber] = useState(0)
    
    if(repos.length == 0) return <EmptyRepository />;
    
    const reposPerPage = 4
    const pagesVisited = currentPageNumber * reposPerPage
    const pageCount = Math.ceil(repos.length / reposPerPage)
    const displayRepos = repos.slice(pagesVisited, pagesVisited + reposPerPage)

    const changeCurrentPage = ({ selected }) => {
        setCurrentPageNumber(selected)
    }
    return (
        <div className="repos-section">
            <h1 className="count-text">
                Repositories ({repos.length})
            </h1>
            <div className="list">
                {displayRepos.map(repo => <RepoItem key={repo.id} repoName={repo.name} html_url={repo.html_url} description={repo.description} />)}
            </div>
            
            <div className="pagination-section">
                <p className="items-number">{pagesVisited + 1}-{pagesVisited + displayRepos.length} of {repos.length} items</p>
                <ReactPaginate 
                    previousLabel={<Arrow className="left arrow" />}
                    nextLabel={<Arrow className="arrow" />}
                    pageCount={pageCount}
                    onPageChange={changeCurrentPage}
                    containerClassName="buttons"
                    activeClassName="active"
                    pageRangeDisplayed="2"
                    marginPagesDisplayed="1"
                />
            </div>
        </div>
    )
}
