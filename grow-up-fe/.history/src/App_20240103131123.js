import React from 'react'

import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import ShopScreen from './screens/ShopScreen'

function App() {
  return (
    <Router>
      <Header/>
      <main className='py-5'>
        <Container>
          <Route path='/' component={Header} exact />
        </Container>
      </main>
      <Footer/>
    </Router>
  )
}

export default App
