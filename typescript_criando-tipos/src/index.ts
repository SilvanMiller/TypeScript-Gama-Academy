//tipo literal
let literal: "Hello. World";
let pi: 3.14159;

//literal = "hi.world" // não aceita mudança por ser do tipo literal

let option: "yes" | "No" | "Maybe"

//option = "" //dessa forma ele ja trás o que foi declarado la em cima parecendo e enum

//let planets: "Mercurio" | "Venus" | "Terra" | "Jupiter" | "Saturno" | "Urano" | "Neturno" | "Plutao"

//if (planet === "Terra") { console.log("Chegamos ao planeta Terra")}

//criando o nosso próprio typo(type)

type Planetas = "Mercurio" | "Venus" | "Terra" | "Jupiter" | "Saturno" | "Urano" | "Neturno" | "Plutao" 

let planet: Planetas

if (planet === "Terra") {
    console.log("Chegamos ao planeta Terra")
}

function checkPlanet(planet:Planetas) {
    if (planet === "Saturno") {
        console.log("Chegamos ao planeta Terra")
    }
}

type SaudacoesCallback = (name: string) => void

function saldacao(callbackFn: SaudacoesCallback) {
    let name = "Saturno"
    callbackFn(name)
}