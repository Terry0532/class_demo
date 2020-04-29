function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance];
  this.getBalance = function () {
    return this.balance;
  };
  this.getStatement = function () {
    return this.statement;
  };
  this.printBalance = function () {
    console.log(`Balance: ${this.getBalance()}`);
  };
  this.printStatement = function () {
    for (let item of this.statement) {
      console.log(item);
    }
  };
  this.setBalance = function (value) {
    return this.balance = value;
  };
  this.updateStatement = function (value) {
    return this.statement.push(value);
  };
  this.deposit = function (value) {
    let newTotal = this.balance + value;
    this.updateStatement(value);
    this.setBalance(newTotal);
  };
  this.withdraw = function (value) {
    let negativeValue = -Math.abs(value);
    let newTotal = this.balance - value;
    this.updateStatement(negativeValue);
    this.setBalance(newTotal);
  };
}

const bank = new MiniBank(100);
bank.printBalance();
bank.deposit(100);
bank.printBalance();
bank.withdraw(50);
bank.printBalance();
bank.printStatement();