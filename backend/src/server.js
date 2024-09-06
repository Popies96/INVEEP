// server.js

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoute from "./routes/userRoutes.js"
import productRoute from "./routes/productRoutes.js"
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:4200", 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, 
  })
);
app.use(express.json());
app.use('/user',userRoute)
app.use('/product',productRoute)
// Routes



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
