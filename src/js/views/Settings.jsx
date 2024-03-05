import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router';

const Settings = () => {
  const navigate = useNavigate()
  const { store, actions } = useContext(Context);
  const [calories, setCalories] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fats, setFats] = useState(0);

  function handlePreferences(e) {
    e.preventDefault();
    let inputTarget = parseInt(carbs) + parseInt(protein) + parseInt(fats);
    console.log(calories, carbs, protein, fats, inputTarget)
    if (inputTarget != 100) {
      alert('total macronutrient percentages should amount to 100% ')
    }
    else {
      const targetCarbs = Math.round((calories * (carbs / 100)) / 4);
      const targetProtein = Math.round((calories * (protein / 100)) / 4);
      const targetFats = Math.round((calories * (fats / 100)) / 9);

      const targetMacros = {
        calories: parseInt(calories),
        carbs: targetCarbs,
        protein: targetProtein,
        fats: targetFats
      };
      actions.setPreferences(targetMacros);
    }
    document.getElementById('calories').value = '';
    document.getElementById('carbs').value = '';
    document.getElementById('protein').value = '';
    document.getElementById('fats').value = '';
    navigate('/')
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-8 col-md-10 col-sm-12 m-auto">
          <form onSubmit={handlePreferences} style={{ width: '100%' }}>
            <div className="form-group my-3" style={{ width: '70%' }}>
              <label htmlFor="calories">Target Calories</label>
              <input type="text" className="form-control ml-5" id="calories" placeholder="Set target calories" maxLength="4" style={{ marginLeft: '30px', width: '50%' }} pattern="[0-9]{4}" required onChange={(e) => { parseInt(setCalories(e.target.value)) }} />
            </div>
            <div className="form-group my-3" style={{ width: '70%' }}>
              <label htmlFor="text">Target Carbs</label>
              <input type="text" className="form-control ml-5" id="carbs" placeholder="Set target carbs %" maxLength="2" style={{ marginLeft: '30px', width: '50%' }} pattern="[0-9]{2}" required onChange={(e) => { parseInt(setCarbs(e.target.value)) }} />
            </div>
            <div className="form-group my-3" style={{ width: '70%' }}>
              <label htmlFor="protein">Target Protein</label>
              <input type="text" className="form-control ml-5" id="protein" placeholder="Set target protein %" maxLength="2" style={{ marginLeft: '30px', width: '50%' }} pattern="[0-9]{2}" required onChange={(e) => { parseInt(setProtein(e.target.value)) }} />
            </div>
            <div className="form-group my-3" style={{ width: '70%' }}>
              <label htmlFor="fats">Target Fats</label>
              <input type="text" className="form-control" id="fats" placeholder="Set target fats %" maxLength="2" style={{ marginLeft: '30px', width: '50%' }} pattern="[0-9]{2}" required onChange={(e) => { parseInt(setFats(e.target.value)) }} />
            </div>
            <button type="submit" className="btn btn-primary">Log food</button>
          </form>
        </div>
      </div >
    </div >
  )
}

export default Settings