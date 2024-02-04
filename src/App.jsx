import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './Container/header'
import PageRoute from './routes'
import Footer from './Container/footer'
// import Main from './Main'

function App() {
    return (
        <Router>
            <Header />
            <PageRoute />
            <Footer />
        </Router>
    )
}

export default App
