import React, { useState } from "react";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [expenseList, filteredExpenseList] = useState(props.items);

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filtered = expenseList.filter(e => {
    return e.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onchangeFilter={filterChangeHandler}
      />
      {filtered.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
