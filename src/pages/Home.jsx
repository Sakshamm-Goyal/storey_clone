import React from 'react'
import Header from '../components/Header'
import ShopBy from '../components/ShopBy'
import Why from '../components/Why'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <ShopBy data={"CATEGORY"} title={"SHOP BY"} />
            <ShopBy data={"BRANDS"} title={"SHOP BY"} />
            <ShopBy data={"BRANDS"} title={"SHOP BY"} />
            <ShopBy data={"GUIDES"} title={"CONSTRUCTION"} />
            <Why />
            <Banner />
            <Footer />

        </>
    )
}

export default Home