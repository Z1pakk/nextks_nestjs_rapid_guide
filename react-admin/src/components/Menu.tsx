import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/users">
                            Users
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/products">
                            Products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/orders">
                            Orders
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Menu;
