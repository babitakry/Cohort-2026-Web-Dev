// class User{
//     constructor(name, score){
//         this.name = name;
//         this.score = score;
//     }

//     increament(){
//         return this.score++;
//     }
// }

// const u1 = new User("Suraj", 100);
// console.log(u1);
// u1.increament();
// console.log(u1.score);

// console.log(User.prototype);
// console.log(typeof User); // function

//--------------------------------------------------------------------
class User{
    constructor(name, score){
        this.name = name;
        this.score = score;
    }
    login(){
        console.log("Logged In");
    }
}

class Admin extends User{
    constructor(name, score, isAdmin){
        super(name, score);
        this.isAdmin = isAdmin;
    }
    deleteUser(){
        console.log("Deleted");
    }
}

const admin = new Admin("Suraj", 100, true);
console.log(admin.name);
console.log(admin.score);
console.log(admin.isAdmin);
admin.login();
admin.deleteUser();