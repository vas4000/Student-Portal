//File: src/components/Sidebar/Sidebar.js
//this is seperate Sidebar section component for collabrate of price and catogory
import Category from "./Category/Category";
//import Price from "./Price/Price";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
              <div className="logo-container">
                  <h1> 🛒</h1>
              </div>
        <Category handleChange={handleChange} />
        {/* <Price handleChange={handleChange} /> */}
      </section>
    </>
  );
};

export default Sidebar;
