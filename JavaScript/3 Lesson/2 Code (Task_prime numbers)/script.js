let beginning = prompt("Įveskite pradžios skaičių: ");
let end = prompt("Įveskite pabaigos skaičių: ");
let printArray = "";

beginning = parseInt(beginning);
end = parseInt(end);

if (beginning < 2) {
    beginning = 2;
}

if (end < beginning) {
    console.log("Pabaiga turi būti didesnė, nei pradžia!");
}

else {
    console.log(`Įvestis: pradžia = ${beginning}, pabaiga = ${end}`)

    const arrayRange = (start, stop, step) =>
        Array.from(
        { length: (stop - start) / step + 1 },
        (_value, index) => start + index * step
        );
    
    let inputArray = arrayRange(beginning, end, 1);
    
    inputArray = inputArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });
      
    for(let numbers of inputArray) {
        if (numbers === inputArray[inputArray.length - 1]) {
            printArray += numbers;
            break;
        }
        printArray += numbers + ", ";
    }
    console.log(`Išvestis: ${printArray}`);
}






