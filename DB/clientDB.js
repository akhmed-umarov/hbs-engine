import mongoose from "mongoose";

const ClientShema = new mongoose.Schema({
   rub:{ 
      default: 0, 
      type: String
   }
})

const clientModel = new mongoose.model( "Client" , ClientShema);
export default clientModel;