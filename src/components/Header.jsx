import React from 'react'
import { Link } from 'react-router-dom'
import AnimatedText from './Animated'


const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center py-1 px-32' style={{ backgroundImage: 'url(/bgupp.png)' }} >
                
                <div className='animated text-white text-xs'>
                <AnimatedText/>
                    </div>
                <div className='flex items-center gap-2 divide-x divide-white'>
                    <div className='font-semibold text-white text-sm'><i className="ri-phone-fill"></i> +91 9057600700</div>
                    <div className='pl-2 text-white text-sm'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path></svg></div>
                    <div className='font-semibold pl-1 text-white'>Get App</div>
                </div>
            </div>
            <div className='flex items-center shadow-md'>
                <img className='px-4 py-3 w-36 h-28' src='/log.svg' />
                <div className=' flex items-center gap-28 pl-24 rounded-l-md'>
                    <div className='relative flex'>
                        <div className='py-5 px-9 text-white bg-[#0Fa4Af] rounded-l-md'>
                            <div className='font-semibold text-sm'>All Categories <i className="ri-arrow-down-s-fill"></i></div>
                        </div>
                        <div className='bg-[#f5f5f6]'>
                            <input type='text' className='h-full focus:outline-none px-5 w-[450px] bg-inherit placeholder:text-sm placeholder:text-gray-500' placeholder='Search For products, Brand & Categories' />
                            <i className="ri-search-line px-4 cursor-pointer font-bold"></i>
                        </div>
                    </div>
                    <div className='text-sm text-black text-opacity-80'>
    <div className='flex items-center gap-2'>
        <i className="ri-map-pin-fill text-2xl text-[#c15d27]"></i>
        <div className='leading-2 text-base cursor-pointer'>
            <h1>Location</h1>
            <h3 className='font-bold text-sm'>Jaipur, Rajasthan, 302020</h3>
        </div>
    </div>
</div>


                    <div className='pl-2 flex gap-5 text-2xl text-[#c15d27] relative '><i className="ri-heart-fill cursor-pointer"></i>
                        <i className="ri-user-fill cursor-pointer"></i>
                        <i className="ri-shopping-cart-2-fill cursor-pointer"></i>
                        <div className='text-sm rounded-lg px-1  absolute -right-2 z-10 top-0   bg-[#f9cfa5] text-black'>0</div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center px-5 shadow-md py-2 font-normal text-sm'>
                <div className='py-2.5 px-2 border-b-2 border-white hover:text-[#c15d27] hover:border-b-2  hover:border-[#c15d27]'> <Link to="/"> Home</Link></div>
                <div className='py-2.5 px-2 border-b-2 border-white hover:text-[#c15d27] hover:border-b-2  hover:border-[#c15d27]'><Link to="/new_arrival">New Arrivals</Link></div>
                <div className='py-2.5 px-2 border-b-2 border-white hover:text-[#c15d27] hover:border-b-2  hover:border-[#c15d27]'><Link to="/trending">Trending</Link></div>
                <div className='py-2.5 px-2 border-b-2 border-white hover:text-[#c15d27] hover:border-b-2  hover:border-[#c15d27]'><Link to="/today_deal">Today's Deals</Link> </div>
                <div className='py-2.5 px-2 border-b-2 border-white hover:text-[#c15d27] hover:border-b-2  hover:border-[#c15d27]'><Link to="/discount">Discounts</Link></div>
                <div className='bg-[#0fa4af] bg-opacity-85 text-white hover:bg-opacity-100 cursor-pointer px-3 py-1 rounded-md '><i className="ri-upload-cloud-fill text-lg"></i><Link to="/requirement_slip">Requirement Slip</Link>  </div>
                <div className='bg-[#0fa4af] bg-opacity-85 text-white hover:bg-opacity-100 cursor-pointer px-3 py-1 rounded-md '><i className="ri-image-2-fill text-lg"></i>  <Link to="/searchByImage">Search by image</Link></div>
            </div>
        </div>
    )
}

export default Header
