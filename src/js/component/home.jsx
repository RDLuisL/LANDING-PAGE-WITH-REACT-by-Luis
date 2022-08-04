import React from "react";

//include images into your bundle
import Card from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Card url="https://m.media-amazon.com/images/I/818dTT0ygYL._AC_SX466_.jpg"/>
			<Card url = "https://pbs.twimg.com/profile_images/549593697633837057/azg9KYkx_400x400.jpeg"/>
			
			<Card url = "http://img.desmotivaciones.es/201201/logoTigresdeAragua_1.jpg"/>
			<Card url = "https://i0.wp.com/www.noticiasbarquisimeto.com/wp-content/uploads/2021/01/logo-caribes-4.png?fit=236%2C213&ssl=1"/>
		</div>
	);
};

export default Home;
