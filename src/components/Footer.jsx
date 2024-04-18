import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#f5f5f6]'>
            <div className='px-24 flex justify-between py-6'>
                <div>
                    <h1 className='text-lg font-semibold opacity-80'>Information</h1>
                    <div className='mt-5 flex flex-col gap-2'>
                        <div className='pb-1 text-sm font-light border-b border-[#f5f5f6]  w-fit  hover:text-[#c15d27] hover:border-b   hover:border-[#c15d27]'>About us</div>
                        <div className='pb-1 text-sm font-light border-b border-[#f5f5f6]  w-fit  hover:text-[#c15d27] hover:border-b   hover:border-[#c15d27]'>FAQ</div>
                        <div className='pb-1 text-sm font-light border-b border-[#f5f5f6] w-fit  hover:text-[#c15d27] hover:border-b   hover:border-[#c15d27]'>Terms & Conditions</div>
                        <div className='pb-1 text-sm font-light border-b border-[#f5f5f6] w-fit  hover:text-[#c15d27] hover:border-b   hover:border-[#c15d27]'>Shipping & Delivery Policy</div>
                        <div className='pb-1 text-sm font-light border-b border-[#f5f5f6] w-fit  hover:text-[#c15d27] hover:border-b   hover:border-[#c15d27]'>Cancel & Refund Policy</div>
                        <div className='pb-1 text-sm font-light border-b border-[#f5f5f6] w-fit  hover:text-[#c15d27] hover:border-b   hover:border-[#c15d27]'>Privacy Policy</div>
                    </div>
                </div>
                <div>
                    <h1 className='text-lg font-semibold opacity-80'>Useful Links</h1>
                    <div className='mt-4 pb-1 text-sm font-light border-b border-[#f5f5f6] w-fit  hover:text-[#c15d27] hover:border-b   hover:border-[#c15d27]'>Seller Registration</div>
                </div>
                <div>
                    <h1 className='text-lg font-semibold opacity-80'>Follow Us</h1>
                    <div className='flex gap-4 text-lg mt-4'>
                        <i className="ri-facebook-fill px-1.5  rounded-full bg-[#c15d27] text-white"></i>
                        <i className="ri-linkedin-fill px-1.5  rounded-full bg-[#c15d27] text-white"></i>
                        <i className="ri-instagram-fill px-1.5  rounded-full bg-[#c15d27] text-white"></i>
                    </div>
                </div>
                <div className='w-72 text-sm'>
                    <h1 className='text-lg font-semibold opacity-80'>Contact Us</h1>
                    <div className='flex flex-col gap-4 mt-4'>
                        <div className='pb-1 text-sm font-light border-b border-[#f5f5f6] w-fit  hover:text-[#c15d27] hover:border-b   hover:border-[#c15d27]'><i className="ri-phone-fill text-[#c15d27]"></i>   +91 9057600700</div>
                        <div className='pb-1 text-sm font-light border-b border-[#f5f5f6] w-fit  hover:text-[#c15d27] hover:border-b   hover:border-[#c15d27]'><i className="ri-mail-fill text-[#c15d27]"></i>  info@buildstorey.com</div>
                        <div><i className="ri-building-4-line text-[#c15d27]"></i>   Straybox Private Limited</div>
                        <div><i className="ri-id-card-fill text-[#c15d27]"></i>  T-15, T-16, Third Floor, Felicity Tower, Sahakar Marg, Lal Kothi, Jaipur, Rajasthan 302005</div>
                        <div><i className="ri-mail-fill text-[#c15d27]"></i>   CIN: U26990RJ2022PTC080120</div>
                    </div>
                </div>
            </div >
            <hr />
            <div className='flex justify-between px-24 py-4'>
                <div className='text-xs text-gray-600'>© 2023 BuildStorey. All Rights Reserved</div>
                <div className='flex items-center gap-3 ' >
                    <p className='text-xs text-gray-600'>Powered by</p>
                    <img src="https://www.buildstorey.com/img/Logo.svg" width={50} />
                </div>
            </div>
        </div >
    )
}

export default Footer