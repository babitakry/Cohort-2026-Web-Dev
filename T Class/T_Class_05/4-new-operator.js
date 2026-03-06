// It is mostly used with Constructor Functions

// Constructor
// 1. capital letter name [ String, Number, Array, Object ]
// 2. Should be Executed by "new" Operator

function User(name){
    this.name = name;
    this.isPaid = false;
};

const aj = new User("Ani");
// console.log(aj);


// new kaa jaadu...
// 1. this = {}
// 2. operations
// 3. return this;

// internally it is happenging 

// function User(name){
//     this = {};

//     this.name = name;
//     this.isPaid = false;

//     return this;
// };