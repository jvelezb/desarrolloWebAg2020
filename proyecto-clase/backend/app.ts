import * as express from 'express';
import * as morgan from 'morgan';

import setMongo from './mongo';
import setRoutes from './routes';
const { join } = require("path");
const cors = require("cors"); //importar cors para su uso
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};


const app = express();
app.set('port', 3000);






app.use(express.json());
app.use(cors(corsOptions));
app.options("*", cors());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
async function main(): Promise<any>{
  try {
    await setMongo();
    setRoutes(app);

    app.listen(app.get('port'), () => console.log(`Backend funciona en el puerto ${app.get('port')}`));

  } catch (error) {
    console.error(error);
  }
}

main();

export {app}

