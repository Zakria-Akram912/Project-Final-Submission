import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import Product from "../UI/Product";
import "./shop.css";

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
  {
    id: "5",
    imgUrl: "assets/pro5.avif",
    title: "501 Original Fit Hoodie",
    price: "89.00",
  },
  {
    id: "6",
    imgUrl: "assets/pro6.avif",
    title: "Type III Sherpa Truker Jacket",
    price: "108.00",
  },
  {
    id: "7",
    imgUrl: "assets/pro7.avif",
    title: "Truker Jacket",
    price: "89.50",
  },
  {
    id: "8",
    imgUrl: "assets/pro8.avif",
    title: "901 Original Fit",
    price: "98.00",
  },
  {
    id: "9",
    imgUrl: "assets/pro9.avif",
    title: "501 Original Beanies",
    price: "47.50",
  },
];

const Shop = () => {
  return (
    <>
      <Layout>
        <div className="shop-main">
          <div className="filter">
            <select name="filter" id="">
              <option value="">Sort By</option>
              <option value="">Price (Low To High)</option>
              <option value="">Price (High to Low)</option>
              <option value="">Alphabetically (A-Z)</option>
              <option value="">Alphabeticallt (Z-A)</option>
            </select>
          </div>
          <div className="shop-main-flex">
            {products.map((item) => {
              return (
                <div className="shop-single-product">
                  <Product
                    productImage={item.imgUrl}
                    productPrice={item.price}
                    productName={item.title}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Shop;
