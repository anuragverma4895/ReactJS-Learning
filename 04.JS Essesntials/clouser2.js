function createBankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        depsoit:function(amount){
            balance+=amount;
            console.log("Balance: " + balance);
        },
        withdraw:function(amount){
            balance-=amount;
            console.log("Balance: "+balance);
        }
    };
}
const account=createBankAccount(1000);
account.depsoit(500);
account.withdraw(200);