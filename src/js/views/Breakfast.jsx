import React, { useState, useEffect, useContext } from 'react';
import Card from "react-bootstrap/Card";

const Breakfast = () => {

    const [food, setFood] = useState();
    const [amount, setAmount] = useState();
    const [macros, setMacros] = useEffect({})

    const fetchMacros = async () => {
        const url = ""; // `https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.REACT_API_ID}&app_key=${process.env.REACT_API_KEY}&ingr=${food}&nutrition-type=cooking&calories=100-500&category=generic-meals`
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
        console.log(food);

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
        console.Console(macronutrients);


        // here we need to multiply macros x quantity
    }


    function handleLog(e) {
        e.preventDefault();
        console.Console(food);
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
                </div>
            </div>
        </>
    )
}

export default Breakfast