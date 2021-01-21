const mongoose = require('mongoose');

const URI = `mongodb+srv://platzi_admin:jhon198615@cluster0.efbgv.mongodb.net/mern-tasks?retryWrites=true&w=majority`;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));

  module.exports = mongoose;