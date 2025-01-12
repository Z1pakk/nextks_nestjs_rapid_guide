import React from 'react';
import { IUser } from "../models/User";
import { Link } from "react-router-dom"
import axios from "axios";

const Nav = (props: { user: IUser | null }) => {
    const logout = async () => await axios.post('/logout');

    return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Company name</a>

            <ul className="my-2 my-md-0 mr-md-3">
                <Link className="p-2 text-white text-decoration-none"
                      to={"/profile"}>
                    {props.user?.first_name} {props.user?.last_name}
                </Link>
                <Link className="p-2 text-white text-decoration-none"
                      to="/login"
                      onClick={logout}>
                    Sign out
                </Link>
            </ul>
        </header>
    );
};

export default Nav;
