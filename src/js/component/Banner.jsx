import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Banner = () => {

  const { store, actions } = useContext(Context);
  const currentMacros = store.currentIntake;

  return (
    <div className='row d-flex justify-content-around mb-5' style={{ backgroundColor: '#03023F', height: '7vh' }}>
      <div className='col-2 text-center'>
        <p className='h5'>{currentMacros.calories}</p>
        <p className='h4'>Calories</p>
      </div>
      <div className='col-2 text-center'>
        <p className='h5'>{currentMacros.carbs + ' g'}</p>
        <p className='h4'>Carbs</p>
      </div>
      <div className='col-2 text-center'>
        <p className='h5'>{currentMacros.protein + ' g'}</p>
        <p className='h4'>Protein</p>
      </div>
      <div className='col-2 text-center'>
        <p className='h5'>{currentMacros.fats + ' g'}</p>
        <p className='h4'>Fats</p>
      </div>
    </div>
  )
}

export default Banner