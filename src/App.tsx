import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Header } from './components/Header/Header';
import { AddMovie } from './components/AddMovie/AddMovie';
import { MovieList } from './components/MovieList/MovieList';
import { Watched } from './components/Watched/Watched';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/addmovie'>
          <AddMovie />
        </Route>

        <Route path='/watched'>
          <Watched />
        </Route>

        <Route path='/'>
          <MovieList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
