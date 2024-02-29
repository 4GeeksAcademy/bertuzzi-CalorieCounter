import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import Summary from "../component/Summary.jsx";


export const Home = () => {
	const { store, actions } = useContext(Context)
	const breakfast = store.breakfast;
	const lunch = store.lunch;
	const dinner = store.dinner;
	const snacks = store.snacks;

	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-8 col-md-10 col-sm-12 m-auto">
						<Summary meal='breakfast' macros={breakfast} />
						<Summary meal='lunch' macros={lunch} />
						<Summary meal='dinner' macros={dinner} />
						<Summary meal='snacks' macros={snacks} />
					</div>
				</div>
			</div>
		</>
	)
}
