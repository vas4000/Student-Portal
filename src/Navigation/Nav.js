//File: src/components/Navigation/Nav.js
//this is seperate navbar component for code reuse
import { FiUser, FiSettings } from "react-icons/fi";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
                return (
                    <nav>
                       <a href="/"><img style={{ width: "40px", height: "45px" }} src="/logo.png" alt="Logo" title="Home" /></a> 
                       
                        <div className="nav-container">
                            <input
                                className="search-input"
                                type="text"
                                onChange={handleInputChange}
                                value={query}
                                placeholder="Search Courses here..."
                            />
                        </div>
                        
                        
                        <div className="profile-container">
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
