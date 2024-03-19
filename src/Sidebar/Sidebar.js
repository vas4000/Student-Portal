//File: src/components/Sidebar/Sidebar.js
//this is seperate Sidebar section component for collabrate of price and catogory
import Category from "./Category/Category";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>

      <section className="sidebar">
        <div className="logo-container">
          <a href="/"><img style={{ width: "40px", height: "45px" }} src="/logo.png" alt="Logo" /></a>
          <h3>University of Windsor</h3>
          <br />
        </div>
        <Category handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
