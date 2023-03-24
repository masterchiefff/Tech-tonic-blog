import React from 'react'
import { Link } from 'react-router-dom'

const AdSecton = () => {
  return (
    <div className='py-8'>
        <div className="max-w-sm p-10 bg-gray-900 flex flex-col rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <Link to="/">
                <h5 className="mb-2 text-white text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">Wanna Read more? Become a Premium Member</h5>
            </Link>
            <Link to="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-neutral-50 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Learn more
            </Link>
        </div>
    </div>
  )
}

export default AdSecton