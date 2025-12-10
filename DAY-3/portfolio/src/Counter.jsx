import { useState } from 'react'

const Counter = ({ initial = 0, onChange }) => {
    const [count, setCount] = useState(initial)

    const update = (next) => {
        setCount(next)
        if (typeof onChange === 'function') onChange(next)
    }

    const increment = () => update(count + 1)
    const decrement = () => update(count - 1)
    const reset = () => update(initial)

    return (
        <div style={{ padding: 12, border: '1px solid #ddd', borderRadius: 6, display: 'inline-block' }}>
            <h2 style={{ margin: '0 0 8px' }}>Counter: {count}</h2>
            <div>
                <button onClick={increment} style={{ marginRight: 8, padding: '6px 12px' }}>Increment</button>
                <button onClick={decrement} style={{ marginRight: 8, padding: '6px 12px' }}>Decrement</button>
                <button onClick={reset} style={{ padding: '6px 12px' }}>Reset</button>
            </div>
        </div>
    )
}

export default Counter