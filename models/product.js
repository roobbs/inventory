const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

ProductSchema.virtual("url").get(function () {
  return `/catalog/product/${this._id}`;
});

module.exports = mongoose.model("Product", ProductSchema);
