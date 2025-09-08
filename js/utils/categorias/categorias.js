
let productos = [
    {
        nombre: "Tortas Cuadradas",
        precio: "Cumpleaños, matrimonios y eventos",
        descripcion: "Tortas decoradas en formato cuadrado",
        imagen: "assets/img/productos/tortas/cuadrada.jpg",
        url: "tortas-cuadradas.html"
    },
    {
        nombre: "Tortas Circulares",
        precio: "Clásicas para toda ocasión",
        descripcion: "Tortas redondas decoradas",
        imagen: "assets/img/productos/tortas/circular.jpg",
        url: "tortas-circulares.html"
    },
    {
        nombre: "Postres Individuales",
        precio: "Cheesecakes, mousses, tartaletas",
        descripcion: "Porciones individuales listas para disfrutar",
        imagen: "assets/img/productos/tortas/individuales.jpg",
        url: "postres.html"
    },
    {
        nombre: "Productos Sin Azúcar",
        precio: "Endulzados con alternativas saludables",
        descripcion: "Opciones ideales para diabéticos o dietas bajas en azúcar",
        imagen: "assets/img/productos/tortas/sin-azucar.jpg",
        url: "sin-azucar.html"
    },
    {
        nombre: "Pastelería Tradicional",
        precio: "Kuchen, pies, milhojas",
        descripcion: "Recetas clásicas de la pastelería chilena",
        imagen: "assets/img/productos/tortas/tradicional.jpg",
        url: "pasteleria-tradicional.html"
    },
    {
        nombre: "Productos Sin Gluten",
        precio: "Aptos para celíacos",
        descripcion: "Tortas y postres sin gluten",
        imagen: "assets/img/productos/tortas/sin-gluten.jpg",
        url: "sin-gluten.html"
    },
    {
        nombre: "Productos Veganos",
        precio: "Tortas y postres sin ingredientes de origen animal",
        descripcion: "Alternativas saludables y libres de crueldad",
        imagen: "assets/img/productos/tortas/vegano.jpg",
        url: "vegano.html"
    },
    {
        nombre: "Tortas Especiales",
        precio: "Diseños personalizados",
        descripcion: "Tortas temáticas y exclusivas para cada ocasión",
        imagen: "assets/img/productos/tortas/especial.jpg",
        url: "tortas-especiales.html"
    }
];

let contenedorproductos = document.getElementById("producto");

productos.forEach(prod1 => {
    contenedorproductos.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 mb-3">
        <div class="card h-100">
            <img src="${prod1.imagen}" class="card-img-top" alt="${prod1.nombre}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${prod1.nombre}</h5>
                <p class="card-text">${prod1.descripcion}</p>
                <p class="fw-bold">${prod1.precio}</p>
                <button class="btn btn-primary mt-auto">Comprar</button>
            </div>
        </div>
    </div>
    `;
});