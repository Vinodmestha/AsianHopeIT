import React from 'react'
import Service from './Service'
import VRKDevelopers from './VRKDevelopers'
import About from './About'
import Contract from './Contract'
import HeroMain from './HeroMain'
import OtherServices from './OtherServices'
import WhyChooseUs from './WhyChooseUs'
import Team from './Team'

function Pages() {
    return (
        <>
            <HeroMain />
            <VRKDevelopers />
            <About />
            <Contract />
            <Service />
            <OtherServices />
            <WhyChooseUs />
            {/* <Team /> */}
        </>
    )
}

export default Pages