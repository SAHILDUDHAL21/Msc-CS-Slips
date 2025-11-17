// Create lists using five different methods and display each of
// them.(List style, java style, fill, range, tabulate methods)

object Slip19 {
  def main(args: Array[String]): Unit = {
    // List style
    val listStyle = List(1, 2, 3, 4, 5)
    println(s"List style: $listStyle")

    // Java style
    val javaStyle = new java.util.ArrayList[Int]()
    javaStyle.add(6)
    javaStyle.add(7)
    javaStyle.add(8)
    println(s"Java style: $javaStyle")

    // Fill method
    val fillMethod = List.fill(5)(0)
    println(s"Fill method: $fillMethod")

    // Range method
    val rangeMethod = (1 to 5).toList
    println(s"Range method: $rangeMethod")

    // Tabulate method
    val tabulateMethod = List.tabulate(5)(n => n * n)
    println(s"Tabulate method: $tabulateMethod")
  }
}