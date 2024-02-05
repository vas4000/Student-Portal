//File: src/Components/Button.js
const Button = ({ onClickHandler, value, title }) => {
    return (
        // Button element with an onClick event handler which calls the provided function
        <button onClick={onClickHandler} value={value} className="btns">
            
            {title}
        </button>
    );
};

export default Button;
