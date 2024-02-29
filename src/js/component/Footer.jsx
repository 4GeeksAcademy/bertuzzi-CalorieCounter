import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='row d-flex justify-content-center mt-5 footer' style={{ padding: '25px 5px 20px 5px' }}>
      <div className='col-auto text-center mx-3'>
        <Link to='/settings'>
          <p className='h5'>Set Macros</p>
        </Link>
      </div>
      <div className='col-auto text-center mx-3'>
        <Link to='/'>
          <p className='h5'>Home</p>
        </Link>
      </div>
      <div className='col-auto text-center mx-3'>
        <Link to='/dashboard'>
          <p className='h5'>Dashboard</p>
        </Link>
      </div>
    </div>
  )
}

export default Footer