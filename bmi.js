//Created a class and named it BMI
class BMI {

    //Added constructor to class, created two args height and weight
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;

    }//End Constructor

    //Created a method called calculateBMI, inside the method is the formula to calculate BMI 
    calculateBMI() {
        //Formula to calculate Bmi
        let bmi = this.weight / (this.height ** 2);
        // Returns Formula
        return bmi;

    }//End Method

}//End Class

//Instance of BMI Class
let MyBmi = new BMI(2, 90);

//Call the calculateBMI Method
let calculatedBMI = MyBmi.calculateBMI();

//Prints to Console when run
console.log(calculatedBMI);