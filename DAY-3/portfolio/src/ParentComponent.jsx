import { useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
  const [message, setMessage] = useState('Hello from Parent!')
  const [count, setCount] = useState(0)

  const handleChildClick = (childMessage) => {
    setMessage(childMessage)
  }

  return (
    <div style={{ padding: '20px', border: '2px solid blue', borderRadius: '8px' }}>
      <h2>Parent Component</h2>
      <p>Message: {message}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
      
      <div style={{ marginTop: '20px' }}>
        <ChildComponent 
          parentMessage={message} 
          onChildClick={handleChildClick}
          count={count}
        />
      </div>
    </div>
  )
}

export default ParentComponent
