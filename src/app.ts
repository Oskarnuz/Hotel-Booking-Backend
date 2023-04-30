import express, { Express } from "express";
import configExpress from "./config/express";
import routes from "./routes";
import { formData } from "./api/middlewares/formData";

const app: Express = express()
const port = process.env.PORT || 8080

//CONFIG
configExpress(app)

// SETUP CONFIG
routes(app)


app.post('/test-formdata', formData,(req,res)=>{
  res.status(200).json({...req.body})
})

app.listen(port, () => {
  console.log(`Server listening on port ${port} !!!`)
})