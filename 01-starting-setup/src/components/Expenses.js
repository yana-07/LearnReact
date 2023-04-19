import ExpenseItem from './ExpenseItem'
import './Expenses.css'

function Expenses({items}) {
    const expenseElements = items.map(expense => {
        return <ExpenseItem 
                 key={expense.id} 
                 title={expense.title} 
                 amount={expense.amount} 
                 date={expense.date} 
              />
    })

    return (
        <div className="expenses">
            {expenseElements}
        </div>
    );
}

export default Expenses;