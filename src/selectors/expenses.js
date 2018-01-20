//get visible expenses
import moment from 'moment';

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createAtMoment = moment(expense.createAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createAtMoment,'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createAtMoment,'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createAt < b.createAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    });
};

export default getVisibleExpenses;



/* 
const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
// || means that if the left argument is true , it will return it , and if false it will run the right one
const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate; */