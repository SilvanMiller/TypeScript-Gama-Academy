let aluno: { nome: string, aprovado?: boolean, idade: number, notas:number[] }
// podemos ter campos opcionais, para isso basta colocar uma ? antes do : na declaração. veja q o TS ñ deu error
aluno = {
    nome: "Silvan",
    //aprovado: true,
    idade: 43,
    notas: [1, 2, 3, 4]
}

