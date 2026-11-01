const productos = [    
    {
        id: 1,
        nombre: "Whey Protein Concentrada 1kg - Ena",
        imagen: "./recursos/imagenes/productos/suplementos/whey_protein_ena.webp",
        descripcion: "WHEY PROTEIN 1KG: Proteina en polvo marca Ena, sabor a chocolate.",
        marca: "Ena",
        precio: 99.999,
        categoria: "Proteínas",
        sabor: "Chocolate",
        porcion: "30g",
        enOferta: false,
        descuento: 0,
        cuotas: "(Hasta 3 cuotas sin interés)",
        get precioFinal() {
            return this.precio - (this.precio * this.descuento);
        },
        nutricion: [
            { nutriente: "Valor Energético", cantidad: "120 kcal" },
            { nutriente: "Proteínas", cantidad: "24 g" },
            { nutriente: "Carbohidratos", cantidad: "2 g" },
            { nutriente: "Grasas Totales", cantidad: "1.5 g" },
            { nutriente: "Sodio", cantidad: "130 mg" }
        ]
    },
    {
        id: 2,
        nombre: "Creatina & Whey Protein 1kg - Star Nutrition 300g",
        imagen: "./recursos/imagenes/productos/suplementos/proteina_creatina.webp",
        descripcion: "Mejora la fuerza, potencia y rendimiento en entrenamientos intensos.",
        marca: "Star Nutrition",
        precio: 129.999,
        categoria: "Ofertas",
        sabor: "Sin sabor",
        porcion: "30g y 5g",
        enOferta: true,
        descuento: 0.2,
        cuotas: "(Hasta 3 cuotas sin interés)",
        get precioFinal() {
            return this.precio - (this.precio * this.descuento);
        },
        nutricion: [
            { nutriente: "Porción de Whey Protein", cantidad: "30 g" },
            { nutriente: "Valor Energético", cantidad: "120 kcal" },
            { nutriente: "Proteínas", cantidad: "24 g" },
            { nutriente: "Carbohidratos", cantidad: "2 g" },
            { nutriente: "Grasas Totales", cantidad: "1.5 g" },
            { nutriente: "Sodio", cantidad: "120 mg" },
            { nutriente: "Porción de Creatina", cantidad: "5 g" },
            { nutriente: "Creatina Monohidratada", cantidad: "5 g" }
        ]
    },
    {
        id: 3,
        nombre: "Colageno 400g - Ena",
        imagen: "./recursos/imagenes/productos/suplementos/colageno_ena.webp",
        descripcion: "Colágeno hidrolizado en polvo que contribuye al mantenimiento de articulaciones, tendones y tejidos conectivos.",
        marca: "Ena",
        precio: 29.999,
        categoria: "Otros",
        sabor: "Sin sabor",
        porcion: "10g",
        enOferta: false,
        descuento: 0,
        cuotas: "(Hasta 3 cuotas sin interés)",
        get precioFinal() {
            return this.precio - (this.precio * this.descuento);
        },
        nutricion: [
            { nutriente: "Valor Energético", cantidad: "36 kcal" },
            { nutriente: "Proteínas", cantidad: "9 g" },
            { nutriente: "Carbohidratos", cantidad: "0 g" },
            { nutriente: "Grasas Totales", cantidad: "0 g" },
            { nutriente: "Sodio", cantidad: "20 mg" },
            { nutriente: "Colágeno Hidrolizado", cantidad: "10 g" }
        ]
    },
    {
        id: 4,
        nombre: "Creatina Monohidratada 300g - Star Nutrition",
        imagen: "./recursos/imagenes/productos/suplementos/creatina.webp",
        descripcion: "Creatina monohidratada en polvo que ayuda a mejorar la fuerza, la potencia muscular y el rendimiento durante entrenamientos de alta intensidad.",
        marca: "Star Nutrition",
        precio: 49.999,
        categoria: "Creatinas",
        sabor: "Vainilla",
        porcion: "5g",
        enOferta: false,
        descuento: 0,
        cuotas: "(Hasta 3 cuotas sin interés)",
        get precioFinal() {
            return this.precio - (this.precio * this.descuento);
        },
        nutricion: [
            { nutriente: "Valor Energético", cantidad: "0 kcal" },
            { nutriente: "Creatina Monohidratada", cantidad: "5 g" },
            { nutriente: "Carbohidratos", cantidad: "0 g" },
            { nutriente: "Proteínas", cantidad: "0 g" },
            { nutriente: "Grasas Totales", cantidad: "0 g" },
            { nutriente: "Sodio", cantidad: "0 mg" }
        ]
    },
    {
        id:5,
        nombre: "Citrato de magnesio en polvo - Ena",
        imagen: "./recursos/imagenes/productos/suplementos/magnesio_ena.webp",
        descripcion: "Citrato de magnesio en polvo de alta biodisponibilidad, sabor limonada, que aporta la dosis diaria de magnesio en una sola porción.",
        marca: "Ena",
        precio: 19.999,
        categoria: "Otros",
        sabor: "Limonada",
        porcion: "2g",
        enOferta: false,
        descuento: 0,
        cuotas: "(Hasta 3 cuotas sin interés)",
        get precioFinal() {
            return this.precio - (this.precio * this.descuento);
        },
        nutricion: [
            { nutriente: "Valor Energético", cantidad: "4 kcal" },
            { nutriente: "Magnesio", cantidad: "300 mg" },
            { nutriente: "Carbohidratos", cantidad: "0.5 g" },
            { nutriente: "Azúcares", cantidad: "0 g" },
            { nutriente: "Proteínas", cantidad: "0 g" },
            { nutriente: "Grasas Totales", cantidad: "0 g" },
            { nutriente: "Sodio", cantidad: "10 mg" }
        ]
    },
    {
        id:6,
        nombre: "Creatina Monohidratada 1KG - Ena",
        imagen: "./recursos/imagenes/productos/suplementos/creatina_1kg.webp",
        descripcion: "Creatina Monohidrato micronizada, el suplemento con mayor respaldo científico para mejorar la fuerza, la potencia y el rendimiento físico.",
        marca: "Ena",
        precio: 85.999,
        categoria: "Creatinas",
        sabor: "Sin sabor",
        porcion: "5g",
        enOferta: false,
        descuento: 0,
        cuotas: "(Hasta 3 cuotas sin interés)",
        get precioFinal() {
            return this.precio - (this.precio * this.descuento);
        },
        nutricion: [
            { nutriente: "Valor Energético", cantidad: "0 kcal" },
            { nutriente: "Creatina Monohidratada", cantidad: "5 g" },
            { nutriente: "Carbohidratos", cantidad: "0 g" },
            { nutriente: "Proteínas", cantidad: "0 g" },
            { nutriente: "Grasas Totales", cantidad: "0 g" },
            { nutriente: "Sodio", cantidad: "0 mg" }
        ]
    },
    {
        id:7,
        nombre: "Truemade Whey Protein 500G - Ena",
        imagen: "./recursos/imagenes/productos/suplementos/proteina_500g.webp",
        descripcion: "Proteína en polvo que combina fórmula concentrada (WPC) y aislada (WPI) para máxima pureza y rápida absorción. Sabor vainilla",
        marca: "Ena",
        precio: 45.999,
        categoria: "Proteínas",
        sabor: "Vainilla",
        porcion: "30g",
        enOferta: false,
        descuento: 0,
        cuotas: "(Hasta 3 cuotas sin interés)",
        get precioFinal() {
            return this.precio - (this.precio * this.descuento);
        },
        nutricion: [
            { nutriente: "Valor Energético", cantidad: "115 kcal" },
            { nutriente: "Proteínas", cantidad: "23 g" },
            { nutriente: "Carbohidratos", cantidad: "2.5 g" },
            { nutriente: "Grasas Totales", cantidad: "1.5 g" },
            { nutriente: "Sodio", cantidad: "95 mg" }
        ]
    },
    {
        id:8,
        nombre: "Creatina Monohidrato 300g - Ena",
        imagen: "./recursos/imagenes/productos/suplementos/creatina_naranja.webp",
        descripcion: "Creatina Monohidrato micronizada, el suplemento con mayor respaldo científico para mejorar la fuerza, la potencia y el rendimiento físico.",
        marca: "Ena",
        precio: 45.999,
        categoria: "Ofertas",
        sabor: "Naranja",
        porcion: "5g",
        enOferta: true,
        descuento: 0.35,
        cuotas: "(Hasta 3 cuotas sin interés)",
        get precioFinal() {
            return this.precio - (this.precio * this.descuento);
        },
        nutricion: [
            { nutriente: "Valor Energético", cantidad: "0 kcal" },
            { nutriente: "Creatina Monohidratada", cantidad: "5 g" },
            { nutriente: "Carbohidratos", cantidad: "0 g" },
            { nutriente: "Proteínas", cantidad: "0 g" },
            { nutriente: "Grasas Totales", cantidad: "0 g" },
            { nutriente: "Sodio", cantidad: "0 mg" }
        ]
    },
    {
        id:9,
        nombre: "Whey Protein 1kg - Ena",
        imagen: "./recursos/imagenes/productos/suplementos/proteina_frutilla.webp",
        descripcion: "Proteína concentrada para el día a día, ideal para desayunos, meriendas o después de entrenar.",
        marca: "Ena",
        precio: 99.999,
        categoria: "Ofertas",
        sabor: "Frutilla",
        porcion: "30g",
        enOferta: true,
        descuento: 0.35,
        cuotas: "(Hasta 3 cuotas sin interés)",
        get precioFinal() {
            return this.precio - (this.precio * this.descuento);
        },
        nutricion: [
            { nutriente: "Valor Energético", cantidad: "115 kcal" },
            { nutriente: "Proteínas", cantidad: "23 g" },
            { nutriente: "Carbohidratos", cantidad: "2.5 g" },
            { nutriente: "Grasas Totales", cantidad: "1.5 g" },
            { nutriente: "Sodio", cantidad: "95 mg" }
        ]
    }
];

export {productos};  