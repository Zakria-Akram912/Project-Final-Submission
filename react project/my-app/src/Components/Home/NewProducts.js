import Product from "../UI/Product";

const products = [
  {
    id: "1",
    imgUrl: "assets/pro1.jpg",
    title: "1980s Men Fit Jeans",
    price: "188.00",
  },
  {
    id: "2",
    imgUrl: "assets/pro2.jpg",
    title: "501 Men Fit Jeans",
    price: "79.50",
  },
  {
    id: "3",
    imgUrl: "assets/pro3.jpg",
    title: "1970s High Flare Jeans",
    price: "108.00",
  },
  {
    id: "4",
    imgUrl: "assets/pro4.jpg",
    title: "Wedgie Straight",
    price: "98.00",
  },
];
const NewProducts = (props) => {
  return (
    <div className="home-newproducts">
      <h2>{props.heading}</h2>
      <div className="home-products-flex">
        {products.map((item) => {
          return (
            <div className="home-product-width" key={item.id}>
              <Product
                productImage={item.imgUrl}
                productName={item.title}
                productPrice={item.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewProducts;
