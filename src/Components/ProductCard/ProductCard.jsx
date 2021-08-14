import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  return (
    <>
      <div className="card-demo" key={product._id}>
        <div className="card-container">
          <img className="product-image" src={product.imageUrl} alt="product" />
          <div className="product-name-with-wishlist-icon">
            <h4>{product.name}</h4>
            <i className="fas fa-heart"></i>
          </div>
          <p className="product-description-text"></p>

          <div className="product-price">
            <p className="current-product-price">₹{product.price}</p>
            {/* <small className="striked-original-price">₹1299</small>
            <small className="amount-saved">Save: ₹700</small> */}
          </div>
          <button className="button primary-btn">ADD TO CART</button>
          <div className="card-badge-offer">
            {product.discount && (
              <div className="badge-type offer">{product.offer}% off</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
