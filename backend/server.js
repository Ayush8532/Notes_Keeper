<<<<<<< HEAD
const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db');
const userRoutes =require('./routes/userRoutes');
const noteRoutes =require('./routes/noteRoutes');
const {notFound, errorHandler } = require('./middlewares/errorMiddlewares');


const app = express();
dotenv.config();
connectDB();

app.use(express.json());

//app.get('/',(req, res) => {
  //  res.send("Api is running")   
//})

//app.get('/api/notes', (req, res) => {
//   res.json(notes);
//})

app.use('/api/users', userRoutes)
app.use('/api/notes', noteRoutes)

app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server is running on port ${PORT}`));

=======
const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db');
const userRoutes =require('./routes/userRoutes');
const noteRoutes =require('./routes/noteRoutes');
const {notFound, errorHandler } = require('./middlewares/errorMiddlewares');


const app = express();
dotenv.config();
connectDB();

app.use(express.json());

//app.get('/',(req, res) => {
  //  res.send("Api is running")   
//})

//app.get('/api/notes', (req, res) => {
//   res.json(notes);
//})

app.use('/api/users', userRoutes)
app.use('/api/notes', noteRoutes)

app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server is running on port ${PORT}`));

>>>>>>> 0cc7da956c59dbb6ce1073bc9d8f86fd3c4dd9dc
