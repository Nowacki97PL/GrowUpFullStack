import React from 'react'

import { Container } from 'react-bootstrap'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import ShopScreen from './screens/ShopScreen'

function App() {
  return (
    <div>
      <Header/>
      <main className='py-5'>
        <Container>
        <ShopScreen/>
        </Container>
      </main>
      <Footer/>
    </div>
  )
}

export default App
