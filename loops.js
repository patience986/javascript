//looks
//print 0 to 5 usine connsole.log

//the for loops for the known ranges e.g 0 to 45
for (let
    m = 0;
    m <= 5;
    m++) {
    console.log(m);
}

for (let w = 5;
    w >= 0;
    w--) {
    console.log(w);
}

//initialisation,condition,increament/decreament
//hello world 5 times in the times
for (let x = 0; x <= 5; x++) {
    console.log("hello world");
}

//while loops
let m = 0
while (m <= 19) {
    console.log(m)
    m++
}
/*do while it 
is better to use the for loop and most
times when you dont know how many times*/
let m2 = 0
do {
    console.log(m2)
    m2++
}
while (m2 <= 5)

//for of(for arrays)
let number1 = [1, 2, 3, 4, 5]
for (let i = 0;
    i < number1.length;
    i++) {
    let add = number1[i] + 20;
    console.log(add)
}

for (const digit of number1) {
    console.log(digit);
}

let cereals = ["beans", "maize", "g nuts"]
for (const grain of cereals) {
    console.log(grain);
}
const produceList = [{ name: "beans", type: "legume", weight: 1000, cost: 50000 },
{ name: "g-nuts", type: "legume", weight: 2000, cost: 60000 },
{ name: "maize", type: "grain", weight: 1500, cost: 70000 }]

for (const produce of produceList) {
    console.log(`name:${produce.name}, type:${produce.type}, weight:${produce.weight}kg, cost:${produce.cost}ugx,`)}               
