//File: src/Components/Button.js
const Button = ({ onClickHandler, value, title }) => {
    return (
        <button onClick={onClickHandler} value={value} className="btns">
            
            {title}
        </button>
    );
};

export default Button;
