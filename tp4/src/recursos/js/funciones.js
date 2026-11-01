import { productos } from './productos.js';

//Función que renderiza todos los productos
const renderizarProductos = (contenedor, arregloProductos) => {
    let productosHTML = '';

    arregloProductos.forEach(producto => {
        productosHTML += `
            <article class="tarjeta-producto">
                    <figure>
                        <a href="./detalle_producto.html">
                            <img src= ${producto.imagen} alt=${producto.nombre}>
                        </a>
                    </figure>
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p><strong>$${producto.precio}</strong></p>
                    <a href="./detalle_producto.html" class="boton-principal">Ver detalle</a>
                </article>
        `;
    });

    contenedor.innerHTML = productosHTML;
    return productosHTML;
};

//Función de filtrado por categoría
const filtrarPorCategoria = (categoriaSeleccionada) => {
    if (categoriaSeleccionada === "Todas") {
        return productos; // Devuelve todos si elige "Todas"
    }
    // Filtra el array original según la categoría
    return productos.filter(prod => prod.categoria === categoriaSeleccionada);
};

//Función de ordenamiento
const ordenarProductos = (criterio, arregloA1Ordenar) => {
    // Hacemos una copia del array para no modificar el original
    const arregloCopia = [...arregloA1Ordenar];

    if (criterio === "precio-bajo") {
        return arregloCopia.sort((a, b) => a.precio - b.precio);
    } else if (criterio === "precio-alto") {
        return arregloCopia.sort((a, b) => b.precio - a.precio);
    } else if (criterio === "nombre") {
        return arregloCopia.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
    
    return arregloCopia; // Si es "relevancia" u otro, devuelve el orden por defecto
};

export {renderizarProductos, filtrarPorCategoria, ordenarProductos};