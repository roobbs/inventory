const Product = require("../models/product");
const Category = require("../models/category");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

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
  const product = await Product.findById(req.params.id)
    .populate("category")
    .exec();

  if (product === null) {
    const err = new Error("Product not found");
    err.status = 404;
    return next(err);
  }

  res.render("product_detail", {
    title: product.name,
    product: product,
  });
});

//display product create form on GET
exports.product_create_get = asyncHandler(async (req, res, next) => {
  const categories = await Category.find({}).exec();
  res.render("product_form", {
    title: "Create new product",
    categories: categories,
  });
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
