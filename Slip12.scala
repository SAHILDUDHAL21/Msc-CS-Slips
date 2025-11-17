// Write a program for multiplication of two matrices. Find
// determinant of resultant matrix.


object MatrixMultiplicationDeterminant {
  def main(args: Array[String]): Unit = {
    val a = Array(Array(1, 2, 3), Array(4, 5, 6), Array(7, 8, 9))
    val b = Array(Array(9, 8, 7), Array(6, 5, 4), Array(3, 2, 1))

    val res = Array.ofDim[Int](3, 3)
    for (i <- 0 until 3; j <- 0 until 3; k <- 0 until 3) res(i)(j) += a(i)(k) * b(k)(j)

    println("Result:")
    for (i <- 0 until 3) {
      for (j <- 0 until 3) print(res(i)(j) + " ")
      println()
    }

    val det = det3(res)
    println(s"Determinant: $det")
  }

  // direct 3x3 determinant formula
  def det3(m: Array[Array[Int]]): Int =
    m(0)(0) * (m(1)(1) * m(2)(2) - m(1)(2) * m(2)(1)) -
    m(0)(1) * (m(1)(0) * m(2)(2) - m(1)(2) * m(2)(0)) +
    m(0)(2) * (m(1)(0) * m(2)(1) - m(1)(1) * m(2)(0))
}