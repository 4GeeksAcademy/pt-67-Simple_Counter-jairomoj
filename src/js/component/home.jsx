import React from "react";

//include images into your bundle
import Digit from "./digit";
import Watch from "./watch";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid d-flex justify-content-center">
			<Watch />
			<Digit seconds={100000000}/>
			<Digit seconds={10000000}/>
			<Digit seconds={1000000}/>
			<Digit seconds={100000}/>
			<Digit seconds={10000}/>
			<Digit seconds={1000}/>
		</div>
	);
};

export default Home;
