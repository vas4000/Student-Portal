import { useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import Preview from './Preview/Preview';
import Review from './Review/Review'; // Import the Review component

import "./index.css";

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [query, setQuery] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null); // Track the selected product
    const [showReview, setShowReview] = useState(false); // Track whether to show review page

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleClick = (product) => {
        setSelectedProduct(product);
    };

    function filteredData(products, selected, query) {
        let filteredProducts = products;

        if (query) {
            filteredProducts = products.filter(
                (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
            );
        }

        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ category, color, Age, newPrice, title }) =>
                    category === selected ||
                    color === selected ||
                    Age === selected ||
                    newPrice === selected ||
                    title === selected
            );
        }

        return filteredProducts.map(
            ({ img, title, star, reviews, prevPrice, newPrice }) => (
                <Card
                    key={title}
                    img={img}
                    title={title}
                    star={star}
                    reviews={reviews}
                    prevPrice={prevPrice}
                    newPrice={newPrice}
                    onClick={() => handleClick(title)}
                />
            )
        );
    }

    const result = filteredData(products, selectedCategory, query);

    return (
        <Router>
            <div>
                {!selectedProduct && !showReview && <Sidebar handleChange={handleChange} />}
                <Navigation query={query} handleInputChange={handleInputChange} />
                {selectedProduct && <Preview onRateCourse={() => setShowReview(true)} />}
                {!selectedProduct && !showReview && <Products result={result} />}
                {showReview && <Review />}
            </div>
        </Router>
    );
}

export default App;
