//File: src/components/Recommended/Recommended.js
//this is seperate course recomendation component

import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Course Categories</h2>
        <div className="recommended-flex">
          
                  <Button onClickHandler={handleClick} value="Term 1" title="Term 1" />   
                  <Button onClickHandler={handleClick} value="Term 2" title="Term 2" />
                  <Button onClickHandler={handleClick} value="Term 3" title="Term 3" />
        </div>    
      </div>
    </>
  );
};

export default Recommended;
