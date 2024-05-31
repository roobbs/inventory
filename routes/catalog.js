const express = require("express");
const router = express.Router();

const category_controller = require("../controllers/categoryController");
const product_controller = require("../controllers/productController");

router.get("/", category_controller.index);

router.get("/category/create", category_controller.category_create_get);
router.post("/category/create", category_controller.category_create_post);
router.get("/category/:id/delete", category_controller.category_delete_get);
router.get("/category/:id/update", category_controller.category_update_get);
router.post("/category/:id/update", category_controller.category_update_post);
router.get("category:id", category_controller.category_detail);
router.get("/categories", category_controller.category_list);

router.get("/product/create", product_controller.product_create_get);
router.post("/product/create", product_controller.product_create_post);
router.get("/product/:id/delete", product_controller.product_delete_get);
router.get("/product/:id/update", product_controller.product_update_get);
router.post("/product/:id/update", product_controller.product_update_post);
router.get("product:id", product_controller.product_detail);
router.get("/products", product_controller.product_list);

module.exports = router;
