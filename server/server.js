const express=require('express');
const mongoose=require('mongoose');
const session=require('express-session');
require('dotenv').config()
const PORT=4100;


/*initialisation de mon server */
const app=express();


//mildllewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(session({
    secret: 'Ma clé secrete',
    resave: false,
    saveUninitialized: true
  }))

app.use((req,res,next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
})

app.get('/',(req,res)=>{
    res.send('MON CODE BACKEND ....!!!!');
})


//listen on port

app.listen(PORT,()=>{
    console.log(`server started at http://localhost/:${PORT}`);
    
})