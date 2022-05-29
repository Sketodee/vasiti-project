import React from 'react'

const People = ({person}) => {
  return (
    <>
        <div  className='px-7 my-5 sm:w-1/3'>
            <img src={person.image} alt="" />
            <p className='text-2xl text-gray-500 pt-4'>{person.name}</p>
            <div className="flex py-3">
                <p>{person.location}</p>
                <button className={`inline ml-5 px-1 ${person.role === 'CUSTOMER' ? 'bg-blue-200' : 'bg-green-200'}`}> {person.role} </button>
            </div>
            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
        </div>
    </>
  )
}

export default People