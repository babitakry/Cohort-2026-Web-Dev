// const user = {
//     name: "John",
//     email: "john@gmail.com",
//     address: {
//         full: "adad j;d;fafad city",
//         // city: "London",
//         zip: "4343423"
//     },
// }

// console.log(user.address.city); // It will give us an error because city is not defined in address

// // Optional Chaining
// // It is a new feature in JavaScript that allows us to access properties of an object without having 
// // to check if the property exists or not. It is denoted by a question mark (?)

// console.log(user.address?.city); // It will give us undefined instead of an error because we are using optional chaining

// //------------------------------------------------------------------------------------------------------------------

// const user = {
//     name: "John",
//     email: "john@gmail.com",
//     address: {
//         full: "adad j;d;fafad city",
//         // city: "London",
//         zip: "4343423"
//     },
// }

// if(user.address){
//     if(user.address.city){
//         console.log(user.address.city);
//     }
//     else{
//         console.log(user.address.full);
//     }
// }
// else{
//     console.log("Address is not defined");
// }

//------------------------------------------------------------------------------------------------------------------

const user = {
    name: "John",
    email: "john@gmail.com",
    address: {
        full: "adad j;d;fafad city",
        // city: "London",
        zip: "4343423"
    },
}

// logical and it returns first falsy or last truthy value
console.log(user.address && user.address.city);