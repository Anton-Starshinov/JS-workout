// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
  
//   const result = makePizza();
//   const pointer = makePizza;

//   console.log(result);

// ======================= 2 ==========================

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   function makeMessage(pizzaName, callback) {
     
//     return callback(pizzaName);
//   }
//   console.log (makeMessage("Royal Grand", makePizza));

// ====================== 3 ============================

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }
  
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
  
  
//   makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
//   });
  
// ====================== 4 ===========================

const pizzaPalace = {
    pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
    order(pizzaName) {},
  };
  // Change code above this line
  
  // Callback for onSuccess
  function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
  }
  
  // Callback for onError
  function onOrderError(error) {
    return `Error! ${error}`;
  }
  
  // Method calls with callbacks
  pizzaPalace.order('Smoked', makePizza, onOrderError);
  pizzaPalace.order('Four meats', makePizza, onOrderError);
  pizzaPalace.order('Big Mike', makePizza, onOrderError);
  pizzaPalace.order('Vienna', makePizza, onOrderError);
  
//   Изменить код над этой строкой
//   Обратный вызов для onSuccess
//   Обратный вызов для onError
//   Вызовы методов с обратными вызовами