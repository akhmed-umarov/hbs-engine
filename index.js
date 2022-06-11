import path from "path"; 
import exhbs from 'express-handlebars';
import express from 'express';
import mongoose from "mongoose";
import router from './router/router.js'; 


const PORT = process.env.PORT ?? 3000 ; 
const __dirname = path.resolve(); 
const app = express();


//connect our http-engine

const hbs = exhbs.create({ 
   defaultLayout: 'main', 
   extname: 'hbs'
})

app.engine(  'hbs' , hbs.engine); 
app.set('view engine' , 'hbs'); 
app.set('views' , path.resolve(__dirname , "public")); 


app.use(express.static(path.resolve(__dirname , "public/src")));
app.use(express.urlencoded({extended:true})) //теперь экспресс будет понимать те данные которые передаются с помощью формы в post запросе
app.use(router); 

async function start(){ 
   try { 
      mongoose.connect("mongodb+srv://Akhmed:123123Laker@cluster0.sh6pm.mongodb.net/?retryWrites=true&w=majority" , { 
         useNewUrlParser: true
      })
      
      app.listen(PORT , ()=> {
         console.log(`Your server has been started`);
      })
   }
   catch(e){ 
      console.log(e);
   }
}

start();