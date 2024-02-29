import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Banner = () => {

  const { store, actions } = useContext(Context);
  const currentMacros = store.currentIntake;

  return (
    <div>
      <div className='row d-flex justify-content-center banner-header' style={{ padding: '20px 5px 20px 5px' }}>
        <div className='col-auto'>
          <h4>MacroFit</h4>
        </div>
      </div>
      <div className='row d-flex justify-content-around mb-5 banner-summary' style={{ padding: '15px 5px 0px 5px' }}>
        <div className='col-2 text-center'>
          <p className='h6'>{currentMacros.calories}</p>
          <p className='h6'>Calories</p>
        </div>
        <div className='col-2 text-center'>
          <p className='h6'>{currentMacros.carbs + ' g'}</p>
          <p className='h6'>Carbs</p>
        </div>
        <div className='col-2 text-center'>
          <p className='h6'>{currentMacros.protein + ' g'}</p>
          <p className='h6'>Protein</p>
        </div>
        <div className='col-2 text-center'>
          <p className='h6'>{currentMacros.fats + ' g'}</p>
          <p className='h6'>Fats</p>
        </div>
      </div>
    </div>
  )
}

export default Banner