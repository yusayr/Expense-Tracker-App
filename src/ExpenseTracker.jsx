import React, { useState } from 'react'
import './ExpenseTracker.css'

function ExpenseTracker() {
    const [expense, setExpense] = useState('');
    const [amount, setAmount] = useState('');
    const [entry, setEntry] = useState([]);

    const addExpense = () => {
        if (!expense || !amount) return;

        const newExpense = {
            id: entry.length + 1,
            expense: expense,
            amount: amount
        }
        setEntry([...entry, newExpense])
        setExpense('');
        setAmount('');
        console.log(entry)
    }

    const deleteExpense = (id) => {
        setEntry(entry.filter((item) => item.id !== id))
    }

    return (
        <>
            <div className='expense-tracker-container'>
                <h2>Expense Tracker</h2>
                <div>
                    <div className='input-boxes'>
                        <input type="text" placeholder='Expense' value={expense} onChange={(e) =>
                            setExpense(e.target.value)
                        } />
                        <input type="number" placeholder='Amount' value={amount} onChange={(e) =>
                            setAmount(e.target.value)
                        } />
                    </div>
                    <div className='addButton-Container'>
                        <button style={{
                            backgroundColor: '#00BFFF',
                            marginTop: '1rem',
                            padding: '0.75rem 1.5rem',
                            fontSize: '1rem',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }} onClick={addExpense}>Add Expense</button>
                    </div>
                    <ul className='expense-list'>
                        {entry.map(item =>
                            <li key={item.id}>
                                <span>{item.expense}</span>
                                <span>${item.amount}</span>
                                <button onClick={() =>
                                    deleteExpense(item.id)
                                }>Delete</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ExpenseTracker