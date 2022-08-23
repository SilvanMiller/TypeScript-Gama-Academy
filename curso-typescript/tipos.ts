//bolean 
const contasPagas: boolean = false;

//number
const idade: number = 23;
const avaliacao: number = 4.5;

//string
const nome: string = "Silvan Miller" 


//Array 
const idades: number[] = [23, 28, 22, 45];
const idades2: Array<string> = ["Silvan", "Micaela", "Deborah"]


//Tuple
let jogadores: [string, number, boolean]
jogadores = ["silvan", 42, true]

let point = [2,5]
let [x,y] = point

//Enum 
enum StatusAprovados {
    Aprovado,
    Pendente,
    Rejeitado
}
const statusDaAprovacao: StatusAprovados = StatusAprovados.Aprovado;

enum Roles {
    ADMIN = 'admin',
    USER = 'user'
}
Roles.USER
Roles.ADMIN
// esse outro exemplo no caso de um BD dessa forma o valor em string e o q vai copular no seu BD 

//Any = a qualquer coisa
const retornoDaAPI: any[] = [123, "Silvan", 42, 3456];
const retornoDaAPI2: any = {};


//Void = função sem retorno 
function printarNaTela(msg:string) {
    console.log(msg);
}

//nul e undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto: object) {
    //....
}
criar({
    nome: "silvan"
})
//criar("Silvan") //assim da erro

//Never 
function loopInfinito():never {
    while(true){ }
}
function erro(mensagem: string):never {
    throw new Error(mensagem)
}
function falha() {
    return erro("Algo falhou no código");
}

// Union Types // pode fazer com q a função aceite number|string|boolean
function exibirNota(nota: number|string) {
    console.log(`A sua nota é ${nota}`);
}
exibirNota('100')//chmando a função e passando um parâmetro
exibirNota(90)
const nota: string | number = 5 //document.getElementById("frontInput")

//Alias
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

const funcionarios: Funcionario[] = [{
    nome: "Silvan",
    sobrenome: "Miller",
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for (let funcionario of funcionarios) {
        console.log("Nome do funcionario: , funcionario.nome")
    }
}

let altura: number| null = 1.8;//criando uma outra permissão onde em altura ele ñ aceitaria null agora passa a aceitar 
altura = null

type Contato = {
    nome: string;
    telefone1: number;
    telefone2?: number;// para ñ precisar passar uso o ? para ser opcional que ele seja passado 
}
const contato: Contato = {
    nome: "Silvan",
    telefone1: 123456789,
} 

// Type Assertion 
const minhaIdade: any = 23;
(minhaIdade as number).toString();

const input2 = <HTMLInputElement> document.getElementById("input1");
const input = document.getElementById("input1") as HTMLInputElement;// sem vc passar uma confirmação o input no ts gera um erro por so atribuir HTMLElement q de fato ñ tem value.
console.log(input.value);

