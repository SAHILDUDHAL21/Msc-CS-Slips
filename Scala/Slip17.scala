// Define a class SavingAccount (accNo, name, balance, minBalance).
// Define appropriate constructors and operations withdraw(),
// deposit(), viewBalance(). Create an array of SavingAccount objects
// and perform operations and display them.

class SavingAccount(val accNo: Int, val name: String, private var balance: Double, val minBalance: Double) {

  def withdraw(amount: Double): Unit = {
    if (balance - amount >= minBalance) {
      balance -= amount
      println(s"Withdrew $$${amount}. New balance: $$${balance}")
    } else {
      println(s"Withdrawal of $$${amount} denied. Minimum balance requirement not met.")
    }
  }

  def deposit(amount: Double): Unit = {
    balance += amount
    println(s"Deposited $$${amount}. New balance: $$${balance}")
  }

  def viewBalance(): Unit = {
    println(s"Account No: $accNo, Name: $name, Balance: $$${balance}")
  }
}
object Slip17 {
  def main(args: Array[String]): Unit = {
    val accounts = Array(
      new SavingAccount(101, "Alice", 5000.0, 1000.0),
      new SavingAccount(102, "Bob", 3000.0, 500.0),
      new SavingAccount(103, "Charlie", 7000.0, 2000.0)
    )

    // Perform operations on each account
    accounts(0).viewBalance()
    accounts(0).withdraw(2000.0)
    accounts(0).deposit(1500.0)
    accounts(0).viewBalance()

    accounts(1).viewBalance()
    accounts(1).withdraw(2800.0) 
    accounts(1).deposit(1000.0)
    accounts(1).viewBalance()

    accounts(2).viewBalance()
    accounts(2).withdraw(4000.0)
    accounts(2).deposit(500.0)
    accounts(2).viewBalance()
  }
}
