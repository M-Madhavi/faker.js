/**
 *
 * @namespace faker.car
 */
var car= function (faker) {
  var self = this;
  var fake = faker.fake;

  /**
   * car
   *
   * @method faker.car.car
   */
  self.car = function () {
    return fake('{{car.manufacturer}} {{car.model}}');
  };

  self.car.schema = {
    "description": "Generates a random car.",
    "sampleResults": ["BMW Explorer", "Ford Camry", "Lamborghini Ranchero","Bugati","Jaguar"]
  };

  /**
   * manufacturer
   *
   * @method faker.car.manufacturer
   */
  self.manufacturer = function () {
    return faker.random.arrayElement(faker.definitions.car.manufacturer);
  };

  self.manufacturer.schema = {
    "description": "Generates a manufacturer name.",
    "sampleResults": ["Ford", "Jeep", "Tesla"]
  };


  /**
   * model
   *
   * @method faker.car.model
   */
  self.model = function () {
    return faker.random.arrayElement(faker.definitions.car.model);
  };

  self.model.schema = {
    "description": "Generates a car model.",
    "sampleResults": ["Explorer", "Camry", "Ranchero"]
  };

 
  /**
   * fuel
   *
   * @method faker.car.fuel
   */
  self.fuel = function () {
    return faker.random.arrayElement(faker.definitions.car.fuel);
  };

  self.fuel.schema = {
    "description": "Generates a fuel type.",
    "sampleResults": ["Electric", "Gasoline", "Diesel"]
  };

  
  /**
   * color
   *
   * @method faker.car.color
   */
  self.color = function () {
    return fake('{{commerce.color}}');
  };

  self.color.schema = {
    "description": "Generates a color",
    "sampleResults": ["red", "white", "black"]
  };
};

module["exports"] = car;
