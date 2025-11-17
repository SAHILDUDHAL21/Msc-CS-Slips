// Create an abstract class Order (id, description). Derive two classes
// PurchaseOrder and SalesOrder with details of Supplier and Customer
// respectively. Create object of each PurchaseOrder And SalesOrder.
// Display the details of the supplier and customer.


abstract class Order(val id: Int, val description: String) {
  def display(): Unit
}

class PurchaseOrder(id: Int, description: String, val supplier: String)
  extends Order(id, description) {
  override def display(): Unit = {
    println(s"Purchase Order ID: $id")
    println(s"Description: $description")
    println(s"Supplier: $supplier")
  }
}

class SalesOrder(id: Int, description: String, val customer: String)
  extends Order(id, description) {
  override def display(): Unit = {
    println(s"Sales Order ID: $id")
    println(s"Description: $description")
    println(s"Customer: $customer")
  }
}

object OrderApp {
  def main(args: Array[String]): Unit = {
    val purchaseOrder = new PurchaseOrder(1, "Office Supplies", "ABC Supplies Co.")
    val salesOrder = new SalesOrder(2, "Electronics", "XYZ Retailers Ltd.")

    println("Purchase Order Details:")
    purchaseOrder.display()
    println("\nSales Order Details:")
    salesOrder.display()
  }
}   

// sahil@Sahils-MacBook-Pro scalala % scalac Slip3.scala      
// sahil@Sahils-MacBook-Pro scalala % scala_legacy Slip3.scala
// [warning] The MainGenericRunner class and 'legacy_scala' command have been deprecated for removal in Scala 3.8.0.
// [warning] Please be sure to migrate to the scala command (Scala CLI).
// Purchase Order Details:
// Purchase Order ID: 1
// Description: Office Supplies
// Supplier: ABC Supplies Co.

// Sales Order Details:
// Sales Order ID: 2
// Description: Electronics
// Customer: XYZ Retailers Ltd.
// sahil@Sahils-MacBook-Pro scalala % 