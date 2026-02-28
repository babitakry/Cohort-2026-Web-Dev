

let sonnet = {
    company: "anthropic",
    version: 4.6,
    "released on": 2026, // multiword prop must be quoted
    1: "claude hi hai",
};

// Trailing Comma


// Square Bracket Notation
// console.log(sonnet["released on"]);
// console.log(sonnet.version);
// console.log(sonnet[1]);

const input = "company";
// console.log(sonnet[input]);





function getLaptop(name, price) {
    console.log("yu hu");
    return {
        brand: "Apple",
        name,
        price,
    };
};

let myMac = getLaptop("M4 Air", 99_900);
// console.log(myMac);


// console.log(myMac.ram === undefined);
// console.log("ram" in myMac); // key in object (boolean)

// // Looping Object for..in

// for(let key in myMac){
//     console.log(myMac[key]);
// }


// Objects are ordered in different fashion

let codes = {
    // Asia
    '+7': "Russia",
    '+32': "Belgium",
    '+91': "India",

    // North America
    '+1': "Canada",
    '+52': "Mexico",
};

// console.log(codes);
// for (const code in codes) {
//     console.log(code);
// }

// // Integer Properties are sorted, others appear in creation order.

//.... Ref and Copying

// .....Primitives are always copied "as a value"
let like = "Radhika Das";
let love = like;

console.log(love);

like = "Taylor Swift";
console.log(love);


// Objects are stored and copied "by reference"
let artist = {
    name: "Radhika Das",
    country: "UK",
};

let kirtaniya = artist;

artist.country = "England";
// console.log(kirtaniya);
// console.log(kirtaniya === artist);

// store by ref
let a = {};
let b = {};
// console.log(a === b);


// const can't be modified then how we modify obj
const ev = {
    name: "Mahindra be6",
}

ev.name = "BYD Seal";
// console.log(ev);


// Clone
const org = {
    k1: "v1",
    k2: "v2",
}

// let clone = {};
// for(let key in org){
//     clone[key] = org[key];
// }

// console.log(clone);


// Object.assign(dest, source1, source2, .....)

let clone = Object.assign({}, org);
console.log(clone);


const nestedObj =  {
    model: "gpt",
    version: "5.3",
    capabilities: {
        reasoning: true,
        codeGeneration: true,
        imageUnderstanding: true,
        toolUse: true,
        functionCalling: true,
        streaming: true,
    }
};

