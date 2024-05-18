import React, { useState } from 'react';
import Budget from './components/Budget';
import Department from './components/Department';
import CurrencyDropdown from './components/CurrencyDropdown';
import ChangeAllocation from './components/ChangeAllocation';
import './App.css';

function App() {
    const [budget, setBudget] = useState(1000);
    const [remaining, setRemaining] = useState(1000);
    const [spent, setSpent] = useState(0);
    const [currency, setCurrency] = useState('£');
    const [allocations, setAllocations] = useState([
        { name: 'Marketing', allocation: 50 },
        { name: 'Finance', allocation: 300 },
        { name: 'Sales', allocation: 70 },
        { name: 'Human Resource', allocation: 40 },
        { name: 'IT', allocation: 500 },
    ]);

    const handleAllocationChange = (index, amount) => {
        const newAllocations = [...allocations];
        newAllocations[index].allocation += amount;
        setAllocations(newAllocations);
        calculateBudget(newAllocations);
    };

    const calculateBudget = (newAllocations) => {
        const totalSpent = newAllocations.reduce((acc, dept) => acc + dept.allocation, 0);
        setSpent(totalSpent);
        setRemaining(budget - totalSpent);
    };

    const handleBudgetChange = (amount) => {
        const newBudget = budget + amount;
        if (newBudget >= spent && newBudget <= 20000) {
            setBudget(newBudget);
            setRemaining(newBudget - spent);
        }
    };

    const handleCurrencyChange = (newCurrency) => {
        setCurrency(newCurrency);
    };

    return (
        <div className="App">
            <h1>Company's Budget Allocation</h1>
            <Budget
                budget={budget}
                remaining={remaining}
                spent={spent}
                handleBudgetChange={handleBudgetChange}
                currency={currency}
            />
            <CurrencyDropdown currency={currency} handleCurrencyChange={handleCurrencyChange} />
            <h2>Allocation</h2>
            {allocations.map((dept, index) => (
                <Department
                    key={index}
                    department={dept}
                    index={index}
                    handleAllocationChange={handleAllocationChange}
                    currency={currency}
                    remaining={remaining}
                />
            ))}
            <ChangeAllocation
                allocations={allocations}
                setAllocations={setAllocations}
                calculateBudget={calculateBudget}
                currency={currency}
                remaining={remaining}
            />
        </div>
    );
}

export default App;
