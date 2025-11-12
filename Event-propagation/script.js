const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");


// Event  bubbling
// parent.addEventListener("click", function(e){
//     console.log(e.currentTarget) // triggered -3
// });

// form.addEventListener('click',function(e){
//     console.log(e.currentTarget) //triggered -2
// });


// button.addEventListener('click',function(e){
//     console.log(this) // triggered -1
// });


// Event capturing / trickling
parent.addEventListener("click", listener, {capture: true}); // triggered -1

form.addEventListener('click', listener, true); // triggered -2

button.addEventListener('click', listener, {capture: true}); // triggered -3

function listener(){
    console.log(this)
}