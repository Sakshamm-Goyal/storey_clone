import React from 'react'

const Banner = () => {
    return (
        <div>

            <div className='mx-24 mt-20 flex shadow-lg'>
                <img src="https://www.buildstorey.com/img/ConsultantSeller.png" width={450} />
                <div className='py-32 px-14'>
                    <h1 className='text-4xl font-bold text-[#37010B]'>Want to sell your products with us?</h1>
                    <h2 className='mt-9 text-2xl font-bold text-[#ffab1a]'>Click on below link to get started
                    </h2>
                    <div className='mt-12 rounded-md text-white px-7 py-3 bg-[#37010B] w-fit cursor-pointer hover:bg-[#ffab1a]'>Register Now</div>
                </div>
            </div>
            <div className='mt-20 py-8 px-[360px]' style={{ backgroundImage: "url(https://www.buildstorey.com/_next/static/media/bg.7b562027.png)" }}>
                <div className='bg-[#ffffffcf] py-20 px-20 text-center rounded-md border border-[#37010B]'>
                    <h1 className='font-semibold text-3xl mb-4 text-[#37010B]'>Let's stay in touch</h1>
                    <p className='text-[#37010B] mb-7'>Get the latest on trends, deals and promotions from BuildStorey .</p>
                    <div className='border border-gray-400 flex mb-5'>
                        <input className='w-full focus:outline-none px-5' placeholder='Enter your email address' />
                        <div className='bg-[#37010B] text-white px-6 py-2.5'>Subscribe</div>

                    </div>
                    <p>We respect your privacy, so we never share your info.</p>
                </div>
            </div>
        </div >
    )
}

export default Banner