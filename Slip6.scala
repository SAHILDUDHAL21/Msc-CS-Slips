// Write a program to read a character and a string from user and
// remove first and last occurrence of the character from the string.
// Display resultant string after reversing its case.



object Slip6 {
  def main(args: Array[String]): Unit = {
    print("Enter a character: ")
    val ch = readChar()

    print("Enter a string: ")
    val str = readLine()

    val firstIndex = str.indexOf(ch)
    val lastIndex = str.lastIndexOf(ch)

    val sb = new StringBuilder(str)

    if (firstIndex != -1) sb.deleteCharAt(firstIndex)
    if (lastIndex != -1 && lastIndex != firstIndex) sb.deleteCharAt(lastIndex - (if (lastIndex > firstIndex) 1 else 0))

    val result = sb.map { c =>
      if (c.isLower) c.toUpper
      else if (c.isUpper) c.toLower
      else c
    }.mkString

    println(s"Resultant string: $result")
  }
}