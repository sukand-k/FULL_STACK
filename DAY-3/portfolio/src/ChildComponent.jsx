function ChildComponent({ parentMessage, onChildClick, count }) {
  return (
    <div style={{ padding: '15px', border: '2px solid green', borderRadius: '8px', backgroundColor: '#f0f0f0' }}>
      <h3>Child Component</h3>
      <p>Received from Parent: {parentMessage}</p>
      <p>Parent Count Value: {count}</p>
      
      <button onClick={() => onChildClick('Message sent from Child!')}>
        Send Message to Parent
      </button>
    </div>
  )
}

export default ChildComponent
