// Write a class KioskCalc that has the following fruitsPriceList object.
// this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 };
// and takes two parameters (fruit, quantity) when initialized i.e.
// var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the fruit by accessing the
// getTotalCost( ) method.
// kioskCalc.getTotalCost( ) // returns “2 orange for KES 60” 


class KioskCalc{
    constructor(fruit,quantity){
        this.fruit=fruit;
        this.quantity=quantity;
        this.fruitPriceList={"Banana":30, "Strawberry":60,"Apples":50}
        this.getCost=function(){
            return`${quantity} ${fruit} for KES ${quantity*this.fruitPriceList.Apples}`
        }
    }
}

var kiosk=new KioskCalc("Apples",2);
console.log(kiosk.getCost());