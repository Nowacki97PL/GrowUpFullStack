import React from 'react'

import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import ShopScreen from './screens/ShopScreen'

function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Routes>
          <Route path='/home' component={ShopScreen} />
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  )
}

export default App
