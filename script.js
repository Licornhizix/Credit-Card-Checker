function validateCred(array) {
var modulo = 10;
let noLastnumber = array.pop();//on isole le dernier element
//console.log(noLastnumber);
for (var i = array.length-1; i >= 0 ; i-=2) {
   array[i]*=2;
   if (array[i]>9){
     array[i] -= 9;
   }
  }
  //console.log(array);
  let initialValue = 0; //Ne pas oublier car le tableau inversé débute à -1 dans l'index de l'array
  let sumTotale = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue + noLastnumber //addidtion de la somme de l'array + le premier chiffre retiré
);
console.log(sumTotale);
  let moduloResult = sumTotale % modulo;
console.log(moduloResult);
if (moduloResult === 0) {
  return true
} else {
  return false
}
console.log(moduloResult);
  } 
  
