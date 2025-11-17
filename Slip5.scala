// Write a program to create two sets of strings and find common
// strings between them. Merge sets after removing common strings.
// Display resultant set.

object SetOperations {
  def main(args: Array[String]): Unit = {
    val set1 = Set("apple", "banana", "orange", "grape")
    val set2 = Set("banana", "grape", "mango", "cherry")

    val common = set1.intersect(set2)
    println(s"Common: ${common.mkString(", ")}")

    val result = (set1 -- common) ++ (set2 -- common)
    println(s"Merged (common removed): ${result.mkString(", ")}")
  }
}