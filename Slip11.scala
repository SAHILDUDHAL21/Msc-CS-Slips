// Write a program to read two strings. Find the occurrence of second
// string in the first string. Reverse the case of each occurrence in the
// string and display resultant string

object Slip11 {
  def main(args: Array[String]): Unit = {
    val str1 = "Hello World, welcome to the world of Scala programming."
    val str2 = "world"

    val regex = ("(?i)" + java.util.regex.Pattern.quote(str2)).r

    val result = regex.replaceAllIn(str1, m => reverseCase(m.matched))

    println(s"Original String: $str1")
    println(s"Modified String: $result")
  }

  def reverseCase(s: String): String = {
    s.map {
      case c if c.isLower => c.toUpper
      case c if c.isUpper => c.toLower
      case c => c
    }
  }
}