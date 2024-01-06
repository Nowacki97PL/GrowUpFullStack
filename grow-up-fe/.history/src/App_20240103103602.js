import React from 'react'

import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Footer from './components/Footer'
import ShopScreen from './screens/ShopScreen'

function App() {
  return (
    <div>
      <Header/>
      <main className='py-5'>
        <Container>
        <h1>Welcome</h1>
        </Container>
      </main>
      <Footer/>
    </div>
  )
}

export default App
