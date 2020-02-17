const dogs = require('./pets.json');
console.log(dogs)
// const fs = require('fs');
// let stringJson = fs.readFileSync('pets.json', 'utf-8');
// const dogs = JSON.parse(stringJson);

const contem = (agulha, palheiro) => palheiro.indexOf(agulha) !== -1;
const getAnimalsByName = (animals, name) => animals.filter(animal =>  contem(name, animal.nome));
// console.log(getAnimalsByName(dogs, 'lie'));

const cachorrosCastrados = () => dogs.filter(c => c.castrado);
// console.log('CASTRADOS', cachorrosCastrados())

const cachorrosPesoEmGr = cachorros.map(c => c.peso = c.peso * 1000);