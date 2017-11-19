var FoodItem = function(name, calories, vegan, glutenFree){
		this.name       = name
		this.calories   = calories
		this.vegan      = vegan
		this.glutenFree = glutenFree

}

var awburger = new FoodItem('burger', 489, false, false)
console.log(burger)


// - Define a `stringify` method on the constructor's prototype. It should return a string description of the food including its name, calories, and dietary information, formatted as you choose. `stringify` should not have any side effects.
// Instantiate three different FoodItems and store each in a separate variable. Call `stringify()` on each instance and print the result to the console.


var bacon  = new FoodItem('bacon', 90, false, true);
var bisonpatty = new FoodItem('bison patty', 300, false, true);
var egg      = new FoodItem('egg', 50, false, false);
var tomatoes = new FoodItem('tomatoes', 8, true, true);
var lettuce   = new FoodItem('lettuce', 0, true, true);
var onions  = new FoodItem('onions', 1, true, false);


	FoodItem.prototype.stringify = function(){
		if (this.vegan === true){
			this.vegan = 'is vegan'
		} else{
			this.vegan = 'is not vegan'
		}

		if(this.glutenFree === true){
			this.glutenFree = 'is gluten free'
		} else{
			this.glutenFree = 'is not gluten free'
		}

		return(`${this.name} is ${this.vegan}, is ${this.glutenFree} has ${this.calories}`)

	}
console.log(egg.stringify())

// Define constructors for the following objects. Add parameters to the constructor for the given properties and add them as instance variables.

// Plate
var Plate = function(name, description, price, ingredients){
	this.name       = name
	this.description= description
	this.price      = price
	this.ingredients= ingredients
}





	var bisonBurger = new Plate("Bison Burger Plate" , "Made of Colorado Bison", 14, [bisonpatty.stringify(), tomatoes.stringify(), onions.stringify()] )

	var eggBurger = new Plate("Famous Egg Burger" , "a nonconventional burger", 7, [egg.stringify(), lettuce.stringify(), onions.stringify()] )

		Plate.prototype.stringify = function(){
			return (`The ${this.name}. It's our ${this.description}. It costs ${this.price} dollars, and contains ${this.ingredients}.`)
		}

console.log(bisonBurger.stringify())
console.log(eggBurger.stringify())
// MENU

var Menu = function(name, plates){
	this.name = name
	this.plates = plates
	var output = this.name + ': '
    for ( var i = 0; i < this.plates.length; i++ ) {
        output += this.plates[i].stringify()
    }
    return output
}
}

	var secretMenu = new Menu('Secret Menu', [eggBurger.stringify(), bisonBurger.stringify(), 'combo burger'])

		Menu.prototype.stringify = function(){
			return (`${this.name} offers ${this.plates}.`)
		}
console.log(secretMenu.stringify())
