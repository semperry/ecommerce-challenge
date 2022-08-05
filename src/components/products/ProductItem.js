function ProductItem(props) {
	return (
		<div className="product-container">
			<div className="product-image-wrapper">
				<img src={props.image} alt="product image" />
			</div>

			<div className="product-name-wrapper">
				<h1>{props.name}</h1>
			</div>

			<div className="product-cost-wrapper">${props.cost?.toFixed(2)}</div>
		</div>
	);
}

export default ProductItem;
