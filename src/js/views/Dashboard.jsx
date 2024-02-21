import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import CompareIntakes from '../component/CompareIntakes.jsx';
import Loading from '../component/Spinner.jsx';
import MacroBar from '../component/Macrobar.jsx';

const Dashboard = () => {

  const { store, actions } = useContext(Context);
  const targetMacros = store.targetIntake;
  const actualMacros = store.currentIntake;

  const macronutrients = [
    { 'nutritionalValue': 'calories', 'currentKcal': actualMacros.calories, 'targetKcal': targetMacros.calories },
    { 'nutritionalValue': 'carbs', 'currentKcal': actualMacros.carbs, 'targetKcal': targetMacros.carbs },
    { 'nutritionalValue': 'protein', 'currentKcal': actualMacros.protein, 'targetKcal': targetMacros.protein },
    { 'nutritionalValue': 'fats', 'currentKcal': actualMacros.fats, 'targetKcal': targetMacros.fats }
  ]

  return (
    <div>
      {
        targetMacros && actualMacros ?
          <CompareIntakes macros={macronutrients} />
          :
          <Loading />
      }
      {
        targetMacros && actualMacros ?
          <MacroBar macros={macronutrients} />
          :
          <Loading />
      }
    </div>
  )
}

export default Dashboard