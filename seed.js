const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/productmodel"); // Change path if needed

const products = [
  { name: "Gaming Laptop", price: 1499.99, stock: 15 },
  { name: "Mechanical Keyboard", price: 89.99, stock: 40 },
  { name: "Wireless Mouse", price: 39.99, stock: 60 },
  { name: "27-inch Monitor", price: 249.99, stock: 20 },
  { name: "USB-C Hub", price: 34.99, stock: 80 },
  { name: "Bluetooth Speaker", price: 79.99, stock: 30 },
  { name: "Noise Cancelling Headphones", price: 199.99, stock: 25 },
  { name: "Smart Watch", price: 299.99, stock: 18 },
  { name: "Android Smartphone", price: 699.99, stock: 35 },
  { name: "Phone Charger", price: 19.99, stock: 120 },
  { name: "Phone Case", price: 14.99, stock: 150 },
  { name: "Screen Protector", price: 9.99, stock: 200 },
  { name: "Men's Hoodie", price: 49.99, stock: 55 },
  { name: "Women's Jacket", price: 89.99, stock: 35 },
  { name: "Running Shoes", price: 99.99, stock: 45 },
  { name: "Baseball Cap", price: 24.99, stock: 70 },
  { name: "Coffee Maker", price: 79.99, stock: 22 },
  { name: "Vacuum Cleaner", price: 179.99, stock: 15 },
  { name: "Desk Lamp", price: 29.99, stock: 50 },
  { name: "Office Chair", price: 159.99, stock: 18 },
  { name: "Gaming Mouse Pad", price: 19.99, stock: 90 },
  { name: "Gaming Controller", price: 59.99, stock: 40 },
  { name: "Gaming Chair", price: 249.99, stock: 12 },
  { name: "JavaScript Guide", price: 34.99, stock: 40 },
  { name: "Node.js Handbook", price: 29.99, stock: 30 },
  { name: "MongoDB Essentials", price: 24.99, stock: 25 },
  { name: "Football", price: 29.99, stock: 35 },
  { name: "Basketball", price: 24.99, stock: 40 },
  { name: "Yoga Mat", price: 34.99, stock: 28 },
  { name: "Dumbbell Set", price: 119.99, stock: 10 }
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    await Product.deleteMany({});
    console.log("Old products deleted");

    await Product.insertMany(products);
    console.log(`${products.length} products inserted successfully`);

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

module.exports = seedDB

