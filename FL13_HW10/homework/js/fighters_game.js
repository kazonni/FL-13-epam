function Fighter (params) {
  let context = {
    wins: 0,
    losses: 0,
    maxHealth: params.hp
  };
  Object.assign(context, params);
  return {
    getName() {
      return context.name;
    },
  
    getDamage() {
      return context.damage;
    },
      
    getStrength() {
      return context.strength;
    },
      
    getAgility() {
      return context.agility;
    },
      
    getHealth() {
      return context.hp;
    },
      
    attack(defender){
      const HUNDRED = 100;
      const CHANCE = HUNDRED - (defender.getStrength() + defender.getAgility());
      if(Math.random() < CHANCE / HUNDRED) {
        defender.dealDamage(context.damage);
        if(defender.getHealth() < 0 ) {
          defender.heal(Math.abs(defender.getHealth()));
        }
        console.log(`${context.name} makes ${context.damage} damage to ${defender.getName()}`);
      } else {
      console.log(`${context.name} attack missed`);
      }
    },
  
    logCombatHistory() {
      console.log(`Name: ${context.name}, Wins: ${context.wins}, Losses: ${context.losses}`);
    },
      
    heal(points) {
      if(context.hp + points > context.maxHealth) {
        context.hp = context.maxHealth;
      } else {
        context.hp += points;
      }
      return context.hp;
    },
  
    dealDamage(points) {
      if(context.hp - points < 0){
        context.hp = 0;
      } else {
        context.hp -= points;
      }
      return context.hp;
    },
      
    addWin() {
      context.wins++;
    },
      
    addLoss() {
      context.losses++;
    }
  }
}
  
function battle(fighter1, fighter2){
  if(fighter1.getHealth() === 0) {
    console.log(`${fighter1.getName()} is dead and can't fight.`);
  } else if(fighter2.getHealth() === 0) {
    console.log(`${fighter2.getName()} is dead and can't fight.`);
  } else {
    for (let i = 0; fighter1.getHealth() > 0 && fighter2.getHealth() > 0; i++) {
      const TWO = 2;
      i % TWO === 0 ? fighter1.attack(fighter2) : fighter2.attack(fighter1);
    }
    if(fighter1.getHealth() > 0) {
      console.log(`${fighter1.getName()} has won!`);
      fighter1.addWin();
      fighter2.addLoss();
    } else {
      console.log(`${fighter2.getName()} has won!`);
      fighter2.addWin();
      fighter1.addLoss();
    }
  }
}

const myFighter = new Fighter({name: 'Maximus', damage: 20, hp: 100, strength: 20, agility: 15});
const myFighter2 = new Fighter({name: 'Commodus', damage: 25, strength: 15, agility: 20, hp: 90});