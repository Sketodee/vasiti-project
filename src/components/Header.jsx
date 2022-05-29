import React from 'react'
import { Link} from 'react-router-dom'

const Header = () => {
  return (
    <header >
      <div className=' sm:border-b-2 sm:border-grey-900'>
        <div className='sm:container sm:mx-auto mx-5 my-10'>
          <div className='sm:flex justify-around'>
            <img src="assets/vasitilogo.png" />
            <ul className='self-center hidden sm:block'>
              <li className='sm:inline-block mr-5'> <a href=''> ABOUT US </a></li>
              <li className='sm:inline-block mr-5'> <Link to='story'> STORIES </Link></li>
              <li className='sm:inline-block mr-5'> <a> CONTACT </a></li>
              <li className='sm:inline-block mr-5'> <a> LOG IN </a></li>
              <button className='bg-orange-600 text-white px-4 py-1 rounded-lg'> SIGN UP</button>
            </ul>
          </div>
        </div>
      </div>
      <div  className=' border-b-2 border-grey-900 hidden sm:block' > 
        <div className="container mx-auto w-3/4 lg:w-3/6 my-2">
          <ul className='flex justify-around text-sm'>
          <li className='sm:inline-block '> <a> MARKET PLACE </a></li>
          <li className='sm:inline-block'> <a> WHOLESALE CENTER </a></li>
          <li className='sm:inline-block '> <a> SELLER CENTER </a></li>
          <li className='sm:inline-block '> <a> SERVICES </a></li>
          <li className='sm:inline-block '> <a> INTERNSHIPS </a></li>
          <li className='sm:inline-block '> <a> EVENTS </a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}
export default Header