  import express from "express";
  import mongoose from "mongoose";
  import cors from "cors";
  import Product from "./model/productModel.js";

  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    res.json({
      message: "Welcome",
    });
  });

  app.get("/product", async (req, res) => {
    try {
      const product = await Product.find({});
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/product/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const products = await Product.findById(id);
      res.status(200).json(products); 
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  app.put("/product/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedProduct) {
        return res
          .status(404)
          .json({ message: `Cannot Find a Product With ID : ${id}` }); 
      }
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  app.delete('/product/:id', async(req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
      if (!product) {
        return res.status(404).json({ message: `Tidak Dapat Menemukan Product dengan id ${id}` });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message }); 
    }
  });

  app.post("/product", async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    } 
  });

  try {
    await mongoose.connect("mongodb+srv://rovineshutabarat23:rovinbarat2310@dbmahasiswa.mgh0ko1.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running....");
    });
  } catch (error) {
    console.log(error);
  }
  