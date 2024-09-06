// routes/userRoutes.js

import express from "express";
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js"; // Adjust the path according to your project structure

const router = express.Router();

// Create a new user
router.post("/", createUser);

// Get all users
router.get("/", getUsers);

// Get a single user by ID
router.get("/:id", getUser);

// Update a user by ID
router.put("/:id", updateUser);

// Delete a user by ID
router.delete("/:id", deleteUser);

export default router;
