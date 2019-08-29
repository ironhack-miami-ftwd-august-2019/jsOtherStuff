class Vehicle {
    constructor(){
        this.mpg = 30;
        this.body = 'sedan';
        this.color = color;
        this.convertible = true;
        this.fuel = 13;
    }

    drive(distance){
        console.log('vrooom!!')
        this.fuel -= distance/this.mpg
    }
    checkGas(){
        console.log("you have ", this.fuel, " left")
    }
} 

class Motorcycle extends Vehicle {
    constructor(numWheels, mpg, color, fuel){
        super(mpg, color, fuel)
        this.numWheels = numWheels;        
    }

}
// // The class Cat has, by default, all the same attributes and methods as Animal but it will have some that just belong to the cat
// class Cat extends Animal {
//     constructor(name,mainColor,sound, nbOfLegs){
//       // `super` refers to the constructor of the parent (Animal)
//       // with super Cat gets all the attributes and methods of the Animal class
//       super(name,mainColor,sound);
//       this.nbOfLegs = nbOfLegs; // <== a new attribute, just for cats
//     }
//   }



function turnHoursToMinutes(m) {
    let newMoviesArray = m.map( (movie) =>  {
        console.log(movie)
        let mov = { ... movie}
        mov.somthingElse = 'wha'
        return mov;
    })
    // console.log("--------", myMovieArr)
    console.log("@@@@@@@@@@@ ", newMoviesArray, m );
    return newMoviesArray;
    // return myMovieArr;

}


turnHoursToMinutes([{duration:'2h 54min'}, {duration:'3h 4min'}])