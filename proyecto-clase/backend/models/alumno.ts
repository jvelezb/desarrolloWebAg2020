import * as mongoose from 'mongoose';

const alumnos = new mongoose.Schema({
  matricula: String,
  nombres: String,
  edad: Number,
  carrera: String
});
