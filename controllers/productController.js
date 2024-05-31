const Product = require("../models/product");
const asyncHandler = require("express-async-handler");

//display list of all products
exports.product_list = asyncHandler(async (req, res, next) => {
  const products = await Product.find({}).populate("category").exec();

  res.render("product_list", {
    title: "Products",
    products: products,
  });
});

//display detail page for a specific product
exports.product_detail = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});

//display product create form on GET
exports.product_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});

//display product create form on POST
exports.product_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});

//display product delete form on GET
exports.product_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});

//display product delete form on POST
exports.product_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});

//display product update form on GET
exports.product_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});

//display product update form on POST
exports.product_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});
