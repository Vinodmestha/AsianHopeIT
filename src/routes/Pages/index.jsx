import React from 'react'
import Service from './Service'
import VRKDevelopers from './VRKDevelopers'
import ManpowerConsultancy from './ManpowerConsultancy'
// import About from './About'
import Contract from './Contract'
import HeroMain from './HeroMain'
import OtherServices from './OtherServices'
import WhyChooseUs from '../../Components/WhyChooseUs'
import WhatsNew from './WhatsNew'
// import Team from './Team'

function Pages() {
    return (
        <>
            <HeroMain />
            {/* <About /> */}
            <ManpowerConsultancy />
            {/* <WhatsNew /> */}
            <Service />
            <Contract />
            <OtherServices />
            <WhyChooseUs />
            <VRKDevelopers />
            {/* <Team /> */}
        </>
    )
}

export default Pages