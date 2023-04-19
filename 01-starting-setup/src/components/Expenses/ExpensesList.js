import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

function ExpensesList({items}) {
    if (items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    const expenseElements = items.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />)
    );

    return (
        <ul className="expenses-list">
            {expenseElements}
        </ul>
    );
};

export default ExpensesList;