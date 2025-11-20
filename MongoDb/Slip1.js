// 1. Model the following Department system as a document database.
// Consider a set of students, course and marks. A student can
// register for more than one course.
// 2. Assume appropriate attributes and collections as per the query
// requirements.
// 3. Insert at least 10 documents in each collection.
// 4. Answer the following Queries
// a. Count the number of students having more than 80 percentage.
// b. List the name and age of students with marks less than 40.
// c. Find all female students which either live in Pune and Mumbai
// or got percentage less than 50.


db.students.insertMany([
  { "_id": "S1", "name": "Amit Shah", "age": 20, "gender": "Male", "city": "Pune" },
  { "_id": "S2", "name": "Riya Patil", "age": 21, "gender": "Female", "city": "Mumbai" },
  { "_id": "S3", "name": "Sahil Khan", "age": 22, "gender": "Male", "city": "Delhi" },
  { "_id": "S4", "name": "Neha Khedekar", "age": 20, "gender": "Female", "city": "Pune" },
  { "_id": "S5", "name": "Rahul Desai", "age": 23, "gender": "Male", "city": "Chennai" },
  { "_id": "S6", "name": "Pooja Kulkarni", "age": 19, "gender": "Female", "city": "Mumbai" },
  { "_id": "S7", "name": "Vikas Yadav", "age": 21, "gender": "Male", "city": "Pune" },
  { "_id": "S8", "name": "Sneha Joshi", "age": 22, "gender": "Female", "city": "Nagpur" },
  { "_id": "S9", "name": "Aditya Mishra", "age": 20, "gender": "Male", "city": "Mumbai" },
  { "_id": "S10", "name": "Komal Shah", "age": 21, "gender": "Female", "city": "Pune" }
]);

db.courses.insertMany([
  { "_id": "C1", "name": "Mathematics" },
  { "_id": "C2", "name": "Physics" },
  { "_id": "C3", "name": "Chemistry" },
  { "_id": "C4", "name": "Biology" },
  { "_id": "C5", "name": "Computer Science" }
]);

db.marks.insertMany([
  { "student_id": "S1", "course_id": "C1", "marks": 85 },
  { "student_id": "S1", "course_id": "C2", "marks": 78 },
  { "student_id": "S2", "course_id": "C1", "marks": 92 },
  { "student_id": "S2", "course_id": "C3", "marks": 88 },
  { "student_id": "S3", "course_id": "C2", "marks": 45 },
  { "student_id": "S3", "course_id": "C4", "marks": 55 },
  { "student_id": "S4", "course_id": "C1", "marks": 35 },
  { "student_id": "S4", "course_id": "C5", "marks": 40 },
  { "student_id": "S5", "course_id": "C3", "marks": 60 },
  { "student_id": "S5", "course_id": "C4", "marks": 70 },
  { "student_id": "S6", "course_id": "C2", "marks": 30 },
  { "student_id": "S6", "course_id": "C5", "marks": 50 },
  { "student_id": "S7", "course_id": "C1", "marks": 88 },
  { "student_id": "S7", "course_id": "C3", "marks": 76 },
  { "student_id": "S8", "course_id": "C4", "marks": 42 },
  { "student_id": "S8", "course_id": "C5", "marks": 38 },
  { "student_id": "S9", "course_id": "C2", "marks": 95 },
  { "student_id": "S9", "course_id": "C3", "marks": 89 },
  { "student_id": "S10", "course_id": "C1", "marks": 48 },
  { "student_id": "S10", "course_id": "C4", "marks": 52 }
]);

// a. Count the number of students having more than 80 percentage.
db.marks.aggregate([
  { $match: { percentage: { $gt: 80 } } },
  { $count: "StudentsAbove80" }
]);

// b. List the name and age of students with marks less than 40.
db.marks.aggregate([
  { $match: { marks: { $lt: 40 } } },
  {
    $lookup: {
      from: "students",
      localField: "student_id",
      foreignField: "_id",
      as: "student_info"
    }
  },
  { $unwind: "$student_info" },
  {
    $project: {
      _id: 0,
      name: "$student_info.name",
      age: "$student_info.age"
    }
  }
]);

// c. Find all female students which either live in Pune and Mumbai or got percentage less than 50.
db.students.aggregate([
  {
    $match: {
      gender: "Female",
      $or: [
        { city: { $in: ["Pune", "Mumbai"] } },
        {
          $expr: {
            $lt: [
              {
                $avg: {
                  $map: {
                    input: {
                      $filter: {
                        input: "$$marks",
                        as: "mark",
                        cond: { $eq: ["$$mark.student_id", "$_id"] }
                      }
                    },
                    as: "m",
                    in: "$$m.marks"
                  }
                }
              },
              50
            ]
          }
        }
      ]
    }
  }
]);