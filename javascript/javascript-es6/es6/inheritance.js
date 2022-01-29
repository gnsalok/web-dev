class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
    constructor(options) {
        super(options);
    }
    
    bite(snake) {
        return snake.health -= 10;
    }
}

const snake1 = new Snake({ name: 'Fred' });
const snake2 = new Snake({ name: 'Willy' });
snake1.bite(snake2);
console.log(snake1);
console.log(snake2);