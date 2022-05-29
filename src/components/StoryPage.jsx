import React, {useContext, useState} from 'react'
import { peopleContext } from '../context/peopleContext'

const StoryPage = () => {
  const data = useContext(peopleContext)

  const [people, setPeople] = useState(data)
  const [image, setImage] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [comment, setComment] = useState('')
  const [role, setRole] = useState('')


  const onSubmit = (e) => {
    e.preventDefault()

    if (!image|| !firstName || !lastName || !comment || !role) {
        alert("Fill all inputs and checkbox")
        return
    } 
     
    const id = Math.floor(Math.random() * 10000) + 13
    const name = firstName +   ' ' + lastName

    const newPerson =  {id, name, role, image, comment}
    setPeople ([...people, newPerson])
}

console.log(data)
  return (
    <div className='sm:container mx-auto sm:w-2/3 max-w-screen-lg my-10'>
      <p className='font-bold text-3xl'> Share Your Amazing Story </p>
      <form>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >Upload Your Picture</label>
        <input value={image}  onChange = {(e) => setImage(e.target.value)} className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="file" />
        <div className="flex justify-between">
          <div className="mb-6 mr-3 w-1/2">
            <label htmlFor="First Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">FIrst Name</label>
            <input value={firstName} onChange = {(e) => setFirstName(e.target.value)} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div className="mb-6 w-1/2">
            <label htmlFor="Last Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
            <input value={lastName} onChange = {(e) => setLastName(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">
              Share your Story
            </label>
            <textarea value={comment} onChange = {(e) => setComment(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="" />
          </div>
        </div>

        <div className="flex justify-between">
          <p className='w-6/10'> What did you interact with Vasiti as? </p>
          <div className="flex justify-between">
            <div className="flex items-center mb-4 pr-3">
              <input value={role} onChange = {(e) => e.currentTarget.checked ? setRole('CUSTOMER') : setRole('VENDOR')} type="radio" name="flexRadioDefault" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked />
              <label className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Customer
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input value={role} onChange = {(e) => !e.currentTarget.checked ? setRole('A') : setRole('B')} type="radio" name="flexRadioDefault" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
              <label className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Vendor
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end"><button type="submit" onClick={onSubmit} className="text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button></div>
      </form>
    </div>
  )
}

export default StoryPage