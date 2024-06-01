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
exports.product_create_post = [
  body("name", "Category name must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),
  body("description", "Description must hace at least 10 characteres")
    .trim()
    .isLength({ min: 10 })
    .escape(),
  body("category", "You must select a category")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("price")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Price must not be empty")
    .toFloat({ gt: 1 })
    .withMessage("Price must be greater than 1")
    .escape(),
  body("stock")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Stock must not be empty")
    .toFloat({ gt: 1 })
    .withMessage("Stock must be greater than 1")
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price,
      stock: req.body.stock,
    });

    if (!errors.isEmpty()) {
      const categories = await Category.find({}).exec();

      res.render("product_form", {
        title: "Create new product",
        product: product,
        categories: categories,
        errors: errors.array(),
      });
      return;
    } else {
      await product.save();
      res.redirect(product.url);
    }
  }),
];

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
