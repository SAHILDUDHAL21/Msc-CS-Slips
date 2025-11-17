// Write a program to calculate sum of all perfect numbers between 1
// and 100. Display perfect numbers also.

object Slip18 {
  def main(args: Array[String]): Unit = {
    def isPerfect(n: Int): Boolean = {
      var sumOfDivisors = 0
      var d = 1
      while (d < n) {
        if (n % d == 0) sumOfDivisors += d
        d += 1
      }
      sumOfDivisors == n
    }

    val buf = scala.collection.mutable.ListBuffer[Int]()
    for (i <- 1 to 100) if (isPerfect(i)) buf += i
    val perfectNumbers = buf.toList
    var sumPerfectNumbers = 0
    for (p <- perfectNumbers) sumPerfectNumbers += p

    println(s"Perfect numbers between 1 and 100: ${perfectNumbers.mkString(", ")}")
    println(s"Sum of perfect numbers: $sumPerfectNumbers")
  }
}