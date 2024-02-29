import React from 'react';
import { Link } from "react-router-dom";

const Summary = ({ meal, macros }) => {
    return (
        <div className='container my-5 summary'>
            <h5 style={{ textTransform: 'capitalize' }}>{meal}</h5>
            <div className='row my-3 d-flex justify-content-between'>
                <div className='col-sm-6'>
                    {macros.calories ? macros.calories : 0} Kcal
                </div>
                <div className='col-sm-6'>
                    <Link to={'/' + meal}>
                        <div>
                            Log food
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