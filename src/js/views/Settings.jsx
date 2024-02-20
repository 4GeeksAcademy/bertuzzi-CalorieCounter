import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';

const Settings = () => {

  const { store, actions } = useContext(Context);
  const [calories, setCalories] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fats, setFats] = useState(0);

  function handlePreferences(e) {
    e.preventDefault();
    const targetCarbs = Math.round((calories * (carbs / 100)) / 4);
    const targetProtein = Math.round((calories * (protein / 100)) / 4);
    const targetFats = Math.round((calories * (fats / 100)) / 9);

    const targetMacros = {
      calories: calories,
      carbs: targetCarbs,
      protein: targetProtein,
      fats: targetFats
    };
    actions.setPreferences(targetMacros);
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-8 col-md-10 col-sm-12 m-auto">
          <form onSubmit={handlePreferences}>
            <div className="input-group" style={{ width: '30vw' }}>
              <label htmlFor="calories">Target Calories</label>
              <input type="number" className="form-control ml-5" id="calories" placeholder="Set target calories" maxLength="2" step="5" style={{ marginLeft: '30px', width: '50%' }} onChange={(e) => { parseInt(setCalories(e.target.value)) }} />
            </div>
            <div className="input-group my-3" style={{ width: '30vw' }}>
              <label htmlFor="carbs">Target Carbs</label>
              <input type="number" className="form-control ml-5" id="carbs" placeholder="Set target carbs %" maxLength="2" step="5" style={{ marginLeft: '30px', width: '50%' }} onChange={(e) => { parseInt(setCarbs(e.target.value)) }} />
              <div className="input-group-prepend">
                <span className="input-group-text">%</span>
              </div>
            </div>
            <div className="input-group my-3" style={{ width: '30vw' }}>
              <label htmlFor="protein">Target Protein</label>
              <input type="number" className="form-control ml-5" id="protein" placeholder="Set target protein %" maxLength="2" step="5" style={{ marginLeft: '30px', width: '50%' }} onChange={(e) => { parseInt(setProtein(e.target.value)) }} />
              <div className="input-group-prepend">
                <span className="input-group-text">%</span>
              </div>
            </div>
            <div className="input-group my-3" style={{ width: '30vw' }}>
              <label htmlFor="fats">Target Fats</label>
              <input type="number" className="form-control" id="fats" placeholder="Set target fats %" maxLength="2" step="5" style={{ marginLeft: '30px', width: '50%' }} onChange={(e) => { parseInt(setFats(e.target.value)) }} />
              <div className="input-group-prepend">
                <span className="input-group-text">%</span>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Log food</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Settings