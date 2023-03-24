import React from 'react'
import { Link } from 'react-router-dom';
import Label from './labels';

const LabelList = () => {
  return (
    <div className='flex gap-3'>
      <Link to='/'><Label label='Ethirium'/></Link>
      <Label label='Design'/>
      <Label label='Technology'/>
      <Label label='Programming'/>
      <Label label='Tech'/>
      <Label label='Crypto'/>
      <Label label='Microverse'/>
    </div>
  )
}

export default LabelList