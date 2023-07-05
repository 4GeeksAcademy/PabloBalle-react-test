import React from "react";
import Cards from "./Cards";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="container text-center">
			<Cards/>
		</div>
	);
};

export default Home;
