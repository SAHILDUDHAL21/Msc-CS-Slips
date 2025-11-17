// Write a program to create a list of 1 to 20 numbers. Create second list
// from first list selecting numbers which are cube of a number. Display
// second list.

object Slip20 {
  def main(args: Array[String]): Unit = {
    val numbers = (1 to 20).toList

    val buf = scala.collection.mutable.ListBuffer[Int]()
    for (n <- numbers) {
      val root = Math.cbrt(n).toInt
      if (root * root * root == n) buf += n
    }
    val cubes = buf.toList

    println("Cubes from 1 to 20:")
    println(cubes.mkString(", "))
  }
}