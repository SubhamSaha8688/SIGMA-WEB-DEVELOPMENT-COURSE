let random = Math.random();
let a = prompt("Enter First Number");
let b = prompt("Enter Second Number");
let c = prompt("Enter Operator");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
    
}




if(random < 0.1){
    alert(`the resut is ${eval(`${a} ${c} ${b}`)}`)
}
else {
    c = obj[c];
    alert(`the resut is ${eval(`${a} ${c} ${b}`)}`)
    
}