let show = function () {
    console.log('Anonymous function')
}
show();

let add = function(a, b) {
    return a + b;

}
console.log(add(2, 2));

let showArrow = () => console.log('Anonymous function')
showArrow()

let addArrow = (a, b) => a + b
console.log(addArrow(2, 2)) 


