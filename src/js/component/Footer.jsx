import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='row d-flex justify-content-center mt-5' style={{ backgroundColor: '#03023F', height: '7vh' }}>
      <div className='col-4 text-center'>
        <Link to='/settings'>
          <p className='h4'>Set Macros</p>
        </Link>
      </div>
      <div className='col-4 text-center'>
        <Link to='/dashboard'>
          <p className='h4'>Dashboard</p>
        </Link>
      </div>
    </div>
  )
}

export default Footer