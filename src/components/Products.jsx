import React from 'react'

const Products = ({ text }) => {
    return (
        <div className='px-24 my-8'>
            <div className='bg-[#F8F9FA] px-7 py-4 rounded-md'>{text}</div>
            <div className='mt-6 flex gap-4'>
                <div className='w-[300px] px-2 py-4 bg-[#F8F9FA]'>
                    <div className='flex gap-5 mb-3 justify-between items-center'>

                        <div className='text-[#37010B] text-2xl'>Filters</div>
                        <div className='text-xs px-2 py-2 rounded-md bg-[#37010B] text-white w-fit cursor-pointer'>Clear All Filters</div>
                    </div>
                    <hr />
                    <div className='flex justify-between border px-2.5 py-2 rounded-sm mt-4 bg-white'>
                        <div>Select Category</div>
                        <i class="ri-arrow-down-s-fill"></i>
                    </div>
                </div>
                <div className='w-full flex flex-col justify-between'>

                    <div className='bg-[#F8F9FA]  px-7 py-4 rounded-md'>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-between border px-2.5 py-2 rounded-sm  bg-white'>
                                <div>Select Category</div>
                                <i class="ri-arrow-down-s-fill"></i>
                            </div>
                            <div className='px-4 py-2 bg-[#878787] text-white cursor-pointer hover:bg-[#37010B] rounded-md'>Compare (0 out of 4)</div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center pb-3  text-xl'>Products Not Available</div>
                </div>
            </div>

        </div>
    )
}

export default Products