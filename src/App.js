import { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Card from "./components/Card";
import products from "./db/data";
import Sidebar from "./Sidebar/Sidebar";
import Preview from './Preview/Preview';
import Review from './Review/Review';

import "./index.css";

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [query, setQuery] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showReview, setShowReview] = useState(false);

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
            ({ img, title, star, reviews, prevPrice, newPrice, Discription }) => (
                <Card
                    key={title}
                    img={img}
                    title={title}
                    star={star}
                    reviews={reviews}
                    prevPrice={prevPrice}
                    newPrice={newPrice}
                    onClick={() => handleClick({ img, title, Discription })}
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
                {selectedProduct && <Preview selectedCourse={selectedProduct} onRateCourse={() => setShowReview(true)} />}
                {!selectedProduct && !showReview && <Products result={result} />}
                {showReview && <Review />}
            </div>
        </Router>
    );
}

export default App;
