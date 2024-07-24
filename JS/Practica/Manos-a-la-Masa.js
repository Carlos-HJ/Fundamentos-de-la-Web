function pizzaOven (corteza, salsa, quesos, salsas){
    var pizza = {
        corteza: corteza,
        salsa: salsa,
        quesos: quesos,
        salsas: salsas,
    }
    return pizza;
}
var pizza1 = pizzaOven ("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);

var pizza2 = pizzaOven ("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);