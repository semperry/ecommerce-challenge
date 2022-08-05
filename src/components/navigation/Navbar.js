import { NavLink } from "react-router-dom";

function Navbar({ searchTerm, setSearchTerm, history }) {
	function handleSubmit(e) {
		e.preventDefault();

		if (searchTerm) {
			history.push("/search");
		} else {
			window.alert("No search term entered.");
		}
	}

	return (
		<div className="nav-container">
			<div className="nav-left-column">
				<form onSubmit={handleSubmit}>
					<input
						type="search"
						onChange={(e) => setSearchTerm(e.target.value)}
						value={searchTerm}
					/>

					<input type="submit" />
				</form>
			</div>

			<div className="nav-right-column">
				<div className="nav-item">
					<NavLink exact to="/">
						Home
					</NavLink>
				</div>

				<div className="nav-item">
					<NavLink to="/product">Store</NavLink>
				</div>

				<div className="nav-item">
					<NavLink to="/cart">Cart</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
