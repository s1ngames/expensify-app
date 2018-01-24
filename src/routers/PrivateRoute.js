import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({ isAuth,
    component: Component, ...props }) => (
        <div>
            <Route {...props} component={(props) => (
                isAuth ? (
                    <div>
                    <Component {...props} />
                    <Header/>
                    </div>
                ) : (
                        <Redirect to="/" />
                    )
            ) } />
        </div>
    );

const mapStateToProps = (state) => ({
    isAuth: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);

