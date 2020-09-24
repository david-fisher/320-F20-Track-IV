const mongoose = require('mongoose');

module.exports = () => {
  mongoose.set('useCreateIndex', true);
  const connect = () => {
    mongoose.connect(
      // TODO: MUST BE ENCRYPTED
      'mongodb://admin-dev:dev@localhost:27017/admin',
      {
        dbName: 'ethics_simulation',
        useUnifiedTopology: true,
        useNewUrlParser: true,
      },
      (err) => {
        if (err) {
          console.log('mongodb connection err', err);
        } else {
          console.log('mongodb connected');
        }
      }
    );
  };
  connect();
  mongoose.connection.on('disconnected', connect);
  require('./user');
};
