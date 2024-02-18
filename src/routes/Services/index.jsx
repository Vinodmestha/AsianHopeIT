import React, { useEffect } from 'react'
import Hero from './Hero'

export default function Service() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Hero />
        </div>
    )
}
