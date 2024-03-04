import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import Loading from '../component/Spinner.jsx';
import LoggedFood from '../component/LoggedFood.jsx';

const Lunch = () => {

  const [food, setFood] = useState({});
  const [amount, setAmount] = useState();
  const [loggedItems, setLoggedItems] = useState([])
  const { store, actions } = useContext(Context);

  const macros = store.lunch;
  const loggedLunch = store.loggedLunch;

  function handleLog(e) {
    e.preventDefault();
    console.log(food);
    let newLog = { food: food, qty: amount };
    setLoggedItems(newLog);
    actions.fetchMacros(food, amount, newLog, 'lunch');
    document.getElementById('food').value = '';
    document.getElementById('quantity').value = '';
  }

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className="col-6 col-md-8 col-sm-10 m-auto">
            <form onSubmit={handleLog}>
              <div className="form-group">
                <label htmlFor="food">Log Food</label>
                <input type="text" className="form-control" id="food" placeholder="search food" onChange={(e) => { setFood(e.target.value) }} required />
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <input type="number" className="form-control" id="quantity" placeholder="grams" onChange={(e) => { setAmount(parseInt(e.target.value)) }} required min='0' />
              </div>
              <div className='d-flex justify-content-center'>
                <button type="submit" className="btn btn-primary">Log food</button>
              </div>
            </form>
            <div id='macroCount'>
              {macros.calories != 0 ?
                <table className="table mb-5" style={{ width: '60%', margin: 'auto' }}>
                  <thead>
                    <tr>
                      <th scope="col">Amount</th>
                      <th scope="col">Macronutrient</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{macros.calories} kcal</td>
                      <td>Calories</td>
                    </tr>
                    <tr>
                      <td>{macros.carbs} g</td>
                      <td>Carbohydrates</td>
                    </tr>
                    <tr>
                      <td>{macros.protein} g</td>
                      <td>Protein</td>
                    </tr>
                    <tr>
                      <td>{macros.fats} g</td>
                      <td>Fats</td>
                    </tr>
                  </tbody>
                </table>
                :
                <Loading />
              }
            </div>
            <div className='loggedFood'>
              <LoggedFood loggedFood={loggedLunch} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Lunch