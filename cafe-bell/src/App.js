import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'



const App = () => (
  <BrowserRouter>
    <div class='container mt-5'>
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href='/home'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='./about'>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="./member">Member</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="./game">Game</Nav.Link>
        </Nav.Item>
      </Nav>

      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/member' component={Member} />
      <Route path='/game' component={Game} />
    </div>
  </BrowserRouter>
)

  const Home = () => (
    <div>
      <h1>Home</h1>
    </div>
  )

  const About = () => (
    <div>
      <h1>About</h1>
    </div>
  )

  const Member = () => (
    <div>
      <h1>Member</h1>
    </div>
  )

  const Game = () => (
      <div>
        <h1>Game</h1>
      </div>
  )


export default App;