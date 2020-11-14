import * as mongoose from 'mongoose';

async function setMongo(): Promise<any> {
  const uriMongo = "mongodb+srv://webuser:tvbl6u1m@webapp.hp4yo.mongodb.net/webclase?retryWrites=true&w=majority";
  mongoose.Promise = global.Promise;
  mongoose.set('useCreateIndex', true);
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useUnifiedTopology', true);
  await mongoose.connect(uriMongo);
  console.log("me he conectado a mongo");
}
export default setMongo;

