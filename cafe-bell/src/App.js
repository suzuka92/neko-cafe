import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div class="container">
      <Route exact path="/" component={Home} />
      <Route path="/concept" component={Concept} />
      <Route path="/cact" component={Cast} />
      <Route path="/price" component={Price} />
      <Route path="/Game" component={Game} />
    </div>
  </BrowserRouter>
)

  const Home = () => {
    return (
      <div>
        <h1>Welcome cafe Bell</h1>
        <p><Link to="/concept">Concept</Link></p>
        <p><Link to="/cast">Cast</Link></p>
        <p><Link to="/price">Price</Link></p>
        <p><Link to="/game">Game</Link></p>
      </div>
    )
  }

  const Concept = () => {
    return (
      <div>
        <h1>Concept</h1>
      </div>
    )
  }

  const Cast = () => {
    return (
      <div>
        <h1>Cast</h1>
      </div>
    )
  }

  const Price = () => {
    return (
      <div>
        <h1>Price</h1>
      </div>
    )
  }

  const Game = () => {
    return (
      <div>
        <h1>Game</h1>
      </div>
    )
  }


export default App;