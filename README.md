# entrega-1.2

Para esta entrega que consiste en explicar un patrón de diseño de programación me he decidido por explicar el patrón Singleton.


Comenzaremos explicando brevemente que son los patrones de diseño y para que se utilizan.

Los patrones de diseño son la formalización de las buenas prácticas que podemos utilizar para resolver problemas o errores comunes.

En la Programación Orientada a Objetos (POO o OOP) los patrones muestran relaciones e interacciones sobre los diferentes objetos y clases, y se pueden clasificar en tres categorías principales: creacionales, estructurales y de comportamiento. Cada tipo aborda diferentes aspectos del diseño de software y proporciona soluciones específicas para distintos tipos de problemas. 

Aunque los patrones que impliquen mutabilidad, que recordemos que eso se refiere a la capacidad de un objeto para cambiar su estado interno o sus atributos una vez ha sido creado, implica muchas veces que los patrones no sean utiles cuando se esta utilizando un paradigma funcional estricto. Y en ese caso utilizar un patrón puede ser una pésima idea dependiendo del contexto o el lenguaje con el que estamos desarrollando.

El patrón Singleton, el cual pertenece a la categoria de los patrones creacionales, restringe la instanciación de una clase a una sola instancia y proporciona un punto global de acceso a ella. En NodeJs los módulos se cargan una sola vez y las instancias se comparten, lo que facilita la implementación del patrón Singleton.
Es útil cuando necesitas una sola instancia de una clase para poder coordinar acciones entre diferentes sistemas. Por ejemplo:

- Si el sistema tiene una sola Base de Datos.

- Si el sistema tiene una sola API.

- Si el sistema se tiene que conectar con un servicio tipo AWS de una sola instancia.

En estos 3 casos sería conveniente utilizar el patrón Singleton.
Aunque en NodeJs se puede implementar un objeto literal y exportarlo, lo cual haría que se comportara exactamente igual que un Singleton, ya que el motor de NodeJS ya tiene implementado un caché con las variables exportadas..

Inconvenientes de este patrón:

- Considerado por algunos programadores como una mala práctica, se salta el principio de Single Responsability de SOLID, ya que estamos utilizando una clase para controlar que solo una instancia sea creada además del código para el cometido principal que debe desempeñar dicha instancia en nuestra aplicación.

- Además generalmente se expone la instancia de nuestro objeto al contexto global de la aplicación, por lo que pudiera ser modificada en cualquier momento perdiendo el control de la misma.

- También mantienene el estado a lo largo de toda la vida de la aplicación por lo que podría ser un recolector de basura perfecto y comerse la memoria de nuestro sistema.

- Hacer unit test con ellas puede llegar a ser un infierno porque cada test debe ser totalmente independiente al anterior y eso no se cumple, por lo que al mantener el estado la aplicación se hace difícil de testear.

Implementarlo se consigue haciendo que el constructor sea privado. De esta forma hacemos que éste sea inaccesible desde fuera de la clase, con lo que ganamos el control sobre la instanciación de la misma, en otras palabras, es la clase la que gana el control de como se instancian sus propios objetos. Bloqueamos que cualquiera desde fuera de la clase pueda crear instancias de esa clase.
Evitamos que se pueda escribir el clásico "new (nombre de la clase)".
La forma para instanciar esta clase concreta será la siguiente: con un método estático. Normalmente acostumbra a llamarse getInstance(), o algún nombre que indique que estás obteniendo la instancia del singleton, y esta función se encargará a nivel interno de construír esta instancia.
Esta función, al ser parte de la clase, puede llamar al constructor sin problema y comprueba si ya existe alguna otra instancia de la misma creada con anterioridad. De ser así, la función nos la devuelve.
De no ser así, crearía una nueva por primera vez y nos la devolvería. De esta forma conseguimos que solo exista una única instancia creada de esta clase, ya que la función lo primero que hace es buscar y devolver la primera instancia.
Es responsabilidad de la clase guardar esta instancia, de manera que se pueda comprobar su existencia.
Para entender mejor este punto podemos mirar al ejemplo que adjunto en este repositorio (singleton.js)




Fuentes:
- Jesús Mur Fontanals: https://medium.com/@jesusmurfontanals/singleton-pattern-con-javascript-3eb1c03f184e
- Nicolás Schürmann de HolaMundo: https://www.youtube.com/watch?v=JI_THVXPToQ
- Martín de BettaTech: https://www.youtube.com/watch?v=GGq6s7xhHzY
- Fernando Herrera: https://www.youtube.com/watch?v=rrWRhrdwuLg