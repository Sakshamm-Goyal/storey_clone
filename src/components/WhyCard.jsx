import React from 'react'

const WhyCard = ({ imgurl, text }) => {
    return (
        <div className='bg-[#FFF] shadow-lg pl-6 py-12 pr-7 rounded-md text-center hover:bg-[#0Fa4Af]'>

            <div className='w-36 relative'>
                <div className='bg-gray-100 text-gray-100 px-[75px] py-[60px] rounded-full'>.</div>

                <img className='absolute top-3 left-6' src={imgurl} width={100} />

                <h1 className='text-center font-semibold'>{text}</h1>
            </div>
        </div>
    )
}

export default WhyCard