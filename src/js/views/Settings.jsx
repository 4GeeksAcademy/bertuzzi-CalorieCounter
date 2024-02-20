import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';

const { store, actions } = useContext(Context);
const [calories, setCalories] = useState(0);
const [carbs, setCarbs] = useState(0);
const [protein, setProtein] = useState(0);
const [fats, setFats] = useState(0);

function handlePreferences(e) {
  e.preventDefault();
  const targetCarbs = Math.round((calories * (carbs / 100)) / 4);
  const targetProtein = Math.round((calories * (protein / 100)) / 4);
  const targetFats = Math.round((calories * (fats / 100)) / 4);

  const targetMacros = {
    calories: calories,
    carbs: targetCarbs,
    protein: targetProtein,
    fats: targetFats
  };
  actions.setPreferences(targetMacros);
}



const Settings = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-8 col-md-10 col-sm-12 m-auto">
          <form onSubmit={handlePreferences}>
            <div className="form-group">
              <label htmlFor="calories">Target Calories</label>
              <div className="input-group-prepend">
                <div className="input-group-text">%</div>
              </div>
              <input type="number" className="form-control" id="calories" placeholder="Set target calories" maxlength="2" step="5" onChange={(e) => { parseInt(setCalories(e.target.value)) }} />
            </div>
            <div className="form-group">
              <label htmlFor="carbs">Target Carbs</label>
              <div className="input-group-prepend">
                <div className="input-group-text">%</div>
              </div>
              <input type="number" className="form-control" id="carbs" placeholder="Set target carbs %" maxlength="2" step="5" onChange={(e) => { parseInt(setCarbs(e.target.value)) }} />
            </div>
            <div className="form-group">
              <label htmlFor="protein">Target Protein</label>
              <div className="input-group-prepend">
                <div className="input-group-text">%</div>
              </div>
              <input type="number" className="form-control" id="protein" placeholder="Set target protein %" maxlength="2" step="5" onChange={(e) => { parseInt(setProtein(e.target.value)) }} />
            </div>
            <div className="form-group">
              <label htmlFor="fats">Target Fats</label>
              <div className="input-group-prepend">
                <div className="input-group-text">%</div>
              </div>
              <input type="number" className="form-control" id="fats" placeholder="Set target fats %" maxlength="2" step="5" onChange={(e) => { parseInt(setFats(e.target.value)) }} />
            </div>
            <button type="submit" className="btn btn-primary">Log food</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Settings