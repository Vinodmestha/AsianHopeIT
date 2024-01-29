import React from 'react'
import Service from './Service'
import About from './About'
import Contract from './Contract'
import HeroMain from './HeroMain'
import OtherServices from './OtherServices'
import WhyChooseUs from './WhyChooseUs'

function Main() {
    return (
        <>
            <HeroMain />
            <About />
            <Contract />
            <Service />
            <OtherServices />
            <WhyChooseUs />
        </>
    )
}

export default Main