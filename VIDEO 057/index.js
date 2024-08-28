console.log("I am a tutorial on loops");

let a = 1;

console.log(a);
console.log(a + 1);

for (let i = 0; i < 100; i++) {
  console.log(a + i);
}

let obj = {
  name: "Subham",
  role: "Programmer",
  company: "Startup",
};

for (const key in obj) {
  const element = obj[key];
  console.log(element);
}

for (const c of "Subham") {
    console.log(c);
}

let i = 5;
while(i<6){
    console.log(i);
    i++;
}
let j = 0;
do {
    console.log(j);
    j++;
} while (j<6);