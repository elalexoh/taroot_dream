class Card {

    constructor(name, attack, defense) {
      this.name = name;
      this.attack = attack;
      this.defense = defense;
    }
    getAttack(){
      const ataque = this.attack;
      return ataque;
    }
    getDefense(){
      const defensa = this.defense;
      return defensa;
    }
    getName(){
      const nombre = this.name;
      return nombre;
    }
  }
  
  let user = new Card("Djaul", 800, 500);
  const attack = document.querySelector('.attack-point h2');
  const shield = document.querySelector('.shield h2');
  const name = document.querySelector('.head h1');
  attack.innerHTML = user.getAttack();
  shield.innerHTML = user.getDefense();
  name.innerHTML = user.getName();