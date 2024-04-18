import React from 'react'
import WhyCard from './WhyCard'

const Why = () => {
    const whyData = [{ imgurl: "https://www.buildstorey.com/img/icon1.svg", text: "Free Delivery at home" }, { imgurl: "https://www.buildstorey.com/img/icon2.svg", text: "Original products guaranteed" }, { imgurl: "https://www.buildstorey.com/img/icon3.svg", text: "Wholesale Pricing" }, { imgurl: "https://www.buildstorey.com/img/icon4.svg", text: "Shop from your comfort zone" }, { imgurl: "https://www.buildstorey.com/img/icon5.svg", text: "One-stop Destination" }]
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>

                <h1>Why</h1>
                <div className='text-xl font-semibold'>BUILD<span className='text-[#0Fa4Af]'>STOREY</span></div>
            </div>
            <div className='flex justify-between mx-24 mt-10'>
                {whyData?.map((data, index) => (

                    <WhyCard imgurl={data.imgurl} text={data.text} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Why