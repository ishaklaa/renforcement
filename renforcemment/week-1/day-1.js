// ex 1
let taches = [];
taches.push('coder');
taches.push('tester');
taches.push('deployer');
taches.unshift('analyser');
taches.pop();
taches.shift();
taches.splice(1,0,'documenter')
taches.splice(2,1,'revenue')
console.log(taches);
// ex 2
const prenoms = ['Alice', 'Bob', 'Clara', 'David', 'Eva'];
prenoms.forEach((prenom , index) => {
    console.log(index + 1, "." ,prenom);
})
let nbdeslettres = [];
prenoms.forEach(prenom => {
    nbdeslettres.push(prenom.length)
})
console.log(nbdeslettres);
prenoms.forEach(prenom => {
    if (prenom.length > 3 )
    console.log(prenom);
})
//ex 3
const temperatures = [0, 15, 22, 35, -5, 100];
const tempF=temperatures.map(C=> (C * 9/5 )+ 32)
console.log(tempF)
const description = tempF.map(c =>{ if(c>=30){
    return 'chaud'
}else if(c<0){
    return 'froid'
}else{
    return 'Tempere'
}
})
console.log(description);
const status = temperatures.map(c =>{ if(c>=30){
    return {  celsius : c,statu: 'chaud' }
}else if (c<0){
    return {  celsius : c,statu: 'froid' }
}
else{
    return {  celsius : c,statu: 'Tempere' }

}
})
console.log(status)
// ex 4
const mots =
    ['chat','cheval','chien','lion','chameau','cobra','loup','chevre'];
const chWords = mots.filter(a => a.startsWith('ch'))
const words = mots.filter(a => a.length >5)
const motsCom = mots.filter(a=>a.startsWith('ch') || a.length >=5 )
console.log(motsCom)
// ex 5
const catalogue = [
    { ref: 'A01', nom: 'Stylo bille', prix: 1.20 },
    { ref: 'A02', nom: 'Cahier A4', prix: 3.50 },
    { ref: 'A03', nom: 'Surligneur', prix: 2.10 },
    { ref: 'A04', nom: 'Post-it', prix: 3.80 },
    { ref: 'A05', nom: 'Ciseaux', prix: 6.30 },
];
const produit = catalogue.find(a =>a.ref ==='A03');
const cahier = catalogue.findIndex(a =>a.nom === "Cahier A4")
let A99 = catalogue.find(a =>a.ref === 'A99')
if (!A99){
     A99 = 'mkinsh'
}
console.log(A99);
// ex 6
const notes = [14, 8, 17, 11, 15, 9, 18, 12];
const somme = notes.reduce((acc,n) => acc +n)
const moyenn = somme/notes.length
const max = notes.reduce((acc,n)=> n>acc ? n: acc)
const noteDes =notes.filter(a => a<moyenn)
const nbNotes = noteDes.length;

console.log(nbNotes)