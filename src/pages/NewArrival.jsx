import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Products from '../components/Products'

const NewArrival = () => {
    return (
        <div>
            <Header />
            <Products text={"New Arrival"} />
            <Footer />
        </div>
    )
}

export default NewArrival