//File: src/components/Products/products.js
//this is seperate products(Courses) display component for code reuse
import "./Product.css";

const Products = ({ result }) => {
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
};

export default Products;
