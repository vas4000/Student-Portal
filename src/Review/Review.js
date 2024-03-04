// Review.js
import React from 'react';
import "./Review.css";
function Review() {
    return (
        <div className="container">
            <form method="post" action="#action-url">
                <h1>Course Review</h1>
                <label>1. Helpfulness/Availability</label><br />
                <span className="star-rating">
                    <input type="radio" name="rating1" value="1" /><i></i>
                    <input type="radio" name="rating1" value="2" /><i></i>
                    <input type="radio" name="rating1" value="3" /><i></i>
                    <input type="radio" name="rating1" value="4" /><i></i>
                    <input type="radio" name="rating1" value="5" /><i></i>
                </span>
                             
                <div className="clear"></div>
                <hr className="survey-hr" />
                <label>2. Clarity of Expectations or Directions</label><br />
                <span className="star-rating">
                    <input type="radio" name="rating2" value="1" /><i></i>
                    <input type="radio" name="rating2" value="2" /><i></i>
                    <input type="radio" name="rating2" value="3" /><i></i>
                    <input type="radio" name="rating2" value="4" /><i></i>
                    <input type="radio" name="rating2" value="5" /><i></i>
                </span>

                <div className="clear"></div>
                <hr className="survey-hr" />
                <label>3. Encouraging of Participation/Discussion</label><br />
                <span className="star-rating">
                    <input type="radio" name="rating3" value="1" /><i></i>
                    <input type="radio" name="rating3" value="2" /><i></i>
                    <input type="radio" name="rating3" value="3" /><i></i>
                    <input type="radio" name="rating3" value="4" /><i></i>
                    <input type="radio" name="rating3" value="5" /><i></i>
                </span>

                <div className="clear"></div>
                <hr className="survey-hr" />
                <label>4. Overall Teaching Effectiveness</label><br />
                <span className="star-rating">
                    <input type="radio" name="rating4" value="1" /><i></i>
                    <input type="radio" name="rating4" value="2" /><i></i>
                    <input type="radio" name="rating4" value="3" /><i></i>
                    <input type="radio" name="rating4" value="4" /><i></i>
                    <input type="radio" name="rating4" value="5" /><i></i>
                </span>

                <div className="clear"></div>
                <hr className="survey-hr" />
                <label>5. How satisfied were you with your effort in this course (or section)?</label><br />
                <span className="star-rating">
                    <input type="radio" name="rating5" value="1" /><i></i>
                    <input type="radio" name="rating5" value="2" /><i></i>
                    <input type="radio" name="rating5" value="3" /><i></i>
                    <input type="radio" name="rating5" value="4" /><i></i>
                    <input type="radio" name="rating5" value="5" /><i></i>
                </span>
                <br />
                <div className="clear"></div>
                <hr className="survey-hr" />
                <label htmlFor="commentText">6. Please identify area(s) where you think the course (or section) could be improved.</label><br /><br />
                <textarea cols="75" name="commentText" rows="5" style={{ width: "100%" }}></textarea><br />

                <div className="clear"></div>
                <hr className="survey-hr" />
                <label htmlFor="commentText">7. Feedback for other students: What advice would you give to another student who is considering taking this course (or section)?</label><br /><br />
                <textarea cols="75" name="commentText" rows="5" style={{ width: "100%" }}></textarea><br />

                <a href="/" className="button">Submit</a>
            </form>
        </div>
    );
}

export default Review;