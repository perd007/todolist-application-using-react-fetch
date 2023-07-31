import React from "react";
import List from "./List";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container card text-bg-light " >
			<h1 className="text-center  card-body fw-bolder">My Todo List React</h1>
			<List/>
			<p className="text-center" >
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
