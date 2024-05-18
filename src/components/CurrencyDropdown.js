import React from 'react';

function CurrencyDropdown({ currency, handleCurrencyChange }) {
    const currencies = ['$', '£', '€', '₹'];
    return (
        <div className="currency-dropdown">
            <label>Currency: </label>
            <select value={currency} onChange={(e) => handleCurrencyChange(e.target.value)}>
                {currencies.map((curr, index) => (
                    <option key={index} value={curr}>{curr} {curr === '$' ? 'Dollar' : curr === '£' ? 'Pound' : curr === '€' ? 'Euro' : 'Rupee'}</option>
                ))}
            </select>
        </div>
    );
}

export default CurrencyDropdown;
