//cross origin resoruce sharing

const whitelist =['http:www.youtube,com','http:www.youtube,com','http:/localhost/:5000/']
const corsOption = {
    origin:(origin,callback)=>{
        if(whitelist.indexOf(origin)!==-1 ||!origin){
            callback(null,true)
        }else{
            callback(new Error('not allowed by cors'))
        }
    },
    optionsSuccessStatus:200
}
app.use(cors(corsOption))