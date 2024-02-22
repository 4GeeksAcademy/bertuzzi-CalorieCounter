import React from "react";
import Banner from "../component/Banner.jsx";
import Footer from '../component/Footer.jsx';
import { Link } from "react-router-dom";

export const Home = () => (
	<>
		<div className="container-fluid">
			<div className="row">
				<div className="col-8 col-md-10 col-sm-12 m-auto">
					<div className="meal">
						<Link to='/breakfast'>Breakfast</Link>
					</div>
					<div className="meal">
						<Link to='/lunch'>Lunch</Link>
					</div>
					<div className="meal">
						<Link to='/dinner'>Dinner</Link>
					</div>
					<div className="meal">
						<Link to='/snacks'>Snacks</Link>
					</div>
					<div className="settings">
						<Link to='/settings'>Settings</Link>
					</div>
					<div className="dashboard">
						<Link to='/dashboard'>Dashboard</Link>
					</div>
				</div>
			</div>
		</div>
	</>
);
