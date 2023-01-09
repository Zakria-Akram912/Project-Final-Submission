import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../UI/Banner";
import Brands from "./Brands";
import NewProducts from "./NewProducts";

const Home = () => {
  return (
    <>
      <Layout>
        <Banner
          bannerHeading="We Provide High Quality Clothing!"
          bannerImage="assets/banner.jpg"
        />
        <Brands />
        <NewProducts heading={"Feature Products"} />
      </Layout>
    </>
  );
};

export default Home;
