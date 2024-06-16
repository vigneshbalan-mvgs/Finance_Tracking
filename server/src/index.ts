// password ioWe5KWPIleWvenB

import express, {Express} from "express";
import mongoose from "mongoose";
import financialRecordRouter from './routes/financial-record'


const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string = "mongodb+srv://vigneshbalanmvgs2003:ioWe5KWPIleWvenB@finetracker.hhrrfrr.mongodb.net/"


mongoose
    .connect(mongoURI)
    .then(() => console.log("CONNECT TO MANGODB!"))
    .catch((err)=> console.log("Failed to Connect to MangoDb",err));

app.use("/financial-record",financialRecordRouter)


app.listen(port,()=> {
    console.log(`Server running on port${port}`)
})