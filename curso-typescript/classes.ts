class Data {
    
    constructor(private dia: number, public mes: number, public ano: number = 1970) {

    } // quando ñ e inferido nada, por default eles são publicos
}

const data = new Data(1, 3, 2021);
const soData = new Data(1, 3, );// ñ deu erro pós foi colocado uma data para base, no caso de ñ ser passada no parâmetro
//console.log(data.dia);// erro por dia ser privado "somente é acessível na classe 'Data'"
console.log(data.mes);
console.log(data.ano);


class Carro {
    private velocidadeAtual: number = 0;
    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) { }

    private alterarVelocidade(delta: number) {
        const novaVelocidade = this.velocidadeAtual + delta;

        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }
    }//para o acelerarção ñ passar da velocidade Maxima

    acelerar() {
       this.alterarVelocidade(5);
    }
    frear() {
        this.alterarVelocidade(-5);
    }
}

const carro = new Carro("bmw", "120", 300)
//carro.velocidadeMaxima = 400// erro pós a que estamos chamando é privado
//carro.velocidadeAtual = 400// mesmo erro por ser privada ñ pode ser alterada aqui,'velocidadeAtual' é particular e somente é acessível na classe 'Carro
carro.acelerar()

//Herança

class Camaro extends Carro{
    private turbo = false;

    constructor() {
        super("Chevrolet", "Camaro", 500)
    }

    ligarTurbo() {
        this.turbo = true
    }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();
