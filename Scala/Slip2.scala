// Write a program to calculate average of all prime numbers between n1
// and n2 (Accept n1 and n2 from user).


import scala.io.StdIn.readInt

object PrimeAverageDSA {

  def isPrime(n: Int): Boolean = {
    if (n <= 1) return false
    if (n == 2) return true
    if (n % 2 == 0) return false

    var i = 3
    while (i * i <= n) {
      if (n % i == 0) return false
      i += 2
    }
    true
  }

  def main(args: Array[String]): Unit = {

    print("Enter n1: ")
    val n1 = readInt()

    print("Enter n2: ")
    val n2 = readInt()

    var sum = 0
    var count = 0

    for (i <- n1 to n2) {
      if (isPrime(i)) {
        sum += i
        count += 1
      }
    }

    if (count == 0) {
      println("No prime numbers found in the range.")
    } else {
      val avg = sum.toDouble / count
      println(s"Average of primes = $avg")
    }
  }
}



// sahil@Sahils-MacBook-Pro scalala % scalac Slip2.scala      
// sahil@Sahils-MacBook-Pro scalala % scala_legacy Slip2.scala
// [warning] The MainGenericRunner class and 'legacy_scala' command have been deprecated for removal in Scala 3.8.0.
// [warning] Please be sure to migrate to the scala command (Scala CLI).
// Enter n1: 2
// Enter n2: 9
// Average of primes = 4.25
// sahil@Sahils-MacBook-Pro scalala % 