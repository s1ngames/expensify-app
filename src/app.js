import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import {login, logout} from './actions/auth';

import { firebase } from './firebase/firebase';
import { log } from 'util';


const store = configureStore();
console.log('testing');

/* store.dispatch(addExpense({ description: 'Gas bill', amount: 300 }));
store.dispatch(addExpense({ description: 'Water bill', amount: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 10, createAt: 100 })); */

//store.dispatch(setTextFilter('wat'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};


ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // console.log('log in');
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });

    }
    else {
        //console.log('logout');
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }

});



