import mongoose from "mongoose";
import express from "express";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(cors());

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("conexion a base de datos exitoso");
    app.listen(4000, () => {
      console.log("SERVIDOR LOCAL EXITOSO");
    });
  })
  .catch((error) => {
    console.log("ERROR EN CONECTARSE A LA BASE DE DATOS");
  });
