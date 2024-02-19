import React from "react";
import Breakfast from "./Breakfast.jsx";
import Banner from "../component/Banner.jsx";
import Footer from '../component/Footer.jsx';

export const Home = () => (
	<>
	<div className="container-fluid">
		<div className="row">
			<div className="col-8 col-md-10 col-sm-12 m-auto">
				<Banner />
				<Breakfast />
				{/* <Lunch /> */}
				{/* <Dinner /> */}
				{/* <Snacks /> */}
				<Footer />
			</div>
		</div>
	</div>
	</>
);
