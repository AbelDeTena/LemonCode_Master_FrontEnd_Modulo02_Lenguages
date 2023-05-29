# Master Frontend Módulo 2 Language :lemon:

## Ejercicio 1: Array operations

### 1.1 Head
Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
### 1.2 Tail
Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
### 1.3 Init
Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
### 1.4 Last
Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

## Ejercicio 2: Concat

### 2.1 Concat
Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
### 2.2 Opcional Concat
Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

## Ejercicio 3: Clone Merge

### 3.1 Clone
Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source.

### 3.2 Merge
Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

## Ejercicio 4: Read Books
Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano.

## Ejercicio 5: Slot Machine
El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. 
El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:
"Congratulations!!!. You won <número de monedas> coins!!";
y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje.