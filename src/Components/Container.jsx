import React from 'react'

export default function Container({ children, className }) {
    return (
        <section className={`max-w-screen-xl mx-auto px-3 xl:px-0 ${className}`}>
            {children}
        </section>
    )
}
