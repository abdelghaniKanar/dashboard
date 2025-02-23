import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  tag: {
    type: String,
    required: true,
  },
  hashtags: {
    type: String,
    required: true,
  },
  price: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

export default mongoose.model("products", productSchema);
