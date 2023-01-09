import Card from "./Card";
import "./product.css";

const Product = (props) => {
  return (
    // <Card>
    <div className="product">
      <div className="product-image">
        <img src={`${props.productImage}`} alt="" />
      </div>
      <div className="product-info">
        <h6>{props.productName}</h6>
        <p>${props.productPrice}</p>
      </div>
      <div className="productbtn">
        <button>Add To Cart</button>
        <button>Details</button>
      </div>
    </div>
    // </Card>
  );
};

export default Product;
