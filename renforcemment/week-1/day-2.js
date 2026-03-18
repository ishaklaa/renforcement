let a = {};
let b = {};

function fusionProfonde(a, b) {
   for (let i in a){
       for (let j in b){
           if (typeof b[j] === 'object'){
               fusionProfonde(a[j], b[j])
           }else{
               a[j] =b[j];
           }
       }
   }
}