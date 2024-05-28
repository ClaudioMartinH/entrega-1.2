class Singleton {
  constructor(nombre) {
    if (!Singleton.instancia) {
      this.nombre = nombre;
      Singleton.instancia = this;
    }
    return Singleton.instancia;
  }

  static getInstance(nombre) {
    return new Singleton(nombre);
  }
}

// Creamos instancias utilizando el método getInstance()
const instancia1 = Singleton.getInstance("IronMan");
const instancia2 = Singleton.getInstance("SpiderMan");
const instancia3 = Singleton.getInstance("Black Panther");

console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`); // Output: "Nombre en la instancia1 es: IronMan"
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`); // Output: "Nombre en la instancia2 es: IronMan"
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`); // Output: "Nombre en la instancia3 es: IronMan"
