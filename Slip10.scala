// Create an abstract class Shape with abstract functions volume() and
// display(). Extend two classes Cube and Cylinder from it. Create object
// of Cube and Cylinder. Calculate volume of each and display it.

abstract class Shape {
  def volume(): Double
  def display(): Unit
}
class Cube(side: Double) extends Shape {
  override def volume(): Double = Math.pow(side, 3)

  override def display(): Unit = {
    println(s"Cube Volume: ${volume()}")
  }
}
class Cylinder(radius: Double, height: Double) extends Shape {
  override def volume(): Double = Math.PI * Math.pow(radius, 2) * height

  override def display(): Unit = {
    println(s"Cylinder Volume: ${volume()}")
  }
}
object Slip10 {
  def main(args: Array[String]): Unit = {
    val cube = new Cube(3)
    val cylinder = new Cylinder(2, 5)

    cube.display()
    cylinder.display()
  }
}
