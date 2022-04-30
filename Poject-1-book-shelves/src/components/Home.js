import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import { getAll, update } from '../BooksAPI'

const Home = ({ books, category, changeShelf }) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {/* Shelf Components */}
                <Shelf section="Currently Reading" books={ books } category="currentlyReading" changeShelf={ changeShelf } />
                <Shelf section="Want To Read" books={ books } category="wantToRead" changeShelf={ changeShelf } />
                <Shelf section="Read" books={ books } category="read" changeShelf={ changeShelf } />
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
}

export default Home