import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black text-white mt-24 '>
            <div style={relative} className='container mx-auto sm:w-5/6 max-w-screen-lg'>
                <div  className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                    <div className='basis-2/5 px-7 sm:px-1 sm:order-2 text-white'>
                        <p className='text-3xl font-bold'>Be a Member of Our Community</p>
                        <p className='py-3'> We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</p>
                    </div>
                    <div className='basis-2/5 hidden sm:block sm:order-1'>
                        <div style={absolute}><img src='assets/subscribe-banner-1.png' /></div>
                    </div>
                    <div className='basis-2/5 sm:hidden sm:order-1'>
                        <div ><img src='assets/subscribe-banner-1.png' /></div>
                    </div>
                </div>
                <div style={listMargin} className='flex flex-col sm:flex-row items-center'>
                    <div className='px-2 sm:w-1/5 j'>
                        <ul className='list-none leading-loose'>
                            <li className='font-bold'> Company</li>
                            <li>About Us</li>
                            <li>Term of Use</li>
                            <li>Privacy Policy</li>
                            <li>Press & Media</li>
                        </ul>
                    </div>
                    <div className='sm:w-1/5 '>
                        <ul className='list-none leading-loose'>
                            <li className='font-bold'> Products </li>
                            <li> Marketplace </li>
                            <li>Magazine</li>
                            <li>Seller</li>
                            <li>Wholesale</li>
                            <li>Services</li>
                        </ul>
                    </div>
                    <div className='sm:w-2/5'>
                        <ul className='list-none leading-loose '>
                            <li className='font-bold'> Careers </li>
                            <li> Become a Campus Rep </li>
                            <li>Become a Vasiti Influencer</li>
                            <li>Become a Campus Writer</li>
                            <li>Become an Affiliate </li>
                        </ul>
                    </div>
                    <div className='sm:w-1/5'>
                        <ul className='list-none leading-loose'>
                            <li className='font-bold'> Get in touch </li>
                            <li> Contact Us </li>
                            <li>Partner with us</li>
                            <li>Advertise with us </li>
                            <li>Help FAQs</li>
                        </ul>
                    </div>
                    <div className='sm:w-1/5 sm:self-center'>
                        <ul className='list-none leading-loose'>
                            <li className='font-bold'> Join Our community </li>
                            <li> Email Newsletter </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

const relative = {
    position: 'relative'
}

const absolute = {
    position: 'absolute',
    top: '-10%'
}

const listMargin = {
    marginTop: '250px'
}

export default Footer