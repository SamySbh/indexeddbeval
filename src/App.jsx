import React from 'react';
import './App.scss';
import ListBooks from './components/listBooks';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddBookForm from './components/addBook';

function App() {
  return (
    <>
      <Router>
        <header className="header">
          <Menu />
          <Route path="/ajouter-livre" component={AddBookForm} />
        </header>
        <div>
          <ListBooks />
        </div>
      </Router>
    </>
  );
}

export default App;
