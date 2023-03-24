import React from 'react'
import { Link } from 'react-router-dom'

const BlogItem = ({blog}) => {
    const words = blog.description.split(' '); 
    const truncatedText = words.slice(0, 10).join(' '); 
    const hasMoreWords = words.length > 10; 
    
    return (
        <div className="pb-11 bg-white dark:bg-gray-800 dark:border-gray-700">
            <Link to="#">
                <img className="rounded-t-lg" src={blog.cover} alt="" />
                <div className="p-5 h-24 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                    <p className="mb-3 text-ellipsis overflow-hidden font-normal text-gray-700 dark:text-gray-400">{truncatedText} {hasMoreWords && '...'}</p>
                </div>
                <figcaption className="flex p-5 space-x-3">
                    <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
                    <div className="space-y-0.5 item-center justify-center font-medium dark:text-white flex gap-3 text-left">
                        <div className="text-sm mt-1 font-light text-gray-500 dark:text-gray-400">by</div>
                        <div>{blog.author}</div>
                        <div className="text-sm mt-1 font-light text-gray-500 dark:text-gray-400">7 minutes ago</div>
                    </div>
                </figcaption> 
            </Link>
        </div>
    )
}

export default BlogItem