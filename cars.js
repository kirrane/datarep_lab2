//Created a Class called Vehicle
class Vehicle{

    //Added constructor to class, created three args make, model and year 
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }//End Constructor 

    //Created a method called Information, inside the method is the make, model and year of car 
    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }//End of method
}//End of class

//Instances of class
let myVehicle = new Vehicle('VW', 'Golf', 2008);
let info = myVehicle.Information();

//Class That inherits vehicle class
class Cars extends Vehicle{

    //Constructor with 4 args, 3 from previous class, new arg door
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }//End of Constructor

    //Information method for doors
    Information(){
        //super calls information methods
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }//End of method
}//End of Class

//Creates object myCar
let myCar = new Cars('VW', 'Golf', '2011', '5');
myCar.Information();