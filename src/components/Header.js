import { NavLink } from 'react-router-dom';
import React from 'react';


const Header = () => {
    return (
        <header>
            <h2>Expensify</h2>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expanse</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </header>
    );

};

export default Header;

//<NavLink to="/edit" activeClassName="is-active">Edit Expanse</NavLink>
