const express = require('express');
const path = require('path');

const app = express()
const port = 5050;

const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended:true
}))

//Connection to Database
require('./database/conn')
const user = require('./database/user_model');
const doc = require('./database/doc_model')
const { default: mongoose } = require('mongoose');

var db = mongoose.connection;

//Middlewares
const localmid = (req,res,next)=>{
    next()
}

//Initializing Server
app.use(cors())
app.use(bodyParser())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//LOGIN ROUTE
app.post('/ulogin',async (req,res)=>{
    var email =req.body.email;
    var password =req.body.password;
    
    const user_data = await user.findOne({email:email});

    if(user_data){
        if(user_data.password === password){
            res.json({
                status:true
            })
            return;           
        }
        res.json({
            status:false
        })
        return;
    }
    res.json({
        status:false
    })
    return;
    
})

app.post('/dlogin',async (req,res)=>{
    var email =req.body.email;
    var password =req.body.password;
    
    const doc_data = await doc.findOne({email:email});

    if(doc_data){
        if(doc_data.password === password){
            res.json({
                status:true
            })
            return;           
        }
        res.json({
            status:false
        })
        return;
    }
    res.json({
        status:false
    })
    return;
    
})

app.get('/',localmid,(req,res) =>{
    res.sendFile('/Users/coding/Documents/vs/CARE-360-main/BACKEND/public/index.html')
})

app.get('/ulogin',localmid,(req,res) =>{
    res.sendFile('/Users/coding/Documents/vs/CARE-360-main/BACKEND/public/userlogin.html')
})

app.get('/dlogin',localmid,(req,res) =>{
    res.sendFile('/Users/coding/Documents/vs/CARE-360-main/BACKEND/public/doclogin.html')
})

app.listen( port, ()=>{
    console.log(`Connected to port ${port}📌`);
})