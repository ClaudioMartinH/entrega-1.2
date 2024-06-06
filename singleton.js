class Singleton {
    nombre = "";       

    constructor( nombre = "") {
        if (!!Singleton.instancia) {
          return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }

}
const instancia1 = new Singleton("IronMan");
const instancia2 = new Singleton("SpiderMan");
const instancia3 = new Singleton("Black Panther");

console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`); 
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`); 

