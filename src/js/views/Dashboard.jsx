import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import CompareIntakes from '../component/CompareIntakes.jsx';
import Loading from '../component/Spinner.jsx';
import MacroBar from '../component/Macrobar.jsx';
import { Link } from 'react-router-dom';

const Dashboard = () => {

  const { store, actions } = useContext(Context);
  const targetMacros = store.targetIntake;
  const actualMacros = store.currentIntake;

  const macronutrients = [
    { 'nutritionalValue': 'Calories', 'currentKcal': actualMacros.calories, 'targetKcal': targetMacros.calories },
    { 'nutritionalValue': 'Carbs', 'currentKcal': actualMacros.carbs, 'targetKcal': targetMacros.carbs },
    { 'nutritionalValue': 'Protein', 'currentKcal': actualMacros.protein, 'targetKcal': targetMacros.protein },
    { 'nutritionalValue': 'Fats', 'currentKcal': actualMacros.fats, 'targetKcal': targetMacros.fats }
  ]

  return (
    <div className='row'>
      <div className="col-6 col-md-8 col-sm-8 m-auto">
        {
          targetMacros.calories != 0 ?
            <div>
              <CompareIntakes macros={macronutrients} />
              <MacroBar macros={macronutrients} />
            </div>
            :
            < div className='text-center mt-5' >
              <p className='h3 text-danger my-3'>Please set target intake to access dashboard</p>
              <Link to='/settings'>
                <button type='button' className='btn btn-warning my-3'>Set Target Intake</button>
              </Link>
            </div >
        }
      </div>
    </div>
  )
}

export default Dashboard;