import React from "react";

import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ShopScreen from "./screens/ShopScreen";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'

function App() {
	return (
		<Router>
			<Header />
			<main className="py-5">
				<Container>
					<Routes>
						<Route path="/" element={<HomeScreen />}></Route>
						<Route path="/login" element={<LoginScreen />}></Route>
						<Route path="/register" element={<RegisterScreen />}></Route>
						<Route path="/profile" element={<ProfileScreen />}></Route>
						<Route path="/shipping" element={<}
						<Route path="/shop" element={<ShopScreen />}></Route>
						<Route path="/product/:id" element={<ProductScreen />}></Route>
						<Route path="/cart/:id?" element={<CartScreen />}></Route>
					</Routes>
				</Container>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
