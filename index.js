class Mouse {

    constructor(name, favBerry, color, hunger)

    {
        this.name = name;
        this.favBerry = favBerry;
        this.color = color;
        this.hunger = hunger;
    }

    eat(favouriteBerry)  //* A mouse eats a berry. Eating a berry decreases hunger by 10. Eating a favourite berry decreases hunger by 15.
    {
        if(this.favBerry == favouriteBerry ) 
        {
            this.hunger -= 15;
            return `${this.name} just ate their favourite berry. Their favourite berry is ${favouriteBerry}.`;
        }
        else
        {
            this.hunger -= 10;
        }
    }

}

const pip = new Mouse('Pip', 'blackberry', 'brown', 30);
const tilly = new Mouse('Tilly', 'strawberry', 'white', 40);
const honey = new Mouse('Honey', 'blueberry', 'golden', 25);
const coco = new Mouse('Coco', 'raspberry', 'dark brown', 30);
const bonnie = new Mouse('Bonnie', 'cranberry', 'white', 35);

class Berry {

    constructor(name, color, flavour, rarity)

    {
        this.name = name;
        this.color = color;
        this.flavour = flavour;
        this.rarity = rarity;
    }
}

// rarity is rated 1-5, 1 being the rarest
const strawberry = new Berry('Strawberry', 'red', 'sweet', 1);
const blackberry = new Berry('Blackberry', 'black', 'sour', 5);
const raspberry = new Berry('Raspberry', 'pink', 'sweet', 3);
const blueberry = new Berry('Blueberry', 'blue', 'tangy', 2);
const cranberry = new Berry('Cranberry', 'red', 'sour', 4);

class Farmer {

    constructor(name, farmedBerry, age, location)

    { 
        this.name = name;
        this.farmedBerry = farmedBerry;
        this.age = age;
        this.location = location;
    }
}

const greg = new Farmer('Greg', 'strawberry', 35, 'Lancashire');
const jim = new Farmer('Jim', 'blackberry', 47, 'Newquay');
const bill = new Farmer('Billy', 'raspberry', 28, 'Scotland');
const jen = new Farmer('Jen', 'blueberry', 32, 'Wales');
const phil = new Farmer('Phil', 'cranberry', 39, 'Kent');

module.exports = 
{Mouse, Berry, Farmer, 
pip, tilly, honey, coco, bonnie, strawberry, blackberry, raspberry, blueberry, cranberry, greg, jim, bill, jen, phil 
}


