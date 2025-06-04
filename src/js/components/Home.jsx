import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
            <Navbar />
			<Jumbotron />
			<Card />
			<Footer />
		</div>
	);
};

export default Home;