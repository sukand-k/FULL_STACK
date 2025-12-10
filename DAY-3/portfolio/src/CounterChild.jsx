import { useState } from 'react'

const CounterChild = ({ parentCounter, childCounter, onChildCounterUpdate }) => {
    const [localCount, setLocalCount] = useState(0)

    const handleChildIncrement = () => {
        const newCount = localCount + 1
        setLocalCount(newCount)
        onChildCounterUpdate(newCount)
    }

    const handleChildDecrement = () => {
        const newCount = localCount - 1
        setLocalCount(newCount)
        onChildCounterUpdate(newCount)
    }

    return (
        <div style={{ padding: '15px', border: '2px solid orange', borderRadius: '8px', backgroundColor: '#fafafa' }}>
            <h3>Counter Child Component</h3>
            <p>Parent Counter: {parentCounter}</p>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Child Counter: {localCount}</p>
            <button onClick={handleChildIncrement} style={{ marginRight: '10px', padding: '8px 15px' }}>
                Child Increment
            </button>
            <button onClick={handleChildDecrement} style={{ padding: '8px 15px' }}>
                Child Decrement
            </button>
        </div>
    )
}

export default CounterChild
