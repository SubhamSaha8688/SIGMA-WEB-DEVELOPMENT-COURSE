let arr = [1,2,4,5,7]

console.log(arr);
console.log(arr.length);

for(let i = 0; i < arr.length; i++){
    alert(arr[i]);
    confirm(arr[i]);
    let n = prompt("Enter the value at index " + i);
    alert("n: " + arr[n]);
}

