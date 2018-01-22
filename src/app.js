import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';

import './firebase/firebase';


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

ReactDOM.render(jsx, document.getElementById('app'));


