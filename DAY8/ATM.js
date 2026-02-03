const sc=require("prompt-sync")();

let balance = 10000
;
let pin = Number(sc("Enter pin: "));

if(pin !== 1234)
{
    console.log("❌ Invalid pin!");
    process.exit();
}
let choice
while(choice!== "4"){
    console.log(`
    1.Check Balance
    2.Deposit
    3.Withdraw
    4.Exit`);
    choice = sc("Enter your Choice: ");

    switch(choice)
    {
        case "1":
            checkBalance();
            break;
        case "2":
            deposit();
            break;
        case "3":
            withdraw();
            break;
        case "4":
            console.log("👋 GoodBye!!!");
            break;
        default:
            console.log("❌ Invalid choice");  

    }
}

function checkBalance()
{
    console.log(`💰 Balance ${balance}`);
}

function deposit()
{
    let dep = Number(sc("Enter Deposit amount: ₹"));
    if(dep > 0)
    {
        balance += dep;
        console.log(`✅ Deposited! New balance: ₹${balance}`);
    }
    else{
        console.log("❌ Invalid amount");
        
    }
}

function withdraw()
{
    let wid = Number(sc("Enter withdraw amount: ₹"));
    if(wid > 0 && wid <= balance)
    {
        balance -= wid;
        console.log(`✅ Withdraw! New balance: ₹${balance}`);
    }
    else
    {
        console.log("❌ Invalid amount");
    }
}
