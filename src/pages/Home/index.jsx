import React from 'react';
import { BlogList } from '../../components/blog-list/index';
import LabelList from '../../components/common/label';
import { blogList } from '../../config/data';

export const Home = () => {
  return (
    <div className='p-5 pl-0 pr-0'>
      <h4 className="text-2xl font-bold dark:text-white">Topic Match for You</h4>
      <LabelList />
      <BlogList blogs={blogList}/>
    </div>
  )
}