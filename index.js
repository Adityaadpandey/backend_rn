const express = require('express');
const app = express();
var cors = require('cors');

require('./db')

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())

//  Avialable Route
app.get('/', (req, res) => {
  res.send('Hello Owner ')
})
// app.use('/api/auth',require('./routes/auth'))

app.use('/api/note', require('./router/Note'))
app.use('/api/user', require('./router/auth'))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});