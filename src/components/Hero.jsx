import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className="mb-0">
                <div className='container mx-auto sm:w-5/6 max-w-screen-lg my-5'>
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                        <div className='basis-2/5 px-7 sm:px-1'>
                            <h4 className='text-5xl font-bold mb-5'> Amazing Experiences from our Wonderful Customers</h4>
                            <p className='text-1xl text-gray-500 mb-5'> Here is what customers and vendors are saying about us, you can share your stories with us too </p>
                        </div>
                        <div className='basis-2/5'>
                            <img src='assets/Testimonial-image-1.png' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-black mt-0'>
                <div className='container mx-auto sm:w-5/6 max-w-screen-lg my-5'>
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                        <div className='basis-2/5 px-7 sm:px-1 sm:order-2 text-white'>
                            <p className='text-5xl'>Tolu & Joy's Experience</p>
                            <button className='border-2 border-white-200 px-2 py-1 rounded-md mt-2'>CUSTOMER</button>
                            <p className='py-3'> I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience.
                                I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service,
                                an all round great experience. I would definately be coming back!</p>
                            <p className='tracking-widest'>SHARE YOUR OWN STORY</p>
                            <img src="assets/vector-3.png" alt="" />
                        </div>
                        <div className='basis-2/5 sm:order-1'>
                            <img src='assets/black-beautiful-ladies-smiling-1.png' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero