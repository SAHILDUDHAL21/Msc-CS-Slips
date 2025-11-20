// 1. Model the following sales system as a document database.
// Consider a set of products, customers, orders and invoices. An
// invoice is generated when an order is processed.
// 2. Assume appropriate attributes and collections as per the query
// requirements.
// 3. Insert at least 10 documents in each collection.
// 4. Answer the following Queries.
// a. List all products in the inventory.
// b. List the details of orders with a value >10000.
// c. List all the orders along with their invoice for “Mr. Arun Kumar”.

db.products.insertMany([
  { _id: "P1", name: "Laptop", price: 55000, stock: 20 },
  { _id: "P2", name: "Smartphone", price: 25000, stock: 50 },
  { _id: "P3", name: "Keyboard", price: 800, stock: 100 },
  { _id: "P4", name: "Monitor", price: 12000, stock: 30 },
  { _id: "P5", name: "Mouse", price: 600, stock: 80 },
  { _id: "P6", name: "Headphones", price: 1500, stock: 60 },
  { _id: "P7", name: "Tablet", price: 18000, stock: 25 },
  { _id: "P8", name: "Printer", price: 10000, stock: 15 },
  { _id: "P9", name: "Chair", price: 3000, stock: 40 },
  { _id: "P10", name: "UPS", price: 4000, stock: 20 }
]);

db.customers.insertMany([
  { _id: "C1", name: "Arun Kumar", city: "Pune" },
  { _id: "C2", name: "Rohan Mehta", city: "Mumbai" },
  { _id: "C3", name: "Priya Shah", city: "Delhi" },
  { _id: "C4", name: "Kiran Patil", city: "Chennai" },
  { _id: "C5", name: "Suresh Gupta", city: "Bangalore" },
  { _id: "C6", name: "Komal Jain", city: "Nagpur" },
  { _id: "C7", name: "Manish Yadav", city: "Pune" },
  { _id: "C8", name: "Seema Desai", city: "Surat" },
  { _id: "C9", name: "Dinesh Rathod", city: "Nashik" },
  { _id: "C10", name: "Meena Shinde", city: "Pune" }
]);

db.orders.insertMany([
  { _id: "O1", customerId: "C1", productId: "P1", quantity: 1, total: 55000 },
  { _id: "O2", customerId: "C2", productId: "P2", quantity: 1, total: 25000 },
  { _id: "O3", customerId: "C3", productId: "P4", quantity: 1, total: 12000 },
  { _id: "O4", customerId: "C4", productId: "P6", quantity: 2, total: 3000 },
  { _id: "O5", customerId: "C5", productId: "P7", quantity: 1, total: 18000 },
  { _id: "O6", customerId: "C6", productId: "P9", quantity: 3, total: 9000 },
  { _id: "O7", customerId: "C7", productId: "P8", quantity: 1, total: 10000 },
  { _id: "O8", customerId: "C8", productId: "P3", quantity: 10, total: 8000 },
  { _id: "O9", customerId: "C9", productId: "P10", quantity: 2, total: 8000 },
  { _id: "O10", customerId: "C1", productId: "P5", quantity: 5, total: 3000 }
]);

db.invoices.insertMany([
  { _id: "I1", orderId: "O1", invoiceDate: "2024-01-10", amount: 55000 },
  { _id: "I2", orderId: "O2", invoiceDate: "2024-01-12", amount: 25000 },
  { _id: "I3", orderId: "O3", invoiceDate: "2024-01-13", amount: 12000 },
  { _id: "I4", orderId: "O4", invoiceDate: "2024-01-14", amount: 3000 },
  { _id: "I5", orderId: "O5", invoiceDate: "2024-01-15", amount: 18000 },
  { _id: "I6", orderId: "O6", invoiceDate: "2024-01-16", amount: 9000 },
  { _id: "I7", orderId: "O7", invoiceDate: "2024-01-17", amount: 10000 },
  { _id: "I8", orderId: "O8", invoiceDate: "2024-01-18", amount: 8000 },
  { _id: "I9", orderId: "O9", invoiceDate: "2024-01-19", amount: 8000 },
  { _id: "I10", orderId: "O10", invoiceDate: "2024-01-20", amount: 3000 }
]);


// a. List all products in the inventory.
db.products.find({});

// b. List the details of orders with a value >10000.
db.orders.find({ total: { $gt: 10000 } });

// c. List all the orders along with their invoice for “Mr. Arun Kumar”.
db.orders.aggregate([
  {
    $match: { customerId: "C1" }
  },
  {
    $lookup: {
      from: "invoices",
      localField: "_id",
      foreignField: "orderId",
      as: "invoiceDetails"
    }
  }
]); 