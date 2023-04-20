import { useState } from 'react';
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense({onAddExpense}) {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        onAddExpense(expenseData);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const cancelEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className='new-expense'>
            {isEditing === false && 
             <button onClick={startEditingHandler}>Add New Expense</button>
            }
            {isEditing === true && 
             <ExpenseForm 
                onSaveExpenseData={saveExpenseDataHandler} 
                onCancelEditing={cancelEditingHandler} 
             />
            }
        </div>
    );
};

export default NewExpense;