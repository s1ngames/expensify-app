//higher order component = component that render other component
//the component that render is the hoc , and can render more than one regular compnennt

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin ?
                <p>This is private info , please dont share</p> : undefined}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ?
                <WrappedComponent {...props}/> : 
                <p>Please Login to view the info</p>}
        </div>
    );
};



const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);

ReactDOM.render(<AuthInfo isAuth={false} info="this is the detail" />, document.getElementById('app'));
//ReactDOM.render(<AdminInfo isAdmin={false} info="this is the detail" />, document.getElementById('app'));