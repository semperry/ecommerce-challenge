import { useEffect, useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./navigation/Navbar";
import HomePage from "./pages/HomePage";
import SearchResults from "./pages/SearchResults";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<div className="app">
			<Router>
				<Route
					render={(props) => (
						<Navbar
							{...props}
							setSearchTerm={setSearchTerm}
							searchTerm={searchTerm}
						/>
					)}
				/>

				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route
						exact
						path="/product"
						render={(props) => (
							<SearchResults {...props} searchTerm={searchTerm} />
						)}
					/>
					<Route path="/product/:id" component={ProductPage} />
					<Route path="/cart" component={CartPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
