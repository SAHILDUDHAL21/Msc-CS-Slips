object Slip7 {
  def main(args: Array[String]): Unit = {
    val divisibleBy3 = scala.collection.mutable.ListBuffer[Int]()
    
    for (i <- 1 to 50) {
      if (i % 3 == 0) {
        divisibleBy3 += i
      }
    }
    
    println(s"Numbers divisible by 3: ${divisibleBy3.mkString(", ")}")
  }
}