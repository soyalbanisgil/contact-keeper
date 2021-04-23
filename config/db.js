const mongose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

/* conectar base de datos sin usar Async/Await
const connectDB = () => {
  mongose
    .connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });
};

*/

// Conectar base de datos usando Aync/Await
const connectDB = async () => {
  try {
    await mongose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
