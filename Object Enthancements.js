// Object Enhancement


//----- set the keys to be the value of the  parameters we will give them. This is shorthand. 
function createInstructor(firstName, lastName){     
  return {
    firstName,lastName}
}

// Computed Property Names

let favoriteNumber = 42;

const instructor2 = {
  firstName: "Colt"
  [favoriteNumber] = "Thats is my favorite!"
}




let instructor = {
  firstName:"Colt",
  sayHi(){
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  }
}


/** Write a function which generates an animal object. The function should accepts 3 arguments:

species: the species of animal (‘cat’, ‘dog’)
verb: a string used to name a function (‘bark’, ‘bleet’)
noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
Use one or more of the object enhancements we’ve covered.*/




function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")