import React from 'react';
import { Link } from "react-router-dom";

const Summary = ({ meal, macros }) => {
    return (
        <div className='container my-5 summary text-center'>
            <h5 style={{ textTransform: 'capitalize' }}>{meal}</h5>
            <div className='row my-3 d-flex justify-content-between'>
                <div className='col-sm-6 d-flex justify-content-center'>
                    <p className='mx-2'>{macros.calories ? macros.calories : 0} Kcal</p>
                    <p className='mx-2'>{macros.carbs ? macros.carbs : 0} g C</p>
                    <p className='mx-2'>{macros.protein ? macros.protein : 0} g P</p>
                    <p className='mx-2'>{macros.fats ? macros.fats : 0} g F</p>
                </div>
                <div className='col-sm-6 text-center'>
                    <Link to={'/' + meal}>
                        <div>
                            Log Food
                            <span className='mx-3'>
                                <i className="fa-solid fa-plus"></i>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Summary