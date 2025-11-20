// 1. Model the following Hospital information system as a document
// database.
// Consider hospitals in and around Pune. Each hospital may have one
// or more specializations like Pediatric, Gynaec, Orthopaedic, etc. A
// person can recommend/provide review for a hospital. A doctor can
// be associated with one or more hospitals.
// 2. Assume appropriate attributes and collections as per the query
// requirements.
// 3. Insert at least 10 documents in each collection.
// 4. Answer the following Queries
// a. List the names of hospitals with pediatric specialization.
// b. List the Names of doctors who are visiting “Jehangir Hospital ”
// on Mondays.
// c. List the names of people who have given a rating of (>=3) for
// “Jehangir Hospital”

db.hospitals.insertMany([
  { _id: "H1", name: "Jehangir Hospital", specializations: ["Pediatric", "Orthopaedic"] },
  { _id: "H2", name: "Ruby Hall Clinic", specializations: ["Gynaec", "Cardiology"] },
  { _id: "H3", name: "Sahyadri Hospitals", specializations: ["Neurology", "Pediatric"] },
  { _id: "H4", name: "Aditya Birla Memorial Hospital", specializations: ["Orthopaedic", "Gynaec"] },
  { _id: "H5", name: "Columbia Asia Hospital", specializations: ["Cardiology", "Pediatric"] },
  { _id: "H6", name: "Deenanath Mangeshkar Hospital", specializations: ["Gynaec", "Neurology"] },
  { _id: "H7", name: "Poona Hospital", specializations: ["Orthopaedic", "Cardiology"] },
  { _id: "H8", name: "Lokmanya Hospital", specializations: ["Pediatric", "Gynaec"] },
  { _id: "H9", name: "Mahatma Gandhi Mission Hospital", specializations: ["Neurology", "Orthopaedic"] },
  { _id: "H10", name: "Jehangir Specialty Hospital", specializations: ["Cardiology", "Pediatric"] }
]);

db.doctors.insertMany([
  { _id: "D1", name: "Dr. Aditi Sharma", visitingHospitals: [{ hospitalId: "H1", day: "Monday" }, { hospitalId: "H3", day: "Wednesday" }] },
  { _id: "D2", name: "Dr. Rahul Verma", visitingHospitals: [{ hospitalId: "H2", day: "Tuesday" }, { hospitalId: "H4", day: "Thursday" }] },
  { _id: "D3", name: "Dr. Sneha Kulkarni", visitingHospitals: [{ hospitalId: "H1", day: "Monday" }, { hospitalId: "H5", day: "Friday" }] },
  { _id: "D4", name: "Dr. Vikram Joshi", visitingHospitals: [{ hospitalId: "H6", day: "Wednesday" }, { hospitalId: "H7", day: "Saturday" }] },
  { _id: "D5", name: "Dr. Priya Nair", visitingHospitals: [{ hospitalId: "H8", day: "Monday" }, { hospitalId: "H9", day: "Thursday" }] },
  { _id: "D6", name: "Dr. Karan Mehta", visitingHospitals: [{ hospitalId: "H10", day: "Friday" }, { hospitalId: "H2", day: "Tuesday" }] },
  { _id: "D7", name: "Dr. Anjali Desai", visitingHospitals: [{ hospitalId: "H3", day: "Monday" }, { hospitalId: "H4", day: "Wednesday" }] },
  { _id: "D8", name: "Dr. Suresh Patil", visitingHospitals: [{ hospitalId: "H5", day: "Thursday" }, { hospitalId: "H6", day: "Saturday" }] },
  { _id: "D9", name: "Dr. Meera Rao", visitingHospitals: [{ hospitalId: "H7", day: "Monday" }, { hospitalId: "H8", day: "Friday" }] },
  { _id: "D10", name: "Dr. Amitabh Singh", visitingHospitals: [{ hospitalId: "H9", day: "Tuesday" }, { hospitalId: "H10", day: "Thursday" }] }
]);

db.reviews.insertMany([
  { _id: "R1", personName: "Rajesh Kumar", hospitalId: "H1", rating: 4, comment: "Excellent care!" },
  { _id: "R2", personName: "Anita Deshmukh", hospitalId: "H2", rating: 3, comment: "Good services." },
  { _id: "R3", personName: "Vikram Singh", hospitalId: "H1", rating: 5, comment: "Highly recommended!" },
  { _id: "R4", personName: "Sunita Patil", hospitalId: "H3", rating: 2, comment: "Average experience." },
  { _id: "R5", personName: "Karan Mehta", hospitalId: "H1", rating: 3, comment: "Satisfactory." },
  { _id: "R6", personName: "Priya Sharma", hospitalId: "H4", rating: 4, comment: "Very good staff." },
  { _id: "R7", personName: "Amit Joshi", hospitalId: "H5", rating: 5, comment: "Outstanding service!" },
  { _id: "R8", personName: "Neha Kulkarni", hospitalId: "H1", rating: 4, comment: "Great experience." },
  { _id: "R9", personName: "Rohit Verma", hospitalId: "H6", rating: 2, comment: "Could be better." },
  { _id: "R10", personName: "Sneha Nair", hospitalId: "H1", rating: 5, comment: "Will visit again!" }
]);

// a. List the names of hospitals with pediatric specialization.
db.hospitals.find({ specializations: "Pediatric" }, { name: 1, _id: 0 });

// b. List the Names of doctors who are visiting “Jehangir Hospital ” on Mondays.
db.doctors.aggregate([
  { $unwind: "$visitingHospitals" },
  {
    $lookup: {
      from: "hospitals",
      localField: "visitingHospitals.hospitalId",
      foreignField: "_id",
      as: "hospitalDetails"
    }
  },
  { $unwind: "$hospitalDetails" },
  {
    $match: {
      "hospitalDetails.name": "Jehangir Hospital",
      "visitingHospitals.day": "Monday"
    }
  },
  { $project: { name: 1, _id: 0 } }
]);

// c. List the names of people who have given a rating of (>=3) for
// “Jehangir Hospital”

db.reviews.aggregate([
  {
    $lookup: {
      from: "hospitals",
      localField: "hospitalId",
      foreignField: "_id",
      as: "hospitalDetails"
    }
  },
  { $unwind: "$hospitalDetails" },
  {
    $match: {
      "hospitalDetails.name": "Jehangir Hospital",
      rating: { $gte: 3 }
    }
  },
  { $project: { personName: 1, _id: 0 } }
]);
