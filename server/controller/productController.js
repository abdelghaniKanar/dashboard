import Product from "../model/productModel.js";

export const create = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const { tag } = newProduct;

    const productExist = await Product.findOne({ tag });
    if (productExist) {
      return res.status(400).json({ message: "Product already exists!" });
    }

    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getALLProducts = async (req, res) => {
  try {
    const productData = await Product.find();
    if (!productData || productData.length === 0) {
      return res.status(404).json({ message: "Products data not found!" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// Get product by id
export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Product.findById(id);
    if (!productExist) {
      return res.status(404).json({ message: "Product not found!" });
    }
    res.status(200).json(productExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// Update product details
export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const productExist = await Product.findById(id);
  if (!productExist) {
    return res.status(404).json({ message: "Product not found!" });
  }
  // id:
  // req.body
  // new (column): true
  const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json(updatedProduct);
  try {
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Product.findById(id);
    if (!productExist) {
      return res.status(404).json({ message: "Product not found!" });
    }
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully!" });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
