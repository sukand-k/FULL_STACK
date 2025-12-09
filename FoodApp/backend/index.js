const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();

const FoodModel = *require('./models/Food')

const app = express();
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((err) => {
        console.log("MongoDB Connection Error:", err.message);
    });

app.use(cors());
app.use(express.json())

app.post("/insert", async (req,res) => {
    const foodName = req.body.foodName;
    const daysSinceIAte = req.body.daysSinceIAte;
    const food = new FoodModel({foodName : foodName, daysSinceIAte : daysSinceIAte});
    try {
        await food.save();
        res.status(201).send("Food item inserted successfully");
    } catch (error) {
        res.status(500).send("Error inserting food item");
    }
});

app.get('/read', async (req,res) => {
    try {
        const fooditems = await FoodModel.find({});
        res.status(200).json(fooditems);
    } catch (error) {
        res.status(500).send("Error reading food items");
    }
});

app.put('/update/:id', async (req,res) => {
    const id = req.params.id;
    const newDaysSinceIAte = req.body.newDaysSinceIAte;
    try {
        await FoodModel.findByIdAndUpdate(id, { daysSinceIAte: newDaysSinceIAte });
        res.status(200).send("Food item updated successfully");
    } catch (error) {
        res.status(500).send("Error updating food item");
    }
});

app.delete('/delete/:id', async (req,res) => {
    const id = req.params.id;
    try {
        await FoodModel.findByIdAndDelete(id);
        res.status(200).send("Food item deleted successfully");
    } catch (error) {
        res.status(500).send("Error deleting food item");
    }
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    //console.log(`MongoDB Connection State: ${mongoose.connection.readyState === 1 ? ' Connected' : ' Disconnected'}`)
})
    