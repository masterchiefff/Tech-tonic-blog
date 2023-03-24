import React from 'react'
import BlogItem from './blog-item/index'

export const BlogList = ({blogs}) => (
    <div className='pt-5 pb-5 grid grid-cols-2 gap-3'>
        {blogs.map(blog => <BlogItem blog={blog} key={blog.id}/>)}
    </div>
)