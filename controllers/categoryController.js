const Category = require("../models/category");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  const categories = await Category.find({}).sort({ name: 1 }).exec();

  res.render("index", {
    title:
      categories.length > 0
        ? "Welcome, search on your categories"
        : "Welcome, Create your own categories",
    categories: categories,
  });
});

//display list of all Categories
exports.category_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});

//display detail page for a specific category
exports.category_detail = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});

//display category create form on GET
exports.category_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});

//display category create form on POST
exports.category_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});

//display category delete form on GET
exports.category_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});

//display category delete form on POST
exports.category_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});

//display category update form on GET
exports.category_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});

//display category update form on POST
exports.category_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});
