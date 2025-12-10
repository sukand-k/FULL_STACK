import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [foodname, setFoodname] = useState('')
  const [daysSinceIate, setDaysSinceIate] = useState(0)
  const [newfoodname, setNewfoodname] = useState('')
  const [foodlist, setFoodlist] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/read')
      .then((response) => {
        setFoodlist(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  const addToList = () => { 
    axios.post('http://localhost:3001/insert', {
      foodname,
      daysSinceIate
    })
  }

  const updateFood = (id) => {
    axios.put('http://localhost:3001/update', {
      id,
      newfoodname
    })
  }

  const deleteFood = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
  }

  return (
    <>
      <h1>Food Tracker</h1>
      <div>
        <input 
          value={foodname}
          onChange={(e) => setFoodname(e.target.value)}
          placeholder="Food name"
        />
        <input 
          type="number"
          value={daysSinceIate}
          onChange={(e) => setDaysSinceIate(e.target.value)}
          placeholder="Days since I ate"
        />
        <button onClick={addToList}>Add Food</button>
      </div>
      <div>
        {foodlist.map((food) => (
          <div key={food.id}>
            <p>{food.foodname} - {food.daysSinceIate} days</p>
            <input 
              value={newfoodname}
              onChange={(e) => setNewfoodname(e.target.value)}
              placeholder="New food name"
            />
            <button onClick={() => updateFood(food.id)}>Update</button>
            <button onClick={() => deleteFood(food.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
