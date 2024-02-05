//File: src/components/Sidebar/Category/Category.js
//this is seperate Category section component on sidebar

import Input from "../../components/Input";
import "./Category.css";


function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Cources</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All Cources
        </label>
        {/* <Input
          handleChange={handleChange}
          value="6 to 9"
          title="My Cources"
          name="test"
        /> */}
        <Input
          handleChange={handleChange}
          value="10 to 17"
          title="My Cources"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
