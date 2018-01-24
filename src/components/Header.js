import { NavLink } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


const Header = (props) => {
    return (
        <header>
            <h2>Expensify</h2>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expanse</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
            <button onClick ={props.startLogout}>Logout</button>
        </header>
    );

};

const mapDispatchToProps = (dispatch) => ({
startLogout: ()=> dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

//<NavLink to="/edit" activeClassName="is-active">Edit Expanse</NavLink>
