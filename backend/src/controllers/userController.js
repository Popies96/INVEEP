// controllers/userController.js

import db from "../models/index.js"; 
const { users: User } = db; 
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


// Register a new user
export const registerUser = async (req, res) => {
  const { username,lastName,phone,websiteUrl, cin, email, password, location, profile_image, role } =
    req.body;


  try {
    // Validate required fields
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    if (!username) {
      return res.status(400).json({ error: "Username is required" });
    }

    // Check if the email or username already exists
    const existingUser = await User.findOne({ where: { email } });
    const existingUsername = await User.findOne({ where: { username } });

    if (existingUser) {
      return res.status(400).json({ error: "Email is already registered" });
    }

    if (existingUsername) {
      return res.status(400).json({ error: "Username is already taken" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const user = await User.create({
      username,
      lastName,
      phone,
      websiteUrl,
      cin,
      email,
      password: hashedPassword,
      location,
      profile_image,
      role,
    });

    res.status(201).json({message:"user register is done" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "User registration failed" });
  }
};


// Login a user
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ error: "User not found" });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ error: "Invalid credentials" });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: "Login failed" });
    }
};

// Create a new user


// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single user by ID
export const getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a user by ID
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
