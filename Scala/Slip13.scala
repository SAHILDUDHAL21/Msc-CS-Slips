// Write a program to merge two sets of integers, calculate sum and
// product of all integers in the merged set. Also display largest and
// smallest element from merged set.

object SetMergeSumProduct {
  def main(args: Array[String]): Unit = {
    val set1 = Set(1, 2, 3, 4, 5)
    val set2 = Set(4, 5, 6, 7, 8)

    val mergedSet = set1 ++ set2

    val sum = mergedSet.sum
    val product = mergedSet.product
    val largest = mergedSet.max
    val smallest = mergedSet.min

    println(s"Merged Set: ${mergedSet.mkString(", ")}")
    println(s"Sum: $sum")
    println(s"Product: $product")
    println(s"Largest: $largest")
    println(s"Smallest: $smallest")
  }
}