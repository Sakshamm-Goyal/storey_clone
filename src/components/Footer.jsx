import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#f5f5f6]'>
            <div className='px-24 flex justify-between py-6'>
                <div>
                    <h1 className='text-lg font-semibold opacity-80'>Information</h1>
                    <div className='mt-5 flex flex-col gap-2'>
                        <div className='pb-1 text-sm font-light border-b border-[#f5f5f6]  w-fit  hover:text-[#0Fa4Af] hover:border-b   hover:border-[#0Fa4Af]'>About us</div>
                        <div className='pb-1 text-sm font-light border-b border-[#f5f5f6]  w-fit  hover:text-[#0Fa4Af] hover:border-b   hover:border-[#0Fa4Af]'>FAQ</div>
                        <div className='pb-1 text-sm font-light border-b border-[#f5f5f6] w-fit  hover:text-[#0Fa4Af] hover:border-b   hover:border-[#0Fa4Af]'>Terms & Conditions</div>
                        <div className='pb-1 text-sm font-light border-b border-[#f5f5f6] w-fit  hover:text-[#0Fa4Af] hover:border-b   hover:border-[#0Fa4Af]'>Shipping & Delivery Policy</div>
                        <div className='pb-1 text-sm font-light border-b border-[#f5f5f6] w-fit  hover:text-[#0Fa4Af] hover:border-b   hover:border-[#0Fa4Af]'>Cancel & Refund Policy</div>
                        <div className='pb-1 text-sm font-light border-b border-[#f5f5f6] w-fit  hover:text-[#0Fa4Af] hover:border-b   hover:border-[#0Fa4Af]'>Privacy Policy</div>
                    </div>
                </div>
                <div>
                    <h1 className='text-lg font-semibold opacity-80'>Useful Links</h1>
                    <div className='mt-4 pb-1 text-sm font-light border-b border-[#f5f5f6] w-fit  hover:text-[#0Fa4Af] hover:border-b   hover:border-[#0Fa4Af]'>Seller Registration</div>
                </div>
                <div>
                    <h1 className='text-lg font-semibold opacity-80'>Follow Us</h1>
                    <div className='flex gap-4 text-lg mt-4'>
                        <i className="ri-facebook-fill px-1.5  rounded-full bg-[#0Fa4Af] text-white"></i>
                        <i className="ri-linkedin-fill px-1.5  rounded-full bg-[#0Fa4Af] text-white"></i>
                        <i className="ri-instagram-fill px-1.5  rounded-full bg-[#0Fa4Af] text-white"></i>
                    </div>
                </div>
                <div className='w-72 text-sm'>
                    <h1 className='text-lg font-semibold opacity-80'>Contact Us</h1>
                    <div className='flex flex-col gap-4 mt-4'>
                        <div className='pb-1 text-sm font-light border-b border-[#0Fa4Af] w-fit  hover:text-[#0Fa4Af] hover:border-b   hover:border-[#0Fa4Af]'><i className="ri-phone-fill text-[#0Fa4Af]"></i>   +91 9057600700</div>
                        <div className='pb-1 text-sm font-light border-b border-[#0Fa4Af] w-fit  hover:text-[#0Fa4Af] hover:border-b   hover:border-[#0Fa4Af]'><i className="ri-mail-fill text-[#0Fa4Af]"></i>  info@buildstorey.com</div>
                        <div><i className="ri-building-4-line text-[#0Fa4Af]"></i>   Straybox Private Limited</div>
                        <div><i className="ri-id-card-fill text-[#0Fa4Af]"></i>  T-15, T-16, Third Floor, Felicity Tower, Sahakar Marg, Lal Kothi, Jaipur, Rajasthan 302005</div>
                        <div><i className="ri-mail-fill text-[#0Fa4Af]"></i>   CIN: U26990RJ2022PTC080120</div>
                    </div>
                </div>
            </div >
            <hr />
            <div className='flex justify-between px-24 py-4'>
                <div className='text-xs text-gray-600'>© 2023 BuildStorey. All Rights Reserved</div>
                <div className='flex items-center gap-3 ' >
                    <p className='text-xs text-gray-600'>Powered by</p>
                    <img src="/log.svg" width={50} />
                </div>
            </div>
        </div >
    )
}

export default Footer