#! /usr/bin/env node

console.log("This script populates your DB");

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Category = require("./models/category.js");
const Product = require("./models/product.js");

const categories = [];
const products = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCategories();
  await createProducts();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

// We pass the index to the ...Create functions so that, for example,
// genre[0] will always be the Fantasy genre, regardless of the order
// in which the elements of promise.all's argument complete.
async function categoryCreate(index, name, description) {
  const category = new Category({ name: name, description: description });
  await category.save();
  categories[index] = category;
  console.log(`Added category: ${name}`);
}

async function productCreate(index, name, description, category, stock, price) {
  const product = new Product({
    name: name,
    description: description,
    category: category,
    stock: stock,
    price: price,
  });
  await product.save();
  products[index] = product;
  console.log(`Added product: ${name}`);
}

async function createCategories() {
  console.log("Adding categories");
  await Promise.all([
    categoryCreate(0, "Women", "Women products"),
    categoryCreate(1, "Men", "men products"),
    categoryCreate(2, "Children", "Children products"),
  ]);
}

async function createProducts() {
  console.log("Adding products");
  await Promise.all([
    productCreate(
      0,
      "Gazelle blue",
      "Show off a casual style with the adidas Gazelle sneakers. Launched in 1966 as a training shoe, the Gazelle has stood the test of time. Suede upper and rubber sole combine for a vintage look with modern comfort",
      categories[0],
      5,
      50
    ),
    productCreate(
      1,
      "Gazelle green",
      "Show off a casual style with the adidas Gazelle sneakers. Launched in 1966 as a training shoe, the Gazelle has stood the test of time. Suede upper and rubber sole combine for a vintage look with modern comfort",
      categories[2],
      10,
      45
    ),
    productCreate(
      2,
      "Gazelle green",
      "Show off a casual style with the adidas Gazelle sneakers. Launched in 1966 as a training shoe, the Gazelle has stood the test of time. Suede upper and rubber sole combine for a vintage look with modern comfort",
      categories[0],
      10,
      40
    ),
    productCreate(
      3,
      "Forum low white",
      "This classic pair of sneakers brings back '80s attitude, the explosive energy of basketball and the iconic elastic X-band ankle design, distilled into a low-top version designed for the streets.",
      categories[0],
      8,
      55
    ),
    productCreate(
      4,
      "Forum white",
      "The era-defining silhouette instantly connects you to the '80s thanks to unforgettable ankle details and 3-Stripes. Whether you decide to tighten the elastic strap or leave it loose, the style will not be compromised.",
      categories[1],
      10,
      45
    ),
    productCreate(
      5,
      "Campus 80s",
      "One of the icons of adidas Originals. And one of the favorites to stand out with style. Campus sneakers have been setting trends in urban culture for decades thanks to their simple design and unmistakable retro air.",
      categories[2],
      10,
      40
    ),
    productCreate(
      6,
      "Campus 80s",
      "One of the icons of adidas Originals. And one of the favorites to stand out with style. Campus sneakers have been setting trends in urban culture for decades thanks to their simple design and unmistakable retro air.",
      categories[2],
      10,
      45
    ),
    productCreate(
      7,
      "Forum low green",
      "This classic pair of sneakers brings back '80s attitude, the explosive energy of basketball and the iconic elastic X-band ankle design, distilled into a low-top version designed for the streets.",
      categories[1],
      10,
      50
    ),
  ]);
}
