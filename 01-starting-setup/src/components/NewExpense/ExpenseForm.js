import { useState } from 'react'

import './ExpenseForm.css'

function ExpenseForm({onSaveExpenseData, onCancelEditing}) {
    const [expense, setExpense] = useState({
        title: '',
        amount: '',
        date: ''
    })

    const expenseChangeHandler = (event) => {
        setExpense(prevExpense => ({
            ...prevExpense,
            [event.target.name]: event.target.value
        }));
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            ...expense,
            amount: +expense.amount,
            date: new Date(expense.date)
        }

        onSaveExpenseData(expenseData);

        setExpense({
            title: '',
            amount: '',
            date: ''
        })
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                      type="text" 
                      name="title"
                      value={expense.title} 
                      onChange={expenseChangeHandler} 
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                      type="number" 
                      name="amount" 
                      value={expense.amount}
                      min="0.01" step="0.01" 
                      onChange={expenseChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                      type="date" 
                      name="date" 
                      value={expense.date}
                      min="2019-01-01" max="2023-12-31" 
                      onChange={expenseChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={onCancelEditing}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;