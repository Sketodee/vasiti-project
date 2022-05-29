import React from 'react'

const BottomHero = () => {
  return (
    <div>
        <div className='bg-orange-100 mt-0 py-4'>
                <div className='container mx-auto sm:w-5/6 max-w-screen-lg my-5'>
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                        <div className='basis-2/5 px-7 sm:px-1'>
                            <p className='text-5xl'> Josiah's Experience</p>
                            <button className='border-2 text-orange-700 border-orange-700 px-2 py-1 rounded-md mt-2'> VENDOR</button>
                            <p className='py-3'> I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience.
                                I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service,
                                an all round great experience. I would definately be coming back!</p>
                            <p className='tracking-widest'>SHARE YOUR OWN STORY</p>
                            <img src="assets/vector-3.png" alt="" />
                        </div>
                        <div className='basis-2/5'>
                            <img src='assets/woman-shoppingbag-card1.png' />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default BottomHero