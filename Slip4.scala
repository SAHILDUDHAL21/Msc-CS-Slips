object MatrixTranspose {
  def main(args: Array[String]): Unit = {
    val matrix = Array(Array(1, 2, 3), Array(4, 5, 6))
    val rows = 2
    val cols = 3

    val transpose = Array.ofDim[Int](cols, rows)

    for (i <- 0 until rows) {
      for (j <- 0 until cols) {
        transpose(j)(i) = matrix(i)(j)
      }
    }

    println("Original matrix:")
    for (i <- 0 until rows) {
      for (j <- 0 until cols) {
        print(s"${matrix(i)(j)} ")
      }
      println()
    }

    println("Transpose:")
    for (i <- 0 until cols) {
      for (j <- 0 until rows) {
        print(s"${transpose(i)(j)} ")
      }
      println()
    }
  }
}