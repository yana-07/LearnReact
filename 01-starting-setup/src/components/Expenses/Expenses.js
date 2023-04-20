import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredExpenses = items.filter(expense => 
    expense.date.getFullYear().toString() === filteredYear);

  const changeYearHandler = (year) => {
    setFilteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filteredYear={filteredYear} onChangeYear={changeYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
