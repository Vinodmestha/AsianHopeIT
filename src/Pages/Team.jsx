import React from 'react'
import { H1 } from '../Components/Typography'

// const team = [
//     { name: "Hentoni Doe", designation: "Chief Technical Officer", icon: "https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg" },
//     { name: "Jonathan Doe", designation: "CEO-Founder", icon: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg" },
//     { name: "Anabelle Doe", designation: "Chief Operations Officer", icon: "https://tailus.io/sources/blocks/classic/preview/images/woman.jpg" },
// ]
function Team() {
    return (
        <div className="lg:py-24 md:py-16 py-10 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 xl:px-32">
                <div className="mb-16 text-center">
                    <H1>Our Team</H1>
                    <p className="text-gray-500 font-axiforma lg:w-8/12 lg:mx-auto tracking-wide pt-2">We strive to do everything so that you can comfortably and productively work in our space and create amazing products and services</p>
                </div>
                <div className="grid gap-12 items-center md:grid-cols-3">
                    <div className="space-y-4 text-center">
                        <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                            src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg" alt="woman" loading="lazy" width="640" height="805" />
                        <div>
                            <h4 className="text-2xl font-semibold">Hentoni Doe</h4>
                            <span className="block text-sm text-gray-500">Chief Technical Officer</span>
                        </div>
                    </div>
                    <div className="space-y-4 text-center">
                        <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                            src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg" alt="man" loading="lazy" width="1000" height="667" />
                        <div>
                            <h4 className="text-2xl font-semibold">Jonathan Doe</h4>
                            <span className="block text-sm text-gray-500">CEO-Founder</span>
                        </div>
                    </div>
                    <div className="space-y-4 text-center">
                        <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                            src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg" alt="woman" loading="lazy" width="1000" height="667" />
                        <div>
                            <h4 className="text-2xl font-semibold">Anabelle Doe</h4>
                            <span className="block text-sm text-gray-500">Chief Operations Officer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team