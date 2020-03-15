import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Nav, Image, Container, Row, Col  } from 'react-bootstrap'



const App = () => (
  <BrowserRouter>
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href='/home'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='./about'>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="./member">Member</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="./game">Game</Nav.Link>
        </Nav.Item>
      </Nav>

      <Route exact path='/home' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/member' component={Member} />
      <Route path='/game' component={Game} />
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

  <Container>
    
  <Row>
    <Col xs={6} md={4}>
      <Image src="images/member-icon-gin.jpg" thumbnail id="gin"/>
    </Col>
    <Col xs={6} md={4}>
      <Image src="images/member-icon-bibi.jpg" thumbnail id="bibi"/>
    </Col>
    <Col xs={6} md={4}>
      <Image src="images/member-icon-coco.jpg" thumbnail id="coco"/>
    </Col>
    <Col xs={6} md={4}>
      <Image src="images/member-icon-momo.jpg" thumbnail id="momo"/>
    </Col>
    <Col xs={6} md={4}>
      <Image src="images/member-icon-kotetsu.jpg" thumbnail id="kotetsu"/>
    </Col>
    <Col xs={6} md={4}>
      <Image src="images/member-icon-koharu.jpg" thumbnail id="koharu"/>
    </Col>
    <Col xs={6} md={4}>
      <Image src="images/member-icon-uni.jpg" thumbnail id="uni"/>
    </Col>
  </Row>
  </Container>
  )


  const Game = () => (
      <div>
        <h1>Game</h1>
      </div>
  )


export default App;