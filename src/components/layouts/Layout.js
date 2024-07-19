import React from 'react'
import Footer from './Footer'
import Nevbar from './Nevbar'

function Layout({ children }) {
    return (
        <>
            <Nevbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
