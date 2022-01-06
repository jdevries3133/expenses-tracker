import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2021");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return filteredYear === expense.date.getFullYear().toString();
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
                {
                    // if condition is met, JS returns the last expression
                    // filteredExpenses.length === 0 && <p>No expenses found</p>
                }
                {/* filteredExpenses.length > 0 &&
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    )) */}
            </Card>
        </div>
    );
}

export default Expenses;
