

// 09/08/2023 : La boucle ne semble pas trouver le premier nombre de l'array
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];



function validateCred(array) {
var modulo = 10;
var card = Array.from(array);
for (var i = card.length-2; i >= 0 ; i-=2) {
   card[i]*=2;
   if (card[i]>9){
     card[i] -= 9;
   }
  }
  //console.log(array);
  let initialValue = 0; //Ne pas oublier car le tableau inversé débute à -1 dans l'index de l'array
  let sumTotale = card.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue  //addidtion de la somme de l'array + le premier chiffre retiré
);
//console.log(sumTotale);
  let moduloResult = sumTotale % modulo;
  // console.log(array);
//console.log(moduloResult);
return moduloResult === 0
  
};
function findInvalidCards(array) {
  let invalidCards = []; //ARRAY qui va stocker les compagnies
  for (let arr of array) {
    const findInvalid = validateCred(arr);
    //console.log('see ' + validateCred(arr));
//console.log(findInvalid);
    if (!findInvalid) {
      invalidCards.push(arr);
    }
  }
  
  return invalidCards;
}
let invalidCards = findInvalidCards(batch);

function idInvalidCardCompanies(array) {
  let invalidCompany = [];//ARRAY qui va stocker les compagnies
  
  for (let i = 0; i < array.length; i++) {
 
if (array[i][0] === 3){
  if (!invalidCompany.includes('Amex (American Express)')){
    invalidCompany.push('Amex (American Express)');
  }
} else if (array[i][0] === 4){
  if (!invalidCompany.includes('Visa')){
    invalidCompany.push('Visa');
  }

} else if (array[i][0] === 5){
  if (!invalidCompany.includes('Mastercard')){
    invalidCompany.push('Mastercard');
  }
} else if (array[i][0] === 6){
  if (!invalidCompany.includes('Discover')){
    invalidCompany.push('Discover');
  } 
} else {
    console.log('Company not found');
  }
}
  
  return invalidCompany;
}; 


console.log(validateCred(valid1));
console.log(validateCred(valid2));
console.log(validateCred(valid3));
console.log(validateCred(valid4));
console.log(validateCred(valid5));


console.log(validateCred(invalid1));
console.log(validateCred(invalid2));
console.log(validateCred(invalid3));
console.log(validateCred(invalid4));
console.log(validateCred(invalid5));
console.log(findInvalidCards(batch));
console.log(idInvalidCardCompanies(invalidCards))