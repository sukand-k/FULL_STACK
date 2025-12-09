const mongoose = require('mongoose')

const foodschema = new mongoose.Schema({
    foodName: {
        type : String,
        required : true
    },
    daysSinceIAte: {
        type : Number,
        required : true
    }
});
const Food = mongoose.model("Food",foodschema);
module.exports = Food;
