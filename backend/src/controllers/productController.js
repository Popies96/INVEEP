import db from "../models/index.js"; // Import the initialized models from index.js
const { products: Product } = db;

export const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve products" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product(req.app.locals.sequelize).findByPk(
      req.params.id
    );
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve product" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { name, price, quantite, description } = req.body;
    const product = await Product(req.app.locals.sequelize).findByPk(
      req.params.id
    );

    if (product) {
      product.name = name;
      product.price = price;
      product.quantite = quantite;
      product.description = description;

      await product.save();
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product(req.app.locals.sequelize).findByPk(
      req.params.id
    );
    if (product) {
      await product.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
};
