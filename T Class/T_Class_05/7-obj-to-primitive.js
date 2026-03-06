// Conversion ===> number, string

//--------obj[Symbol.toPrimitive](hint)

//-------- this like 
            // const obj = {
            //     [Symbol.toPrimitive](){

            //     }
            // }

// hint ---> "string", "number", "default"
// binary + (addition, concatenation)

let galgotia = {
    status: "wasted",
    aura: -1000,

    // custom conversion
    [Symbol.toPrimitive](hint){
        if(hint === 'string'){
            return (this.status);
        }
        return this.aura;
    }
};

console.log(galgotia);
console.log(String(galgotia));
console.log(Number(galgotia)); // NaN


// hint : "string" ---> toString()
// hint : "number" ----> valueOf()

