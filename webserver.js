const express =require('express')
const app = express();
const path = require('path')
const PORT = process.env.PORT ||5000;
const cors = require('cors')
const {logger} = require('./middleware/logEvents')
const errorHandler =require('./middleware/errorHandler');
const { send } = require('process');
const router = require('./routes/subdir');
const corsOption = require('./confi/corsOption')
app.use(logger);

//middle ware
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',express.static(path.join(__dirname,'./public')))
app.use('/subdir',express.static(path.join(__dirname,'./public')))

app.use('/',require('./routes/root'));
app.use('/subdir',require('./routes/subdir'));
app.use('/employee',require('./routes/api/employee'));
app.use(cors(corsOption))



//route handling
app.get('/hello(.html)?',(req,res,next)=>{
    console.log("try pannugaaa guys-")
    next()
},(req,res)=>{
    res.send('he-llo na-n-ba') 
})


//chianing
const one = (req,res,next)=>{
    console.log('one');
    next()
}
const two = (req,res,next)=>{
    console.log('two');
    next()
}
const three = (req,res)=>{
    console.log('three');
    res.send('finished')
}
app.get('/chain(.html)?',[ one, two, three]);

// app.get('/*',(req,res)=>{
//     res.status(404).sendFile(path.join(__dirname,'views','404.html'))
   
// })
app.all('*',(req,res)=>{
    res.status(404);
    if(req.accepts('html'))  {
        res.sendFile(path.join(__dirname,'views','404.html'))
    }else if(req.accepts('json')){
        res.json({'error':'404 found'})
    }else{
        res.type('txt').send('404 Not found')
    }
})

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));