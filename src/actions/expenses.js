import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense: expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            note = '',
            amount = 0,
            createAt = 0
        } = expenseData;
        const expense = { description, note, amount, createAt };
        database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};


//REMOVE_EXPENSE
/* export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
}); */

export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});



export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense(id));
        });

    }

};


//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/expenses/${id}`).update({
            ...updates
        }).then(() => {
            dispatch(editExpense(id, updates));
        });

    }

};




//fetch data from firebase _set expenses
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses: expenses
});

export const startSetExpenses = () => {

    return (dispatch, getState) => {//double return to make sure that the 'then' will get accsesd from app 
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setExpenses(expenses));

        });
    }

};



/* database.ref('expenses').once('value').then((snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
}); */