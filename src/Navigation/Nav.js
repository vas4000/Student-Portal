//File: src/components/Navigation/Nav.js
//this is seperate navbar component for code reuse
import { FiUser, FiSettings } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
                return (
                    <nav>
                        <div className="nav-container">
                            <input
                                className="search-input"
                                type="text"
                                onChange={handleInputChange}
                                value={query}
                                placeholder="Search Courses here."
                            />
                        </div>
                        
                            <b>Student Portal</b>
                       
                        <div className="profile-container">
                            {/* <a href="#">
                                <AiOutlineShoppingCart className="nav-icons" />
                            </a> */}
                            <a href="#">
                                <FiSettings className="nav-icons" />
                            </a>
                            <a href="#">
                                <FiUser className="nav-icons" />
                            </a>
                        </div>
                    </nav>
                );
            };
    

export default Nav;
