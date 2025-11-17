// Write a program to create a list of 1 to 100 numbers. Create second
// list from first list selecting numbers which are perfect square.
// Display second list.

object Slip16 {
  def main(args: Array[String]): Unit = {
    val numbers = (1 to 100).toList

    val buf = scala.collection.mutable.ListBuffer[Int]()
    for (n <- numbers) {
      val root = Math.sqrt(n).toInt
      if (root * root == n) buf += n
    }
    val perfectSquares = buf.toList

    println("Perfect squares from 1 to 100:")
    println(perfectSquares.mkString(", "))
  }
}