const btn = document.getElementById('btn');

// btn.onclick = function(){
//     console.log("Hello world from dom");
// }

// // overriding the previous event listener
// btn.onclick = function(){
//     console.log("Hello world from dom-2");
// }

//----------------------------------------------------------
// btn.addEventListener("click", function(){
//     console.log("Clicked!")
// })

// btn.addEventListener("click", function(){
//     console.log("Clicked-2!")
// })

// btn.addEventListener("click", function(){
//     console.log("Clicked-3!")
// })

//-------------------------------------------------------------------
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const body = document.body;

// body.addEventListener("click", function(){
//     console.log("Body capturing!")
// },true)

// parent.addEventListener("click", function(){
//     console.log("Parent capturing!");
// },true)

// child.addEventListener("click", function(){
//     console.log("Child capturing!");
// },true)

// body.addEventListener("click", function(){
//     console.log("Body Clicked!")
// },false)

//--------------------------------------------------------------------------

// parent.addEventListener("click", function(){
//     event.stopPropagation();
//     console.log("Parent capturing!");
// },true)

// child.addEventListener("click", function(){
//     event.stopPropagation();
//     console.log('child clicked');
// },true)

//---------------------------------------------------------------------------