// const dogesh = {
//     name: "Husky",
// };

// dogesh.dance = function () {
//     console.log("Ichu Ichu Song");
// };

//-----------------------------------------------------------------------------------------------------------------
// Another way

// function viralDance(){
//     console.log("Ichu Ichu Song");
// }
// const dogesh = {
//     name: "Husky",
//     dance: viralDance,
// };


//-----------------------------------------------------------------------------------------------------------------
// third way

// const dogesh = {
//     name: "Husky",
//     dance: function(){
//         console.log("Ichu Ichu Song");
//     },
// };

//-----------------------------------------------------------------------------------------------------------------
// Method Shorthand

// const dogesh = {
//     name: "Husky",
//     dance(){
//         console.log("Ichu Ichu Song");
//     },
// };

//-----------------------------------------------------------------------------------------------------------------

// let user = {
//     name: "Piyush Garg",
//     age: 26,
//     college: "Chitkara University",
//     passout: 2021,
//     gf: "Maa ki Ladli",

//     intro() {
//         console.log(`Hi, my name is ${user.name}!`);
//         console.log(`I am ${user.age} years old.`);
//         console.log(`I studied at ${user.college} and passed out in ${user.passout}.`);
//         console.log(`My girlfriend's name is ${user.gf}.`);
//     },
// };

// // user.intro();

// let piyush = user;
// user = null;
// piyush.intro();

//-----------------------------------------------------------------------------------------------------------------
// that's why we use this

let user = {
    name: "Piyush Garg",
    age: 26,
    college: "Chitkara University",
    passout: 2021,
    gf: "Maa ki Ladli",

    intro() {
        console.log(`Hi, my name is ${this.name}!`);
        console.log(`I am ${this.age} years old.`);
        console.log(`I studied at ${this.college} and passed out in ${this.passout}.`);
        console.log(`My girlfriend's name is ${this.gf}.`);
    },
};

let piyush = user;
user = null;
piyush.intro();