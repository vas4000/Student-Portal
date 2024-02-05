//File: src/App.js
//This is a root/entry file of the application

import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    
    const [query, setQuery] = useState("");            //Input Filter

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const filteredItems = products.filter(
        (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    
    const handleChange = (event) => {                  //Radio Filtering
        setSelectedCategory(event.target.value);
    };

    
    const handleClick = (event) => {                   //Button Filtering
        setSelectedCategory(event.target.value);
    };

    function filteredData(products, selected, query) {
        let filteredProducts = products;

        
        if (query) {                                    // Filtering Input Items
            filteredProducts = filteredItems;
        }

        
        if (selected) {                                     // to Apply filter which is selected
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
                    key={Math.random()}
                    img={img}
                    title={title}
                    star={star}
                    reviews={reviews}
                    prevPrice={prevPrice}
                    newPrice={newPrice}
                />
            )
        );
    }

    const result = filteredData(products, selectedCategory, query);

    return (
        <>
            <Sidebar handleChange={handleChange} />
            <Navigation query={query} handleInputChange={handleInputChange} />
            <Recommended handleClick={handleClick} />
            <Products result={result} />
        </>
    );
}

export default App;
