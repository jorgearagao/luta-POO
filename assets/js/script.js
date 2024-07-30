// Knight ou Sorcerer - Guerreiro ou Mago
// LittleMonster ou BigMonster

class Character {

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character {
    constructor(name) {
        super(name);
        this.line = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}