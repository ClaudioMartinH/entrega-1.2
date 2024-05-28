//Ejemplo por Fernando Herrera ---> https://www.youtube.com/watch?v=rrWRhrdwuLg


class Singleton {

    static instancia;  //por defecto es undefined al declarar la variable vacía
    nombre = "";       //hacemos una propiedad global que es "nombre"

    constructor( nombre = "") {
        //comprobamos si la instancia ya existe, si no existe la creamos y devolvemos la instancia creada
        if (!!Singleton.instancia) {
          //la doble negación transforma los valores en su equivalente booleano
          return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }

}
//creamos 3 nuevas instancias para comprobar que el output en los 3 casos será el mismo ya que los 3 se refieren al mismo objeto y al mismo vector de memoria
const instancia1 = new Singleton("IronMan");
const instancia2 = new Singleton("SpiderMan");
const instancia3 = new Singleton("Black Panther");

console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`); //output: "Nombre en la instancia1 es: IronMan"
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`); //output: "Nombre en la instancia2 es: IronMan"
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`); //output: "Nombre en la instancia3 es: IronMan"

