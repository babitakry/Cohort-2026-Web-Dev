// class MathUtils {
//     static add(a, b){
//         return a+b;
//     }
// }

// console.log(MathUtils.add(10, 20));

//----------------------------------------------------------
// class User{
//     constructor(name){
//         this._name = name;
//     }

//     get name(){
//         return this._name;
//     }

//     set name(value){
//         if(value.length < 3){
//             console.log("Name should be at least 3 characters long");
//             return;
//         }
//         this._name = value; 
//     }
// }

// const u = new User("Babita");
// console.log(u.name);
// u.name = "A";
// console.log(u.name);

//----------------------------------------------------------------------
// class Bank{
//     #balance = 0;

//     deposit(amount){
//         this.#balance += amount;
//     }

//     balance(){
//         return this.#balance;
//     }
// }

// const hdfc = new Bank();

// console.log(hdfc.balance());
// hdfc.deposit(10000);
// console.log(hdfc.balance());
// console.log(hdfc.balance);
// hdfc.balance += 2000;
// console.log(hdfc.balance);

//--------------------------------------------------------------------------------
// class Bank{
//     #balance = 0;

//     get balance(){
//         return this.#balance;
//     }

//     set balance(amount){
//         if(amount < 0){
//             console.log("Invalid amount");
//             return;
//         }
//         this.#balance += amount;
//     }
// }

// const hdfc = new Bank();

// console.log(hdfc.balance);
// hdfc.balance = 10000;
// console.log(hdfc.balance);
// hdfc.balance += 100;
// console.log(hdfc.balance);

//--------------------------------------------------------------------------------
class CoffeeMachine{
    #heat(){}
    #brew(){}

    start(){
        this.#heat();
        this.#brew();
    }
}