console.log("hola")
// Lista de artistas con sus cuadros
const artistas = [
                    { nombre: "Artista 1", 
                        cuadros: [{ id: 1, 
                                    titulo: "Cuadro 1", 
                                    precio: 100 }, 
                                { id: 2, 
                                    titulo: "Cuadro 2", 
                                    precio: 200 }, 
                                { id: 3, 
                                    titulo: "Cuadro 3", 
                                    precio: 300 }] },
                    { nombre: "Artista 2", 
                        cuadros: [{ id: 4, 
                                    titulo: "Cuadro 4", 
                                    precio: 400 }, 
                                { id: 5, 
                                    titulo: "Cuadro 5", 
                                    precio: 500 }, 
                                { id: 6, 
                                    titulo: "Cuadro 6", 
                                    precio: 600 }] },
                    { nombre: "Artista 3", 
                        cuadros: [{ id: 7, 
                                    titulo: "Cuadro 7", 
                                    precio: 700 }, 
                                  { id: 8, 
                                    titulo: "Cuadro 8", 
                                    precio: 800 }, 
                                  { id: 9, 
                                    titulo: "Cuadro 9", 
                                    precio: 900 }] }
                ];

// Carrito de compras
let carrito = [];

// Función para añadir un cuadro al carrito
function añadirAlCarrito(idCuadro) {
  const cuadro = artistas.flatMap(artista => artista.cuadros).find(cuadro => cuadro.id === idCuadro);
  if (cuadro) {
    carrito.push(cuadro);
    console.log(`Añadido al carrito: ${cuadro.titulo} por ${cuadro.precio}€`);
  } else {
    console.log("Cuadro no encontrado.");
  }
}

// Función para eliminar un cuadro del carrito
function eliminarDelCarrito(idCuadro) {
  const indice = carrito.findIndex(cuadro => cuadro.id === idCuadro);
  if (indice !== -1) {
    carrito.splice(indice, 1);
    console.log(`Eliminado del carrito: Cuadro con ID ${idCuadro}`);
  } else {
    console.log("Cuadro no encontrado en el carrito.");
  }
}

// Función para calcular el total del carrito
function calcularTotal() {
  return carrito.reduce((total, cuadro) => total + cuadro.precio, 0);
}

// Función para aplicar un descuento
function aplicarDescuento(descuento) {
  const total = calcularTotal();
  const totalConDescuento = total - (total * (descuento / 100));
  console.log(`Total con descuento: ${totalConDescuento}€`);
}

// Función para mostrar el carrito
function mostrarCarrito() {
  console.log("Carrito de compras:");
  carrito.forEach((cuadro, index) => {
    console.log(`${index + 1}. ${cuadro.titulo} - ${cuadro.precio}€`);
  });
  console.log(`Total sin descuento: ${calcularTotal()}€`);
}

// Ejemplo de uso
añadirAlCarrito(1); // Añade el primer cuadro del Artista 1
añadirAlCarrito(5); // Añade el segundo cuadro del Artista 2
eliminarDelCarrito(1); // Elimina el primer cuadro del Artista 1 del carrito
mostrarCarrito(); // Muestra los cuadros en el carrito
aplicarDescuento(10); // Aplica un descuento del 10%// Lista de artistas con sus cuadros
const artistas = [
  { nombre: "Artista 1", cuadros: [{ id: 1, titulo: "Cuadro 1", precio: 100 }, { id: 2, titulo: "Cuadro 2", precio: 200 }, { id: 3, titulo: "Cuadro 3", precio: 300 }] },
  { nombre: "Artista 2", cuadros: [{ id: 4, titulo: "Cuadro 4", precio: 400 }, { id: 5, titulo: "Cuadro 5", precio: 500 }, { id: 6, titulo: "Cuadro 6", precio: 600 }] },
  { nombre: "Artista 3", cuadros: [{ id: 7, titulo: "Cuadro 7", precio: 700 }, { id: 8, titulo: "Cuadro 8", precio: 800 }, { id: 9, titulo: "Cuadro 9", precio: 900 }] }
];

// Carrito de compras
let carrito = [];

// Función para añadir un cuadro al carrito
function añadirAlCarrito(idCuadro) {
  const cuadro = artistas.flatMap(artista => artista.cuadros).find(cuadro => cuadro.id === idCuadro);
  if (cuadro) {
    carrito.push(cuadro);
    console.log(`Añadido al carrito: ${cuadro.titulo} por ${cuadro.precio}€`);
  } else {
    console.log("Cuadro no encontrado.");
  }
}

// Función para eliminar un cuadro del carrito
function eliminarDelCarrito(idCuadro) {
  const indice = carrito.findIndex(cuadro => cuadro.id === idCuadro);
  if (indice !== -1) {
    carrito.splice(indice, 1);
    console.log(`Eliminado del carrito: Cuadro con ID ${idCuadro}`);
  } else {
    console.log("Cuadro no encontrado en el carrito.");
  }
}

// Función para calcular el total del carrito
function calcularTotal() {
  return carrito.reduce((total, cuadro) => total + cuadro.precio, 0);
}

// Función para aplicar un descuento
function aplicarDescuento(descuento) {
  const total = calcularTotal();
  const totalConDescuento = total - (total * (descuento / 100));
  console.log(`Total con descuento: ${totalConDescuento}€`);
}

// Función para mostrar el carrito
function mostrarCarrito() {
  console.log("Carrito de compras:");
  carrito.forEach((cuadro, index) => {
    console.log(`${index + 1}. ${cuadro.titulo} - ${cuadro.precio}€`);
  });
  console.log(`Total sin descuento: ${calcularTotal()}€`);
}

// Ejemplo de uso
añadirAlCarrito(1); // Añade el primer cuadro del Artista 1
añadirAlCarrito(5); // Añade el segundo cuadro del Artista 2
eliminarDelCarrito(1); // Elimina el primer cuadro del Artista 1 del carrito
mostrarCarrito(); // Muestra los cuadros en el carrito
aplicarDescuento(10); // Aplica un descuento del 10%