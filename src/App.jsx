import React from 'react';
import './App.scss';
import ListBooks from './components/listBooks';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddBook from './components/addBook';

function App() {
  return (
    <>
      <Router>
        <header className="header">
          <Menu />
        </header>
        <Routes>
          <Route index element={<ListBooks />} />
          <Route path="/ajouter-livre" element={<AddBook />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
