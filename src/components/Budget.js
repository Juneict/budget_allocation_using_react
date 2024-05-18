import React from 'react';

function Budget({ budget, remaining, spent, handleBudgetChange, currency }) {
    return (
        <div className="budget">
            <div>
                <label>Budget: </label>
                <input
                    type="number"
                    value={budget}
                    onChange={(e) => handleBudgetChange(Number(e.target.value) - budget)}
                    max="20000"
                />
                <span>{currency}</span>
            </div>
            <div>Remaining: {currency}{remaining}</div>
            <div>Spent so far: {currency}{spent}</div>
            <button onClick={() => handleBudgetChange(10)}>Increase by 10</button>
            <button onClick={() => handleBudgetChange(-10)}>Decrease by 10</button>
        </div>
    );
}

export default Budget;
