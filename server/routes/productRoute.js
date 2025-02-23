import express from "express";

import {
  create,
  deleteProduct,
  getALLProducts,
  getProductById,
  updateProduct,
} from "../controller/productController.js";

const route = express.Router();

route.post("/product", create);
route.get("/products", getALLProducts);
route.get("/product/:id", getProductById);
route.put("/update/product/:id", updateProduct);
route.delete("/delete/product/:id", deleteProduct);

export default route;
