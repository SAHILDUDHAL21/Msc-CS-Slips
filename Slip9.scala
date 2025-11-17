// Create a MAP for storing the following information about 5 students,
// where each Student is described with Name and Percentage. Display
// Student information with highest percentage.

object Slip9 {
  def main(args: Array[String]): Unit = {
    val students = Map(
      "Alice"   -> 85.5,
      "Bob"     -> 92.0,
      "Charlie" -> 78.0,
      "David"   -> 88.5,
      "Eve"     -> 91.0
    )

    val (topStudent, topPercentage) = students.maxBy(_._2)

    println(s"Top Student: $topStudent with Percentage: $topPercentage")
  }
}