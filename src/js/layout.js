import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/home";
import Breakfast from "./views/Breakfast.jsx";
import Lunch from "./views/Lunch.jsx";
import Dinner from "./views/Dinner.jsx";
import Snacks from "./views/Snacks.jsx";
import Settings from "./views/Settings.jsx";
import Dashboard from "./views/Dashboard.jsx";
import Banner from "./component/Banner.jsx";
import Footer from "./component/Footer.jsx";
import injectContext from "./store/appContext";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Banner />
				<div className="wrapper">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/breakfast" element={<Breakfast />} />
						<Route path="/lunch" element={<Lunch />} />
						<Route path="/dinner" element={<Dinner />} />
						<Route path="/snacks" element={<Snacks />} />
						<Route path="/settings" element={<Settings />} />
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
