import React from 'react'

const LoggedFood = ({ loggedFood }) => {
    return (
        <>
            {loggedFood.map((food) => {
                return (
                    < div className='row d-flex justify-content-center loggedFood' >
                        <div className='col-sm-4 text-center'>
                            {food.food}
                        </div>
                        <div className='col-sm-4 text-center'>
                            {food.qty}
                        </div>
                    </div >
                )
            })
            }
        </>
    )
}

export default LoggedFood