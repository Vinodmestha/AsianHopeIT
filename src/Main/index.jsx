import React from 'react'
import Service from './Service'
import About from './About'
import Contract from './Contract'
import HeroMain from './HeroMain'
import OtherServices from './OtherServices'

function Main() {
    return (
        <>
            <HeroMain />
            <About />
            <Contract />
            <Service />
            <OtherServices />
        </>
    )
}

export default Main