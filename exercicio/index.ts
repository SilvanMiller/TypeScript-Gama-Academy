const primeiroNome:string = prompt('digite seu nome.');
const diaDoMes:string | number = prompt('digite que dia do mês você esta.');
const hojeFezSol: boolean | string = prompt('digite seu hoje fez sol.');
const nomeDOCachorro = prompt('digite o nome do seu pet.')
const raca:string = prompt('digite a raça do seu pet.')

type Cachorro = {
    nome: string;
    idade: number;
    raca: string;
    grandePorte?: boolean;
    donos: string | boolean;
}

interface Animais {
    tipo: string;
    bipede: string; 
    asas: boolean;
    região: string;
}

//Criar um type com a função Omit, uma com Partial  e uma com Optional

type omitirGrandePorte = Omit<Cachorro, "grandePorte">;

let canideos: Cachorro;

function createCachorro(params: Cachorro): Cachorro{
    canideos = params;
    return canideos;
}

function updateCachorro(params: Partial<Cachorro>): Cachorro{
    canideos = { ...canideos, ...params }
    return canideos
}

console.table(createCachorro({
    nome: `${nomeDOCachorro}`,
    idade: 4,
    raca: `${raca}`,
    donos: `${primeiroNome}`
}))

alert(`Olá ${primeiroNome} então estamos no mês de ${diaDoMes} e ${hojeFezSol} fez sol, ótimo dia para levar ${nomeDOCachorro} para dar uma volta.`)