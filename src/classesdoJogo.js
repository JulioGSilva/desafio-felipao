class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque genérico';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi('Augusto', 25, 'mago');
heroi1.atacar();

const heroi2 = new Heroi('Alexandre', 30, 'guerreiro');
heroi2.atacar();

const heroi3 = new Heroi('Julio', 22, 'monge');
heroi3.atacar();

const heroi4 = new Heroi('Cezar', 28, 'ninja');
heroi4.atacar();
