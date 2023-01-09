import "./Home.css";

const brands = [
  {
    id: "1",
    imgUrl: "assets/levis.png",
  },
  {
    id: "2",
    imgUrl: "assets/gucci.png",
  },
  {
    id: "3",
    imgUrl: "assets/h&m.png",
  },
  {
    id: "4",
    imgUrl: "assets/prada.png",
  },
  {
    id: "5",
    imgUrl: "assets/zara.png",
  },
];

const Brands = () => {
  return (
    <div className="brands">
      <ul className="brands-list">
        {brands.map((item) => {
          return (
            <li key={item.id}>
              <img src={`${item.imgUrl}`} alt="" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Brands;
