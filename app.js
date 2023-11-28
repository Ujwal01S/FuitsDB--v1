//importing mongoose 
const mongoose = require('mongoose');
//code for connecting to the server and database i.e. database name is fruitsDB
mongoose.connect("mongodb://localhost:27017/FruitDB");

//creating a schema for fruitsDB i.e what its data gonna contain

const fruitSchema = new mongoose.Schema({
    name:String,
    rating:{
        type:Number,
        min: 1,
        max: 10
    },
    review:String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name:"Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});
// fruit.save();

const kiwi = new Fruit({
    name:"kiwi",
    rating: 10,
    review: "The best fruit."
});

const orange = new Fruit({
    name:"orange",
    rating: 10,
    review: "Personal favriout."
});

const banana = new Fruit({
    name:"banana",
    rating: 8,
    review: "Not bad."
});
// Fruit.insertMany([kiwi, orange, banana]);





const personSchema = new mongoose.Schema({
    name: "String",
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    name:"Jhon",
    age: 37
});

const person2 = new Person ({
    name:"Abram",
    age: 27
});

//to read fruit from collection Fruit
Fruit.find({}).exec((err, fruits) =>{
    if(err) console.error(err);

    

    fruits.forEach(function(fruit){
        console.log(fruit.name);
    });
});
  





// person.save();

//for connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
 console.log("we are connected!");
});




