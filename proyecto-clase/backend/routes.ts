import * as express from 'express';
import { Express } from 'express-serve-static-core';
import AlumnoController from './controllers/alumnoController'
//jwt
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');/// npm
///fin de jwt npm install jsonwebtoken

function setRoutes(app: Express): void{
  const router = express.Router();
  const alumnoController = new AlumnoController();

  router.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.set(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  }
  next();
  }); //funcion habilita el middleware

var jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-qz51ohsc.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://localhost:3000/',
    issuer: 'https://dev-qz51ohsc.auth0.com/',
    algorithms: ['RS256']
});


  router.route("/alumno").get(alumnoController.getAll); //recurso /api/alumno
  router.route('/alumnos/count').get(alumnoController.count);
  router.route('/alumno').post(alumnoController.insert);
  router.route('/alumno/:id').get(alumnoController.get);
  router.route('/alumno/:id').put(alumnoController.update);
  router.route('/alumno/:id').delete(alumnoController.delete);

  //app.use(jwtCheck);


  app.use('/api', router);//baseUri
}
export default setRoutes;
