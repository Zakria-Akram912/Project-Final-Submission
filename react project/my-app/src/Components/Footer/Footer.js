import { Link } from "react-router-dom";
import "./Footer.css";

const data = [
  {
    id: "1",
    heading: "Company",
    links: [
      "About Us",
      "Our Values",
      "Careers",
      "Affiliate Program",
      "Submit Your Idea",
    ],
  },

  {
    id: "2",
    heading: "Store",
    links: [
      "Find a Store",
      "Store Services",
      "Shop by Appointment",
      "SecondHand Products",
      "Bulk Orders",
    ],
  },

  {
    id: "3",
    heading: "Our Brands",
    links: ["Levis", "Gucci", "Zara", "H&M", "Prada"],
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-flex">
        <div className="footer-logo">
          <img src="assets/logo.png" alt="" />
        </div>
        {data.map((item) => {
          return (
            <div className="footer-width">
              <h3>{item.heading}</h3>
              <ul className="footer-ul">
                {item.links.map((link) => {
                  return (
                    <li>
                      <Link to={`${link}`}>{link}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="copyright-footer">
        <p>© Copyright belongs to TheWarehouse</p>
      </div>
    </div>
  );
};

export default Footer;
