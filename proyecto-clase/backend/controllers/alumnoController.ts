

import Alumno from '../models/alumno';

class AlumnoController{
  getAll = async (req, res) => {
    try {
      console.log("Request", req.headers);
      const alumnos =  await Alumno.find({});
      res.status(200).json(alumnos);
    } catch (err) {
      return res.status(400).json({error: err.message})
      }
    }


  insert = async (req, res) => {
    try {
      console.log(req.body)
      const al = await new Alumno(req.body).save();
      res.status(201).json(al);
    } catch (err) {

    }
  }

   count = async (req, res) => {
    try {
      const count = await Alumno.count();
      res.status(200).json(count);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }


  // Get by id
  get = async (req, res) => {
    try {
      const obj = await Alumno.findOne({ _id: req.params.id });
      res.status(200).json(obj);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // Update by id
  update = async (req, res) => {
    try {
      await Alumno.findOneAndUpdate({ _id: req.params.id }, req.body);
      res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  // Delete by id
  delete = async (req, res) => {
    try {
      await Alumno.findOneAndRemove({ _id: req.params.id });
      res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}
}

export default AlumnoController;
