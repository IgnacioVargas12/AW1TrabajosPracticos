import { productos } from './productos.js';

//Función que renderiza todos los productos (catalogo.html)
const renderizarProductos = (contenedor, arregloProductos) => {
    let productosHTML = '';

    arregloProductos.forEach(producto => {
        productosHTML += `
            <article class="tarjeta-producto">
                    <figure>
                        <a href="./detalle_producto.html?id=${producto.id}">
                            <img src= ${producto.imagen} alt=${producto.nombre}>
                        </a>
                    </figure>
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p><strong>$${producto.precio}</strong></p>
                    <a href="./detalle_producto.html?id=${producto.id}" class="boton-principal">Ver detalle</a>
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

//  Funciones para cargar el detalle del producto (detalle_producto.html)
// Función para buscar un producto por ID
const obtenerProductoPorId = (id, arregloProductos) => {
    return arregloProductos.find(producto => producto.id === id);
};

// Función para renderizar todo el detalle usando template literals
const renderizarDetalle = (contenedor, producto) => {
    if (!producto) {
        contenedor.innerHTML = "<h2>Producto no encontrado</h2>";
        return;
    }

    // 1. Recorremos el array de nutrición para armar las filas <tr> de la tabla dinámicamente
    let filasNutricionHTML = "";
    producto.nutricion.forEach(item => {
        filasNutricionHTML += `
            <tr>
                <td>${item.nutriente}</td>
                <td>${item.cantidad}</td>
            </tr>
        `;
    });

    // 2. Inyectamos todo el bloque HTML en el contenedor principal
    contenedor.innerHTML = `
        <section class="tarjeta-oferta">
            <figure>
                <img src="${producto.imagen}" alt="${producto.nombre}" height="400">
            </figure>
            <div>
                <h2>${producto.nombre}</h2>
                <p>Marca: ${producto.marca}</p>
                <p><strong>$${producto.precio.toLocaleString()}</strong> (${producto.cuotas})</p>
                <p>${producto.descripcion}</p>
                <p>Sabor: ${producto.sabor}</p>
                <form action="./carrito.html" method="post">
                    <div>
                        <label for="id-cantidad">Cantidad:</label>
                        <input type="number" id="id-cantidad" name="cantidad" min="1" value="1" max="10" required>
                        <button type="submit" class="boton-principal">Agregar al carrito</button>
                    </div>
                </form>
            </div>
        </section>
        
        <section>
            <h3>Información Nutricional</h3>
            <table>
                <caption>Valores nutricionales por porción (${producto.porcion})</caption>
                <thead>
                    <tr>
                        <th scope="col">Nutrientes</th>
                        <th scope="col">Cantidad por porción</th>
                    </tr>
                </thead>
                <tbody>
                    ${filasNutricionHTML}
                </tbody>
            </table>
        </section>
    `;
};
export {renderizarProductos, filtrarPorCategoria, ordenarProductos, obtenerProductoPorId, renderizarDetalle};