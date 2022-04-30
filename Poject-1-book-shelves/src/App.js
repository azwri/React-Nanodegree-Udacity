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
      SearchFunction(query, 20).then(books => setSearchResults(books))
    }
  }, [query])

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
