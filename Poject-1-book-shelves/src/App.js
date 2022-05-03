import "./App.css";
import React, { useState, useEffect } from 'react'
import Search from "./components/Search";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAll, update, search as SearchFunction } from './BooksAPI'

function App() {

  // get all books from the API
  const [books, setBooks] = useState([])
  useEffect(() => {
    getAll().then(books => setBooks(books))
  }, [])


  // change shelf of a book in the API and update the state of the books
  const changeShelf = async (book, shelf) => {
    await update(book, shelf)
    await getAll().then(books => setBooks(books))
  }

  // search componenta and its function
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    if (query) {
      SearchFunction(query, 100).then(books => setSearchResults(books))
    }
  }, [query])

  // if search results are not empty, check if the book is already in the books array
  // if it is, set the shelf of the book to the shelf of the book in the books array
  // if it is not, set the shelf of the book to the shelf of the book in the search results array
  const checkIfBookIsInBooks = (book) => {
      const bookInBooks = books.find(b => b.id === book.id)
      if (bookInBooks) {
        book.shelf = bookInBooks.shelf
      } else {
        // book.shelf = searchResults.find(b => b.id === book.id).shelf
        book.shelf = 'none'
      }
  }

  useEffect(() => {
    if (searchResults.length > 0) {
      searchResults.forEach(book => checkIfBookIsInBooks(book))
    }
  }, [query,books, searchResults])


  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/search" element={<Search query={query} setQuery={setQuery} searchResults={searchResults} changeShelf={changeShelf} />} />
          <Route exact path="/" element={<Home books={books} changeShelf={changeShelf} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
