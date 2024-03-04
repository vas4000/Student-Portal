import { AiFillStar } from "react-icons/ai";
import React from 'react';

function Preview({ onRateCourse }) {
    return (
        <div>
            <div className="container">
                <h1>Course Details</h1>
                <div className="product">
                    <img src="/Prod-img1.jpg" alt="Course Image" />
                    <div className="details">
                        <h2>Advance Software Engineer</h2>
                        <p className="alignment">The Advanced Software Engineering course is designed to provide comprehensive knowledge and skills to software engineers who are looking to advance their expertise in the field. Building upon fundamental software engineering principles, this course delves into advanced topics, methodologies, and technologies essential for tackling complex software development challenges in today's rapidly evolving technological landscape.</p>
                        <p>
                        <AiFillStar className="rating-star" />
                        <AiFillStar className="rating-star" />
                        <AiFillStar className="rating-star" />
                        <AiFillStar className="rating-star" />
                        <AiFillStar className="rating-star" />
                        (153)</p>
                        <button onClick={onRateCourse} className="button">Rate Course</button>
                        <a href="#" className="button enroll-button">Enroll</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Preview;

