import ExpenseItem from './ExpenseItem'
import Card from './Card'
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
        <Card className="expenses">
            {expenseElements}
        </Card>
    );
}

export default Expenses;