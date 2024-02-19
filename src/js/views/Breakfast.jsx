import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';

const Breakfast = () => {

    const [food, setFood] = useState({});
    const [amount, setAmount] = useState();
    const [macros, setMacros] = useState({});
    const { store, actions } = useContext(Context);

    const fetchMacros = async () => {
        const url = `https://api.edamam.com/api/nutrition-data?app_id=c6d34f6b&app_key=ad4f63207634378a114a5d09a9afb26a&nutrition-type=cooking&ingr=100%20g%20${food}`
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
        const food = data.hints
        console.log(data);

        const nutrients = food.food.nutrients;
        const calories = (Math.round(nutrients.ENERC_KCAL) * amount) + ' Kcal';
        const carbs = (Math.round(nutrients.CHOCDF) * amount) + ' g carbs';
        const protein = (Math.round(nutrients.PROCNT) * amount) + ' g protein';
        const fats = (Math.round(nutrients.FAT) * amount) + ' g fats';
        const macronutrients = {
            calories: calories,
            carbs: carbs,
            protein: protein,
            fats: fats
        }
        setMacros(macronutrients);
        actions.logBreakfast(macronutrients)
        console.log(macronutrients);
    }


    function handleLog(e) {
        e.preventDefault();
        console.log(food);
        fetchMacros();
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
                        hey
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breakfast