const clientAge = 28
const legalAge = 18

clientAge < 0 || clientAge > 120 ? console.log("Invalid age") : clientAge >= legalAge ? console.log("Can drive") : console.log(`Can't drive. Legal age: ${legalAge}`)