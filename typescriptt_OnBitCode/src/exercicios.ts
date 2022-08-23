
function sendSpaceship(name: string, captain: string) {
    const spaceship = {
        name,
        captain,
        inMission: true,
        crew: []
    }

    alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} esta em uma missão`);

    return spaceship
}

function accelerate(targetSpeed:number, spaceship: { name:string, speed:number}) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}...`)
    } else if(spaceship.speed < targetSpeed){
        alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}...`)
    } else {
        alert(`Mantendo a velocidade da ${spaceship.name}`)
    }
}

const spaceshipName = prompt('digite o nome da sua nave para a missão.');
const spaceshipcaptain = prompt('Digite o nome do capitão da sua nave. ');

const currentShip:any = sendSpaceship(spaceshipName, spaceshipcaptain)

// const speed = prompt(`Digite a velocidade para a qual deseja acelerar. `)
// accelerate(speed, currentShip);// opa temos um erro pois speed vai armazenar o
//resultado do prompt q so d passar o mouse vc ve q o resultado é string certo?
//e na função accelerate ela foi declarada como número(number) e agora ?

const speed = Number(prompt('Insira a velocidade para a qual deseja acelerar:'))
accelerate(speed, currentShip)


