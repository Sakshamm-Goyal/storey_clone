import React from 'react'

const ShopBy = ({ data, title }) => {
    return (
        <div className='py-7 mb-20'>
            <div className='flex flex-col justify-center items-center mb-40'>
                <h3>{title}</h3>
                <div className='text-xl font-semibold text-[#c15d27]'>{data}</div>
            </div>

            <div className='mr-56 float-right w-fit px-7 py-3.5 rounded-md cursor-pointer text-white bg-[#e5842a] hover:bg-[#37010b]'>Get Free Estimate</div>

        </div>
    )
}

export default ShopBy