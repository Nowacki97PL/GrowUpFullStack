import React from "react";

import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ShopScreen from "./screens/ShopScreen";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'

function App() {
	return (
		<Router>
			<Header />
			<main className="py-5">
				<Container>
					<Routes>
						<Route path="/" element={<HomeScreen />}></Route>
						<Route path="/shop" element={<ShopScreen />}></Route>
						<Route path="/product/:id" element={<ProductScreen />}></Route>
						<Route path="/product/:id" element={<ProductScreen />}></Route>
					</Routes>
				</Container>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
