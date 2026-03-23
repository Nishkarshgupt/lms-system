const express = require('express');
const userRouter = require('./routes/user.routes')
const indexRouter = require('./routes/index.routes')
const session = require('express-session');
const dotenv = require('dotenv');
dotenv.config();
const connectToDB = require('./config/db')
connectToDB();
const cookieParser = require('cookie-parser');
const app = express();




app.set('view engine', 'ejs');
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: 'your_secret_key',  // Replace with a secret key for session encryption
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // for development; set to true in production with HTTPS
}));


app.use('/', indexRouter)
app.use('/user', userRouter)



app.listen(3000, () => {
    console.log('Server is running on port 3000');
})