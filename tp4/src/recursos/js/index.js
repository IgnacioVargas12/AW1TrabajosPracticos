//  Importaciones
import {productos} from './productos.js'
import {renderizarProductos, filtrarPorCategoria, ordenarProductos} from './funciones.js'

//  Referencias DOM
const contenedorProductos = document.getElementById("contenedor-productos")
const enlacesCategorias = document.querySelectorAll(".lista-categorias a");
const selectOrdenar = document.getElementById("id-ordenar");

//  Funciones
//Estado actual (para mantener el filtro activo si luego ordenamos, o viceversa)
let productosActuales = productos;

//Función que carga todos los productos
renderizarProductos(contenedorProductos, productos);

//  Eventos
//Evento para el filtrado de categorías (Usando 'click' y un bucle para cada <a>)
enlacesCategorias.forEach(enlace => {
    enlace.addEventListener("click", (e) => {
        e.preventDefault(); // Evita que la página suba por el href="#"
        
        const categoriaElegida = e.target.textContent; // Captura el texto ("Proteínas", "Creatinas", etc.)
        
        // Usamos la función genérica pasando la categoría
        productosActuales = filtrarPorCategoria(categoriaElegida);
        
        // Volvemos a renderizar el contenedor con el resultado filtrado
        renderizarProductos(contenedorProductos, productosActuales);
    });
});

//Evento para el filtrado según un orden(Usando 'change')
selectOrdenar.addEventListener("change", (e) => {
    const criterioElegido = e.target.value; // Captura el value ('precio-bajo', 'nombre', etc.)
    
    // Ordenamos sobre los productos que ya están filtrados actualmente
    const productosOrdenados = ordenarProductos(criterioElegido, productosActuales);
    
    renderizarProductos(contenedorProductos, productosOrdenados);
});