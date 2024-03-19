// Preview.js

import React, { useRef } from 'react';
import { AiFillStar } from 'react-icons/ai';
import "./Preview.css";
import "../Navigation/Nav.css";

function Preview({ selectedCourse, onRateCourse }) {
    
  return (
    <div>
      <div className="container">
        <h1>Course Details</h1>
        {selectedCourse && ( 
          <div className="product">
            <img src={selectedCourse.img} alt="Course Image" /> 
            <div className="details">
              <h2>{selectedCourse.title}</h2> 
              <p className="alignment">{selectedCourse.Discription}</p> 
              <p>
                            <AiFillStar className="rating-star" />
                            <AiFillStar className="rating-star" />
                            <AiFillStar className="rating-star" />
                            <AiFillStar className="rating-star" />
                            <AiFillStar className="rating-star" />
                            (153)
                        </p>

              <span className="right-left">
                <button onClick={onRateCourse} className="Submit-button">Rate Course</button> 
                <a href="#" className="enroll-button" style={{ marginLeft: 'auto' }}>Enroll</a>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Preview;
