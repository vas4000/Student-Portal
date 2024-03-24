// File: src/components/Card.js
import React from 'react';

const Card = ({ img, title, star, reviews, prevPrice, newPrice, onClick }) => {
    return (
        <div className="card" onClick={() => onClick(title)}>
            <img src={img} alt={title} className="card-img" />
            <div className="card-details">
                <h3 className="card-title">{title}</h3>
                {/* <section className="card-reviews">
                    {star} {star} {star} {star}
                    <span className="total-reviews">{reviews}</span>
                </section> */}
                {/* <section className="card-price">
                    <div className="price">
                        <del>{prevPrice}</del> {newPrice}
                    </div>
                </section> */}
            </div>
        </div>
    );
};

export default Card;
