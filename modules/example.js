let mod = (a, b) => (a % b);

const wonders = 7;

class Cake {
    constructor(recipe) {
        this.name = recipe.name;
        this.sugarContent = recipe.sugarContent
    }
    getName() {
        return this.name;
    }
    getSugarContent() {
        return this.sugarContent;
    }
}

function findSnakes(text){
  const pattern = /snake/i;
  let snakes = pattern.exec(text) || [];
  return snakes;
}

export { mod, wonders, Cake, findSnakes };
