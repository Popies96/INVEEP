const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();


app.use(cors({
  origin: 'http://localhost:4200', 
  methods: 'GET,POST,PUT,DELETE',
}));
app.use(express.json());


app.use('/users', userRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
