import { Footer } from '../Footer'
import { Header } from '../Header'
import React from 'react'

const HomeLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default HomeLayout