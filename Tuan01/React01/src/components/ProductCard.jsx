import "./ProductCard.css";

function ProductCard() {
  return (
    <div className="product-card">
      <img
        src="/src/assets/meo.jpg"
        alt="Product"
        className="product-image"
      />

      <h3 className="product-name">Áo thun nam</h3>
      <p className="product-price">199.000đ</p>

      <button className="add-btn">Add to cart</button>
    </div>
  );
}

export default ProductCard;
