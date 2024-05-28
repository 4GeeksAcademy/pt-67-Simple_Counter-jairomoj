import React, { useState, useEffect } from "react";

//include images into your bundle
import Digit from "./digit";
import Watch from "./watch";

//create your first component
const Home = () => {
	const [seconds, setSeconds] = useState(0);
	let one = Math.floor(seconds / 1);
	let two = Math.floor(seconds / 10);
	let three = Math.floor(seconds / 100);
	let four = Math.floor(seconds / 1000);
	let five = Math.floor(seconds / 10000);
	let six = Math.floor(seconds / 100000);

	useEffect(() => {
		const timer = setInterval(() => {
			setSeconds(seconds + 1);
		}, 1000);
		// clearing interval
		return () => clearInterval(timer);
	});

	return (
		<div className="container-fluid d-flex justify-content-center">
			<Watch />
			<Digit seconds={six} />
			<Digit seconds={five} />
			<Digit seconds={four} />
			<Digit seconds={three} />
			<Digit seconds={two} />
			<Digit seconds={one} />
		</div>
	);
};

export default Home;
