import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const expenseElements = items
    //.filter(expense => expense.date.getFullYear().toString() === filteredYear)
    .map(expense => expense.date.getFullYear().toString() === filteredYear && (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )
    );

  const changeYearHandler = (year) => {
    setFilteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filteredYear={filteredYear} onChangeYear={changeYearHandler} />
        {expenseElements}
      </Card>
    </div>
  );
}

export default Expenses;
