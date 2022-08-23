import getPersonType from "./src/function";
import AllPersons from "./src/object";

console.log(AllPersons);
console.log('Retorna gênero feminino', getPersonType(AllPersons, 'Female'));
console.log('Retorna gênero masculino', getPersonType(AllPersons, 'Male'));
