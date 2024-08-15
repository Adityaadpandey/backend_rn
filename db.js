const mongoose = require('mongoose');

const MONGO_URI = `mongodb+srv://Aditya:adpandey@cluster0.h40tx.mongodb.net/Note_rn?retryWrites=true&w=majority`;


mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });