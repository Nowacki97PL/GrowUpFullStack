import React from "react";

import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ShopScreen from "./screens/ShopScreen";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import TrainerListScreen from "./screens/TrainerListScreen";

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
						<Route path="/shipping" element={<ShippingScreen />}></Route>
						<Route path="/payment" element={<PaymentScreen />}></Route>
						<Route path="/place-order" element={<PlaceOrderScreen />}></Route>
						<Route path="/shop" element={<ShopScreen />}></Route>
						<Route path="/trainer" element={<TrainerListScreen />}></Route>
						<Route path="/book-session" element={< />}></Route>
						<Route path="/product/:id" element={<ProductScreen />}></Route>
						<Route path="/cart/:id?" element={<CartScreen />}></Route>
						<Route path="/order/:id" element={<OrderScreen />}></Route>
						<Route path="/admin/user-list" element={<UserListScreen/>}></Route>
						<Route
							path="/admin/user/:userId/edit"
							element={<UserEditScreen/>}
						></Route>
						<Route
							path="/admin/product-list"
							element={<ProductListScreen/>}
						></Route>
						<Route
							path="/admin/product/:id/edit"
							element={<ProductEditScreen/>}
						></Route>
						<Route
							path="/admin/order-list"
							element={<OrderListScreen/>}
						></Route>
					</Routes>
				</Container>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
