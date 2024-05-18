// src/components/Department.js
import React from 'react';

function Department({ department, index, handleAllocationChange, currency, remaining }) {
    return (
        <div className="department">
            <div>{department.name}</div>
            <div>{currency}{department.allocation}</div>
            <button onClick={() => handleAllocationChange(index, 10)} disabled={remaining < 10}>+</button>
            <button onClick={() => handleAllocationChange(index, -10)} disabled={department.allocation <= 0}>-</button>
        </div>
    );
}

export default Department;
