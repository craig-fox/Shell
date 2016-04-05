import { mod, wonders, Cake, findSnakes} from './example';

console.log("Divide 37 with 4 and you have " + mod(37,4) + " left over");
console.log("There are " + wonders + " ancient wonders");

let recipe = {
    name: 'Lemon Dream Cake',
    sugarContent: '200g'
}

let cake = new Cake(recipe);

console.log("The delicious " + cake.getName() + " cake has " + cake.getSugarContent() + " of sugar");

let field1 = {name: "Field 1", snakes: "noslitheryreptileshere"},
    field2= {name: "Field 2", snakes: "absolutelynotasinglesnakehereIpromise"};

function checkForSnakes(field){
    console.log("Looking for snakes in " + field.name);
    let snakes = findSnakes(field.snakes);
    let message = ((snakes.length > 0) ? "Found a snake!" : "No snakes here");
    console.log(message);
}

checkForSnakes(field1);
checkForSnakes(field2);