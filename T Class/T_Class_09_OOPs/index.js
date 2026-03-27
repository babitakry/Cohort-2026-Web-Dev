// const user1 = {
//     name: "Babita",
//     score: 99,
//     increament(){
//         this.score++;
//     }
// }

// const user2 = {
//     name: "ChaiCode",
//     score: 100,
//     increament(){
//         this.score++;
//     }
// }
// console.log(user2);
// console.log(user2.toString());
// console.log(user2.score.toString());

// // Dry principle violet
// // memory waste
// // not scalable

//------------------------------------------------------------------------------------
// From there one concept arises that is Prototype

// const user1 = {
//     name: "Babita",
//     score: 99,
//     increament(){
//         this.score++;
//     }
// }

// const user2 = {
//     __proto__: user1,
// }
// console.log(user2);
// console.log(user2.name, user2.score, user2.increament());
// console.log(user1.name.toString());

// -------------------------------------------------------------------------
// const arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);

// -------------------------------------------------------------------------
// const user1 = {
//     name: "Babita",
//     score: 99,
//     increament(){
//         this.score++;
//     }
// }

// const user2 = {
//     __proto__: user1,
// }

// user2.name = "Angel priya";
// console.log(user2);

// user2.__proto__.name = "Dogesh";
// console.log(user1.name);
//---------------------------------------------------------------------------------------------

// let obj1 = {
//     title: "hello",
// }

// let obj2 = {
    
// }
// obj2.__proto__ = obj1;

// console.log(obj2.title); // hello
// console.log(obj1.title); // hello

// obj2.title = "world";
// console.log(obj2.title); // world
// console.log(obj1.title); // hello

// obj2.__proto__.title = "Hello World this is edited from proto"; // means obj1.titile
// console.log(obj1.title);
// console.log(obj2.title);

//---------------------------------------------------------------------------------------------
// __proto__ se inherit kerna is a old way to inherit
// so let's go to the new way of inheritance
///---------------------------------------------------------------------------------------------

// const user1 = {
//     name: "Suraj",
//     score: 99,
//     increment(){
//         return this.score++;
//     }
// }

// const user2 = Object.create(user1); // it means .....     user2.__proto__ = user1
// console.log(user2);
// console.log(user2.name); // Suraj

// user2.name = "Babita";
// user2.score = 120;

// console.log(user1.name, user1.score, user1.increment());
// console.log(user1.score);
// console.log(user2.name, user2.score, user2.increment());
// console.log(user2.score);

///---------------------------------------------------------------------------------------------
// ------------------Constructor Function -----------------------------------

// function User(name, score){
//     this.name = name;
//     this.score = score;
// }

// const user1 = new User("Babita", 99);
// const user2 = new User("Angel priya", 9)
// console.log(user2);
// console.log(user2.name, user2.score);

//----------------------------------------------------------------------------------------------
// function User(name, score){
//     this.name = name;
//     this.score = score;
// }

// User.prototype.increament = function(){
//     return this.score++;
// }

// User.prototype.decrement = function(){
//     return this.score--;
// }

// const user1 = new User("Babita", 99);

// console.log(user1.increament(), user1.decrement());

// console.log(user1.__proto__  === User.prototype); // true

//----------------------------------------------------------------------------------------------
// function User(name, score){
//     this.name = name;
//     this.score = score;
// }

// User.prototype.increament = function(){
//     return this.score++;
// }

// User.prototype.decrement = function(){
//     return this.score--;
// }

// const user1 = new User("Babita", 99);
// const user2 = new User("Nilam", 20);

// console.log(user1 === user2);
// console.log(user1 === User);
// console.log(user1 instanceof User);
//----------------------------------------------------------------------------------------------
