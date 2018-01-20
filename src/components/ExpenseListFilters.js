import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import selectExpenses from '../selectors/expenses';
//improt connect to connect to the store
//connect left sograim is what we want from the store

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null,
        expensesCount: undefined,
        expensesSum: 0
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => {
            return {
                calendarFocused: calendarFocused
            }
        });
    };

    getExpensesAmount = () => {
        let sum = 0;
        this.props.expenses.map((expense) => {
            if (expense) {
                sum += (expense.amount) / 100;
            }
        });
        return sum;
    };

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }} />

                <select value={this.props.filters.sortBy} onChange={(e) => {
                    if (e.target.value === 'date') {
                        this.props.dispatch(sortByDate());
                    } else if (e.target.value === 'amount') {
                        this.props.dispatch(sortByAmount());
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount" >Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                    startDateId={'start'}
                    endDateId={'end'}
                />
                <h4>{this.props.expenses ? `Found ${this.props.expenses.length} expesnses, with sum
                of ${this.getExpensesAmount()}₪` :
                    'No expenses found'}</h4>
            </div>
        )
    }
};

/* const ExpenseListFilters = (props) => (
    <div>


    </div>
); */


//return what we want
const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        expenses: selectExpenses(state.expenses, state.filters)
    }

};

export default connect(mapStateToProps)(ExpenseListFilters);