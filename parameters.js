//declaring a function without a parameter
function areaOfCircle() {

    const PI = 3.14
    let radius = 100
    let area = PI * radius * radius
    return area;
}

console.log(areaOfCircle(200))
function sum(x, y) {
    let add = x + y
    return add;
}
console.log(sum(5, 5))
//array function
const sum2 = (x, y) =>
    x + y;
console.log(sum2(2, 3))
//multiply
function product(m,g = 9.81) {
    let weight = m * g
    return weight + "N";
}
console.log(product(6));


        //array function to determine the valve of a stone in gravity
        
            
        









