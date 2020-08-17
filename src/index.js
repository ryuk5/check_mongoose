let db_connection = require('./database'); //import the database connection
let UserModel = require('./models/user'); //import the user model

/* Create and Save a Record of a Model
//creating a user instance
let user = new UserModel({
    name: 'Hamma',
    age: 21,
    email: 'PowerLifter@gmail.com',
    favoriteFoods: ['burrito', 's7an tounsi', 'kaftaji']
});

//using the sa save method woth a callback function
user.save(function(err, data) {
    if(err) return console.error(err);
    console.log(`data saved successfuly ${data}`)
});
*/

/* Create Many Records with model.create()
UserModel
    .create([{
        name: 'sasuke',
        age: 35,
        email: 'sasuke@gmail.com',
        favoriteFoods: ['reatsu', 'bankai', 'getsuga tencho']
    }, {
        name: 'naruto',
        age: 27,
        email: 'hokage@gmail.com',
        favoriteFoods: ['ramen', 'dumbleings', 'kaftaji']
    }, {
        name: 'ryuk',
        age: 211,
        email: 'ryukx@gmail.com',
        favoriteFoods: ['toffe7', 's7an tounsi', 'kaftaji']
    }])
    .then(() =>{
        console.log("Inserting a lot of ppl successfuly");
    })
    .catch(err =>{
        console.error(err);
    })
*/

/* Use model.find() to Search Your Database
UserModel
    .find({
        name: 'ichigo'
    })
    .then(res => {
        console.log("finding ppl with the name of ichigo");
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    })
*/

/* Use model.findOne() to Return a Single Matching Document from Your Database
let food = "kaftaji"
UserModel
    .findOne({favoriteFoods: { $elemMatch: {$eq: food}}})
    .then(res => {
        console.log("finding ppl by the food he love");
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    })
*/

/* Use model.findById() to Search Your Database By _id
UserModel
    .findById('5f39a64ce6d62f427c98f6da')
    .then(res => {
        console.log("finding ppl by his ID");
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    })
*/

/* Perform Classic Updates by Running Find, Edit, then Save
let id = '5f39a5f84bf603448408a2df';
UserModel
    .findById(id, function (err, data) {
        if(err) return console.error(err);
        //console.log(data);
        data.favoriteFoods.push("hamburger");
        //inside the find callback
        data.save(function(err, data){
            if (err) return console.error(err);
            console.log("Document inserted succussfully! + we add the hamburger");
        });
    });
*/

/* Perform New Updates on a Document Using model.findOneAndUpdate()
UserModel
    .findOneAndUpdate({name: 'Hamma'}, {age: 20}, {new: true, runValidators: true})
    .then(res => {
        console.log("New Document");
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    })
*/

/* Delete One Document Using model.findByIdAndRemove
let id = '5f39a3b73f59b6426c85c05a';
UserModel
    .findByIdAndRemove(id)
    .then(res => {
        console.log("Removed Document");
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    })
*/

/* MongoDB and Mongoose - Delete Many Documents with model.remove()
UserModel
    .remove({ name: 'Hamma' })
    .then(res => {
        console.log("Delete work");
        console.log(res);
        if(res.n === 0){
            console.log("No persons deleted");
        }else
        {
            console.log(`${res.n} Person deleted`);
        }
    })
    .catch(err => {
        console.error(err);
    })
*/

//Chain Search Query Helpers to Narrow Search Results
let food = "burrito";
UserModel
    .find({favoriteFoods: { $elemMatch: {$eq: food}}})
    .sort({name: 1})
    .limit(2)
    .select({age: false})
    .exec(function(err, data){
        if(err) console.error(err);
        console.log(data);
    })
