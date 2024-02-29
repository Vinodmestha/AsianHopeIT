import React, { useEffect, useState } from 'react'
import { backTo } from './assets'

import { BrowserRouter as Router } from 'react-router-dom'

import Header from './Container/header'
import PageRoute from './routes'
import Footer from './Container/footer'
// import Main from './Main'

function App() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <Router>
            <div className='relative'>
                <Header />
                {showTopBtn && (<button className='fixed bottom-10 right-10 rounded-full p-1 shadow-md bg-gray-300 dark:bg-white cursor-pointer' onClick={() => goToTop()}>
                    <img src={backTo} alt="backTo" className='size-7 group-hover:bg-secondary dark:bg-secondary rounded-full rotate-90' />
                </button>)}
                <PageRoute />
                <Footer />
            </div>
        </Router>
    )
}

export default App
