const express= require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const database = require('./config/database.js');
const authRouter = require("./routes/auth.js");
const itemsRouter = require("./routes/items.js");




const session = require('express-session');
const { authenticateUser } = require('./middlewares/errorMiddlewares');
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(bodyParser.json({limit:'30mb', extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}))
app.use('/api/auth',authRouter)
app.use('/api/item',itemsRouter)



//Ayxan0605*
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 60 * 60 * 1000 }
}));
app.use(authenticateUser);

const PORT =  8080;
app.listen(PORT, ()=>{
    database();
    console.log("server is running", PORT)
})