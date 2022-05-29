import React, { useContext } from 'react'
import { peopleContext } from '../context/peopleContext'
import People from './People'

const Testimonials = () => {
    const people = useContext(peopleContext)

  return (
    <div className='sm:container sm:mx-auto sm:w-5/6 max-w-screen-lg'>
        <div className='sm:flex justify-around flex-wrap'>
            {people.map((person) => person.id <= 6 ? <People key={person.id} person = {person} /> : null)}
        </div>
    </div>
  )
}

export default Testimonials

