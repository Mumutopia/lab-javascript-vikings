// Soldier
class Soldier {
  constructor(health, strength) {
    this.health =health;
    this.strength = strength;
  }
  attack (){
    return this.strength;
  }
  receiveDamage (damage) {
     this.health -= damage;
  }
  
}

// Viking
class Viking extends Soldier {
  constructor(name,health,strength){
    super(health,strength);
    this.name = name;
  }
  
  receiveDamage (damage) {
    this.health -= damage;
   return (this.health>0) ? `${this.name} has received ${damage} points of damage` :  `${this.name} has died in act of combat`;     
    }
  
  battleCry(){
    return "Odin Owns You All!";
  }

}

// Saxon
class Saxon extends Soldier{


  receiveDamage (damage) {
    this.health -= damage;
   return (this.health>0) ? `A Saxon has received ${damage} points of damage` :  `A Saxon has died in combat`;     
    }

}

// War
class War {
  constructor (){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
addViking (Viking){
  this.vikingArmy.unshift(Viking);
}
addSaxon (Saxon){
  this.saxonArmy.unshift(Saxon);
}
vikingAttack(){
  let selectRandomViking = Math.floor(Math.random() * this.vikingArmy.length);
  let randomViking = this.vikingArmy[selectRandomViking];
  let selectRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  let randomSaxon = this.saxonArmy[selectRandomSaxon];
  let outcome = randomSaxon.receiveDamage(randomViking.attack());
  if (randomSaxon.health<=0) this.saxonArmy.splice(selectRandomSaxon,1);
  return `${outcome}`;
}
saxonAttack(){
  let selectRandomViking = Math.floor(Math.random() * this.vikingArmy.length);
  let randomViking = this.vikingArmy[selectRandomViking];
  let selectRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  let randomSaxon = this.saxonArmy[selectRandomSaxon];
  let outcome = randomViking.receiveDamage(randomSaxon.attack());
  if (randomViking.health<=0) this.vikingArmy.splice(selectRandomViking,1);
  return `${outcome}`;
}

showStatus(){
  if (!this.saxonArmy.length) { return "Vikings have won the war of the century!";  }
  if (!this.vikingArmy.length) { return "Saxons have fought for their lives and survived another day...";  }
  if (this.saxonArmy.length || this.vikingArmy.length ) return "Vikings and Saxons are still in the thick of battle.";
}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
