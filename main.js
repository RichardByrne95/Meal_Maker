const menu = {
  _courses: {
    //Appetizers
    appetizers: [],
    mains: [],
    desserts: []
  },
  //Appetizers Functions
  get appetizers() {
    if (this._courses.appetizers) {
      return this._courses.appetizers;
    } else {
      return "No appetizers available.";
    }
  },
  set appetizers(food) {
    if (typeof food === "string") {
      this.appetizers.push(food);
    } else {
      return "Please input a string."
    }
  },
  //Mains Functions
  get mains() {
    if (this._courses.mains) {
      return this._courses.mains;
    } else {
      return "No mains available.";
    }
  },
  set mains(food) {
    if (typeof food === "string") {
      this.mains.push(food);
    } else {
      return "Please input a string."
    }
  },
  //Desserts Functions
  get desserts() {
    if (this._courses.desserts) {
      return this._courses.desserts;
    } else {
      return "Please input a string."
    }
  },
  set desserts(food) {
    if (typeof food === "string") {
      this.desserts.push(food);
    } else {
      return "Please input a string."
    }
  },
  //Returns all courses in an object
  get courses() {
    return {
      appetizers: this.appetizers, 
      mains: this.mains, 
      desserts: this.desserts
    }
  },
  //Add a dish to a course
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {name: dishName, price: dishPrice};
    this._courses[courseName].push(dish);
  },
  //Get a random dish from a specified course
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  //Generate Random Meal
  generateRandomMeal() {
    const randomAppetizer = this.getRandomDishFromCourse("appetizers");
    const randomMain = this.getRandomDishFromCourse("mains");
    const randomDessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = randomAppetizer.price + randomMain.price + randomDessert.price;
    
    return `Your meal is ${randomAppetizer.name}, ${randomMain.name} and ${randomDessert.name}. The total price is €${totalPrice}.`;
  }
}

const addDishesToMenu = () => {
  //Appetizers
  menu.addDishToCourse("appetizers", "Crispy Cauliflower", 6);
  menu.addDishToCourse("appetizers", "Cashew Cheese Toasts with Poached Pears and Thyme", 6);
  menu.addDishToCourse("appetizers", "Grilled Polenta Crackers with Roasted Pepper Salsa", 5);
  menu.addDishToCourse("appetizers", "Baked Falafel Sliders", 7);
  //Mains
  menu.addDishToCourse("mains", "Grilled Asparagus and Shitake Tacos", 11);
  menu.addDishToCourse("mains", "Mushroom-Quinoa Burger", 10);
  menu.addDishToCourse("mains", "Tofu Pad Thai", 12);
  menu.addDishToCourse("mains", "BBQ Chickpea and Cauliflower Flatbreads With Avocado Mash", 11);
  //Desserts
  menu.addDishToCourse("desserts", "Peanut Butter Chocolate Chip Cookie Bar", 5);
  menu.addDishToCourse("desserts", "Date Brownies", 5);
  menu.addDishToCourse("desserts", "Raspberry Cheesecake", 7);
  menu.addDishToCourse("desserts", "Cherry & Mint Sorbet", 6);
}

addDishesToMenu();
const meal = menu.generateRandomMeal();
console.log(meal);
