// Create array of strings and read a string from user. Display all the
// strings from the array that contain the given string.

object Slip8 {
  def main(args: Array[String]): Unit = {
    val arr = Array("hello", "world", "scala", "programming", "language", "functional", "java", "javascript")
    val searchStr = "a"

    val result = scala.collection.mutable.ListBuffer[String]()
    
    for (str <- arr) {
      if (str.contains(searchStr)) {
        result += str
      }
    }

    if (result.isEmpty) {
      println(s"No strings found containing '$searchStr'.")
    } else {
      println(s"Strings containing '$searchStr':")
      result.foreach(println)
    }
  }
}