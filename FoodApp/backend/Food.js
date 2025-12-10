const mongoose = require('mongoose')

const foodschema = new mongoose.Schema({
    foodname: {
        type : String,
        required : true
    },
    daysSinceIate: {
        type : Number,
        required : true
    }
});
const Food = mongoose.model("Food",foodschema);
module.exports = Food;