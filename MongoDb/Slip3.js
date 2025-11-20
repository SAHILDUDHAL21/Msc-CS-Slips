// 1. Model the following books system as a document database.
// Consider a set of books and publishers A publisher can publish
// more than one book.
// 2. Assume appropriate attributes and collections as per the query
// requirements.
// 3. Insert at least 10 documents in each collection.
// 4. Answer the following Queries.
// a. List the details of books with a cost >1000.
// b. List all the book which are written by “RaghuRamkrishnan”
// and published in 2017
// c. List all the books published by “O Reilly” and are written
// either in English or Marathi

db.books.insertMany([
  { _id: "B1", title: "Database Systems Concepts", author: "RaghuRamkrishnan", year: 2017, cost: 1500, language: "English", publisherId: "P1" },
  { _id: "B2", title: "Learning Python", author: "Mark Lutz", year: 2016, cost: 1200, language: "English", publisherId: "P2" },
  { _id: "B3", title: "JavaScript: The Good Parts", author: "Douglas Crockford", year: 2008, cost: 900, language: "English", publisherId: "P3" },
  { _id: "B4", title: "Effective Java", author: "Joshua Bloch", year: 2017, cost: 1300, language: "English", publisherId: "P1" },
  { _id: "B5", title: "Head First Design Patterns", author: "Eric Freeman", year: 2004, cost: 1100, language: "English", publisherId: "P2" },
  { _id: "B6", title: "Clean Code", author: "Robert C. Martin", year: 2008, cost: 1400, language: "English", publisherId: "P3" },
  { _id: "B7", title: "Introduction to Algorithms", author: "Thomas H. Cormen", year: 2009, cost: 1600, language: "English", publisherId: "P1" },
  { _id: "B8", title: "The Pragmatic Programmer", author: "Andrew Hunt", year: 1999, cost: 950, language: "English", publisherId: "P2" },
  { _id: "B9", title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", year: 2017, cost: 1700, language: "English", publisherId: "P3" },
  { _id: "B10", title: "Learning SQL", author: "Alan Beaulieu", year: 2009, cost: 800, language: "English", publisherId: "P1" }
]);

db.publishers.insertMany([
  { _id: "P1", name: "O Reilly", location: "USA" },
  { _id: "P2", name: "Pearson", location: "UK" },
  { _id: "P3", name: "Packt Publishing", location: "UK" }
]);

// a. List the details of books with a cost >1000.
db.books.find({ cost: { $gt: 1000 } });

// b. List all the book which are written by “RaghuRamkrishnan” and published in 2017
db.books.find({ author: "RaghuRamkrishnan", year: 2017 });

// c. List all the books published by “O Reilly” and are written
// either in English or Marathi
db.books.aggregate([
  {
    $lookup: {
      from: "publishers",
      localField: "publisherId",
      foreignField: "_id",
      as: "publisherDetails"
    }
  },
  { $unwind: "$publisherDetails" },
  {
    $match: {
      "publisherDetails.name": "O Reilly",
      language: { $in: ["English", "Marathi"] }
    }
  }
]);
 