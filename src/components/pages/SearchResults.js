import { useEffect, useState } from "react";
import ProductItem from "../products/ProductItem";

function SearchResults(props) {
	const [products, setProducts] = useState([]);

	function renderProducts() {
		const attributes = products.filter(
			(product) => product.attributes?.length > 0
		);

		return (
			<>
				<div className="filter-container">
					<div>
						{attributes.map((attribute) => {
							return (
								<>
									{attribute} <input type="checkbox" />
								</>
							);
						})}
					</div>
				</div>

				<div className="products-results-wrapper">
					{products.map((product) => {
						return <ProductItem key={product._id} {...product} />;
					})}
				</div>
			</>
		);
	}

	useEffect(() => {
		fetch(`http://localhost:4000/api/v1/products/?search=${props.searchTerm}`)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				props.setSearchTerm("");
			});
	}, [props.searchTerm]);

	return (
		<div className="products-container">
			<h1>Products</h1>

			{renderProducts()}
		</div>
	);
}

export default SearchResults;
