
// Write a program to create a MAP with empname and deptname.
// Print details of all employees working in the same department,
// formatting employee names as `Mr.Name` (e.g. `Mr.Joshi`).

object Slip1 {
  def main(args: Array[String]): Unit = {
    val empDept = Map(
      "Joshi"  -> "Sales",
      "Sharma" -> "Sales",
      "Khan"   -> "HR",
      "Patel"  -> "IT",
      "Singh"  -> "HR",
      "Rao"    -> "IT"
    )

    val deptToEmps = empDept.groupBy(_._2).map { case (dept, pairs) => dept -> pairs.keys.toList }

    println("Employees grouped by department:")
    deptToEmps.toSeq.sortBy(_._1).foreach { case (dept, emps) =>
      println(s"$dept: ${emps.map(n => s"Mr.$n").mkString(", ")}")
    }
  }
}

