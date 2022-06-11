"use strict";
import { Router } from "express";
import clientModel from "../DB/clientDB.js";
// import mongoose from "mongoose";

const router = Router(); 

router.get( '/' , (req, res)=> { 
   res.render('welcome', { 
      title: `Welcome`
   })
})

router.post( "/createClient" , async (req, res)=> { 
   console.log(req.body);
   let newClient = new clientModel({ 
      // rub: req.body.rub
      rub: req.body.rub
   });
   console.log(newClient);
   await newClient.save(function (er) { 
      if (er) console.log(er)
   }); 
   res.redirect("/");
})

export default router;