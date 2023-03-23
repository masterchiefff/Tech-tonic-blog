import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../search'

const Header = () => {
  return (
    <div className='pb-8 border-b-2 border-stone-200'>
        <div className='flex'>
            <div className='grow-[4]'>
                <SearchBar />
            </div>
            <div className='flex-auto flex gap-[1rem] justify-end'>
                <Link to="">
                    <span className='text-2xl block text-stone-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    </span>
                </Link>
                <Link to="">
                    <span className='text-2xl block text-stone-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                    </span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header