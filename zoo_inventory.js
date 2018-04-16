/* My Zoo
Write a function zooInventory that takes a zoo's inventory of animals
(represented using nested arrays) and returns an array of strings that
describe each animal's name, species, and age.
*/

function zooInventory(zoo){
	var inventory = []
  for(i=0;i<zoo.length;i++){
  	animal = zoo[i];
    inventory.push(animal[0] + " the " + animal[1][0] + " is " + animal[1][1])
  }
  return inventory;
}
//EXAMPLE TESTS

var myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Punxsutawney Phil", ["groundhog", 11]]
];

console.log(zooInventory(myZoo));
// OUTPUT:
// [
//   'King Kong the gorilla is 42',
//   'Nemo the fish is 5',
//   'Punzsutawney Phil the groundhog is 11'
// ]
