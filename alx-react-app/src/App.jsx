import React from 'react'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <WelcomeMessage />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
