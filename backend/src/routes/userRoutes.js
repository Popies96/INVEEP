// routes/userRoutes.js

import express from "express";
import {
  
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
  registerUser,
} from "../controllers/userController.js"; // Adjust the path according to your project structure
import authMiddleware from "../midlleware/authMiddleware.js"
const router = express.Router();

// Register a new user
router.post("/register", registerUser);

// Login a user
router.post("/login", loginUser);





// Get all users
router.get("/", getUsers);

// Get a single user by ID
router.get("/:id", getUser);

// Update a user by ID
router.put("/:id", updateUser);

// Delete a user by ID
router.delete("/:id", deleteUser);

export default router;
