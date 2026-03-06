//----- objects ---> Properties ----> key:value
//----- Two ways to create an object

// let gemini = new Object(); // Object Constructor Syntax
// let claude = {}; // Object Literal


// let gpt = {
//     company: "openai",
//     version: 5.3,
//     releaseYear: 2025,
// };


// console.log(gpt.company);

// gpt.type = "Large Language Model";
// gpt.isMultiModal = true;
// gpt.type = "LLM"; // update property
// // console.log(gpt);

// delete gpt.type;
// // console.log(gpt);


//-----------------------------------------------------------------------------------------------------------------

// let sonnet = {
//     company: "anthropic",
//     version: 4.6,
//     "released on": 2026, // multiword prop must be quoted
//     1: "claude hi hai"
// };

// // Trailing Comma


// // Square Bracket Notation
// console.log(sonnet["released on"]);
// console.log(sonnet["version"]);
// console.log(sonnet.version);
// console.log(sonnet[1]);

// const input = "company"; // Expression value as prop names
// console.log(sonnet[input]);

//-----------------------------------------------------------------------------------------------------------------
// function getLaptop(name, price) {
//     console.log("yu hu");
//     return {
//         brand: "Apple",
//         name,
//         price,
//     };
// };

// let myMac = getLaptop("M4 Air", 99_900);
// console.log(myMac);


// console.log(myMac.ram === undefined);
// console.log("ram" in myMac); // key in object (boolean)


// --------Looping Object for..in---------------

// for(let key in myMac){
//     console.log(key , myMac[key]);
// }

//-----------------------------------------------------------------------------------------------------------------
// // Objects are ordered in different fashion

// let codes = {
//     // Asia
//     7: "Russia",
//     32: "Belgium",
//     91: "India",

//     // North America
//     1: "Canada",
//     52: "Mexico",
// };

// console.log(codes);

// for(const code in codes){
//     console.log(code);
// }
// ---NOTE:--- Integer properties are sorted, others appear in creation order.

//-----------------------------------------------------------------------------------------------------------------
// SOLUTION - MAKE THE KEY AS STRING

// let codes = {
//     // Asia
//     '+7': "Russia",
//     '+32': "Belgium",
//     '+91': "India",

//     // North America
//     '+1': "Canada",
//     '+52': "Mexico",
// };

// console.log(codes);
// for (const code in codes) {
//     console.log(code);
// }

//-----------------------------------------------------------------------------------------------------------------

//--------- Ref and Copying -----------

// Primitives are always copied "as a value"


// let like = "Radhika Das";
// let love = like;

// console.log(love);

// like = "Taylor Swift";
// console.log(love);

//-----------------------------------------------------------------------------------------------------------------

// // Objects are stored and copied "by reference"
// let artist = {
//     name: "Radhika Das",
//     country: "UK",
// };

// let kirtaniya = artist;

// artist.country = "England";
// console.log(kirtaniya);
// console.log(kirtaniya === artist);

//-----------------------------------------------------------------------------------------------------------------

//------------store by ref-------------------

// let a = {};
// let b = {};
// console.log(a === b);


//-----------------------------------------------------------------------------------------------------------------

// --------const can't be modified then how we modify obj-----------

// const ev = {
//     name: "Mahindra be6",
// }
// ev.name = "BYD Seal";
// console.log(ev);

//-----------------------------------------------------------------------------------------------------------------

// --------------Clone [kyu = they copy as reference]------------------------
// const org = {
//     k1: "v1",
//     k2: "v2",
// }

// let clone = {};
// for(let key in org){
//     clone[key] = org[key];
// }
// console.log(clone);
// console.log(org === clone); // false

// --------------------- Object.assign( dest, source1, source2, ..... ) ----------------------
// const org = {
//     k1: "v1",
//     k2: "v2",
// }

// let clone = Object.assign({}, org);
// console.log(clone);
// console.log(org === clone); // false

//-----------------------------------------------------------------------------------------------------------------

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
    },
};

// const cloneNested = Object.assign({}, nestedObj);
// const clone = {};
// for(let key in nestedObj){
//     clone[key] = nestedObj[key];
// }
// console.log(clone);

// Deep Cloneing
const nestedClone = structuredClone(nestedObj);
nestedObj.version = 5.2;

console.log(nestedObj);
console.log(nestedClone);