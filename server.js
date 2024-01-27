var express = require("express");
var path = require("path");
const bodyParser = require('body-parser');
var app = express();

const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://vahagnmakaryan:Dasyntac@cluster0.j1zhiul.mongodb.net/sample_mflix';

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));


mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB!');
    try {
        const allMovies = await mongoose.connection.db.collection('theaters').find({'location.address.city' : 'Bloomington'}).toArray();
        console.log('All Movies:', allMovies);
        app.get("/", function (req, res) {
            res.render('../public/form.ejs', {
                info: allMovies,
            })
        });
    } catch (error) {
        console.error('Error retrieving movies:', error);
    } finally {
        mongoose.connection.close();
    }
});

app.post('/addName', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    console.log('Received dataa:', name, email, password);
    res.redirect('/');
});



app.listen(3000, function () {
    console.log("Example is running on port 3000");
});


















// app.post('/addName', (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;
//     console.log('Received dataa:', name, email, password);

//     mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
//     const db = mongoose.connection;

//     db.on('error', console.error.bind(console, 'Connection error:'));
//     db.once('open', async () => {
//         console.log('Connected to MongoDB!');
//         try {
//             const allMovies = await mongoose.connection.db.collection('users').insertOne(
//                 {
//                     'name': name,
//                     'email': email,
//                     'password': password
//                 });
//             console.log('All Movies:', allMovies);
//         } catch (error) {
//             console.error('Error retrieving movies:', error);
//         } finally {
//             mongoose.connection.close();
//         }
//     });
//     res.redirect('/');
// });

// app.listen(3000, function () {
//     console.log("Example is running on port 3000");
// });









// const mongoose = require('mongoose');
// const connectionString = 'mongodb+srv://vahagnmakaryan:Dasyntac@cluster0.j1zhiul.mongodb.net/sample_mflix';

// mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', async () => {
//     console.log('Connected to MongoDB!');

//     try {
//         const allMovies = await mongoose.connection.db.collection('movies').find({theaterID : 1000});

//         console.log('All Movies:', allMovies);
//     } catch (error) {
//         console.error('Error retrieving movies:', error);
//     } finally {
//         mongoose.connection.close();
//     }
// });

//update
// const mongoose = require('mongoose');
// const connectionString = 'mongodb+srv://vahagnmakaryan:Dasyntac@cluster0.j1zhiul.mongodb.net/sample_mflix';

// mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', async () => {
//     console.log('Connected to MongoDB!');

//     try {
//         const allMovies = await mongoose.connection.db.collection('movies').updateMany({'title': 'The Black Pirate'} , { $set: { year: 3000 } , $set: { plot: 'barev' }});

//         console.log('All Movies:', allMovies);
//     } catch (error) {
//         console.error('Error retrieving movies:', error);
//     } finally {
//         mongoose.connection.close();
//     }
// });


//insert
// const mongoose = require('mongoose');
// const connectionString = 'mongodb+srv://vahagnmakaryan:Dasyntac@cluster0.j1zhiul.mongodb.net/sample_mflix';

// mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', async () => {
//     console.log('Connected to MongoDB!');

//     try {
//         const allMovies = await mongoose.connection.db.collection('users').insertMany([{'name': 'Ashot', 'email': 'Ashot@gmail.com', 'password': 'password'},{'name': 'Vahagn', 'email': 'Vahagn@gmail.com', 'password': 'password'}]);

//         console.log('All Movies:', allMovies);
//     } catch (error) {
//         console.error('Error retrieving movies:', error);
//     } finally {
//         mongoose.connection.close();
//     }
// });
