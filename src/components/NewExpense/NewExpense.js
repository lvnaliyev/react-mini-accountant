import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openTheForm = () => {
    setIsOpen(true);
  };

  const closeTheForm = () => {
    setIsOpen(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!isOpen && <button onClick={openTheForm}> Add new exp </button>}
      {isOpen && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={closeTheForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
