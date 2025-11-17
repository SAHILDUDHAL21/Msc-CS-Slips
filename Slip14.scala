// Design an abstract class Employee with computeSal() as an
// abstract function. Create two subclasses Worker and Manager.
// Salary of worker should be calculated on hourly basis of work and
// Salary of Manager should be calculated on monthly basis with
// additional incentives. Create five objects each of Worker and
// Manager class, and display their details.

abstract class Employee(val name: String) {
  def computeSal(): Double
}
class Worker(name: String, val hoursWorked: Int, val hourlyRate: Double) extends Employee(name) {
  override def computeSal(): Double = hoursWorked * hourlyRate
}
class Manager(name: String, val monthlySalary: Double, val incentives: Double) extends Employee(name) {
  override def computeSal(): Double = monthlySalary + incentives
}
object EmployeeApp {
  def main(args: Array[String]): Unit = {
    val employees: List[Employee] = List(
      new Worker("Alice", 160, 15.0),
      new Worker("Bob", 150, 20.0),
      new Worker("Charlie", 170, 18.0),
      new Worker("David", 140, 22.0),
      new Worker("Eve", 155, 19.0),
      new Manager("Frank", 3000.0, 500.0),
      new Manager("Grace", 3200.0, 600.0),
      new Manager("Heidi", 3100.0, 550.0),
      new Manager("Ivan", 3300.0, 700.0),
      new Manager("Judy", 3400.0, 650.0)
    )

    employees.foreach { emp =>
      println(s"Employee: ${emp.name}, Salary: ${emp.computeSal()}")
    }
  }
}