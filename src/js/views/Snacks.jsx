import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import Loading from '../component/Spinner.jsx';

const Snacks = () => {

  const [food, setFood] = useState({});
  const [amount, setAmount] = useState();
  const [macros, setMacros] = useState({
    calories: 0,
    carbs: 0,
    protein: 0,
    fats: 0
  });
  const { store, actions } = useContext(Context);

  const fetchMacros = async (ingr) => {
    const url = 'https://api.edamam.com/api/nutrition-data?app_id=c6d34f6b&app_key=ad4f63207634378a114a5d09a9afb26a&nutrition-type=cooking&ingr=100%20g%20' + ingr;
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }
    const response = await fetch(url, options);
    if (!response.ok) {
      console.log(response.status, response.statusText);
      return response.statusText;
    }
    const data = await response.json();
    const nutritionaValues = data.totalNutrients
    console.log(nutritionaValues);

    const currentCal = macros.calories;
    const currentCarbs = macros.carbs;
    const currentProtein = macros.protein;
    const currentFats = macros.fats;

    const calories = (Math.round((nutritionaValues.ENERC_KCAL.quantity) * (amount / 100)));
    const carbs = (Math.round((nutritionaValues.CHOCDF.quantity) * (amount / 100)));
    const protein = (Math.round((nutritionaValues.PROCNT.quantity) * (amount / 100)));
    const fats = (Math.round((nutritionaValues.FAT.quantity) * (amount / 100)));

    const macronutrients = {
      calories: currentCal + calories,
      carbs: currentCarbs + carbs,
      protein: currentProtein + protein,
      fats: currentFats + fats
    }
    setMacros(macronutrients);
    actions.logSnacks(macronutrients)
    console.log(macronutrients);
  }


  function handleLog(e) {
    e.preventDefault();
    console.log(food);
    fetchMacros(food);
  }


  return (
    <>
      <div className='container-fluid'>
        <div className="col-8 col-md-10 col-sm-12 m-auto">
          <form onSubmit={handleLog}>
            <div className="form-group">
              <label for="exampleInputEmail1">Log Food</label>
              <input type="text" className="form-control" id="food" aria-describedby="foodHelp" placeholder="Log food" onChange={(e) => { setFood(e.target.value) }} />
            </div>
            <div className="form-group">
              <label for="quantity">Quantity</label>
              <input type="number" className="form-control" id="quantity" placeholder="Quantity" onChange={(e) => { setAmount(parseInt(e.target.value)) }} />
            </div>
            <button type="submit" className="btn btn-primary">Log food</button>
          </form>
          <div id='macroCount'>
            {macros.calories != 0 ?
              <ul>
                <li>{macros.calories} kcal</li>
                <li>{macros.carbs} g carbs</li>
                <li>{macros.protein} g protein</li>
                <li>{macros.fats} g fats</li>
              </ul>
              :
              <Loading />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Snacks