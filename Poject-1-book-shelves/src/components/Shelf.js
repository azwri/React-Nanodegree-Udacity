import React from 'react'
import Book from './Book'

const Shelf = ({ section }) => {
  return (
      <div className="bookshelf">
          <h2 className="bookshelf-title">{ section }</h2>
          <div className="bookshelf-books">
              <ol className="books-grid">
                  {/* Book Component */}
                  <Book />
              </ol>
          </div>
      </div>
  )
}

export default Shelf