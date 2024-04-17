import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageData from '../components/PageData';

const TodayDeal = () => {
  return (
    <div>
      <Header />
      <PageData text='Today`s Deals' />
      <Footer />
    </div>
  )
}

export default TodayDeal;