// src/components/ChangeAllocation.js
import React, { useState } from 'react';

function ChangeAllocation({ allocations, setAllocations, calculateBudget, currency, remaining }) {
    const [selectedDept, setSelectedDept] = useState('');
    const [allocationChange, setAllocationChange] = useState(0);

    const handleSave = () => {
        const index = allocations.findIndex(dept => dept.name === selectedDept);
        if (index !== -1) {
            const newAllocations = [...allocations];
            newAllocations[index].allocation += Number(allocationChange);
            setAllocations(newAllocations);
            calculateBudget(newAllocations);
        }
    };

    return (
        <div className="change-allocation">
            <h2>Change allocation</h2>
            <div>
                <label>Department: </label>
                <select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)}>
                    <option value="">Choose...</option>
                    {allocations.map((dept, index) => (
                        <option key={index} value={dept.name}>{dept.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Allocation: </label>
                <input
                    type="number"
                    value={allocationChange}
                    onChange={(e) => setAllocationChange(e.target.value)}
                />
                <span>{currency}</span>
            </div>
            <button onClick={handleSave} disabled={!selectedDept || Number(allocationChange) > remaining}>Save</button>
        </div>
    );
}

export default ChangeAllocation;
