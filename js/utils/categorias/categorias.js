
let productos = [
    {
        nombre: "Tortas Cuadradas",
        precio: "Cumpleaños, matrimonios y eventos",
        descripcion: "Tortas decoradas en formato cuadrado",
        imagen: "assets/img/productos/tortas/cuadrada.jpg",
        url: "catalogoProductos.html?categoria=Tortas Cuadradas"
    },
    {
        nombre: "Tortas Circulares",
        precio: "Clásicas para toda ocasión",
        descripcion: "Tortas redondas decoradas",
        imagen: "assets/img/productos/tortas/circular.jpg",
        url: "catalogoProductos.html?categoria=Tortas Circulares"
    },
    {
        nombre: "Postres Individuales",
        precio: "Cheesecakes, mousses, tartaletas",
        descripcion: "Porciones individuales listas para disfrutar",
        imagen: "assets/img/productos/tortas/individuales.jpg",
        url: "catalogoProductos.html?categoria=Postres Individuales"
    },
    {
        nombre: "Productos Sin Azúcar",
        precio: "Endulzados con alternativas saludables",
        descripcion: "Opciones ideales para diabéticos o dietas bajas en azúcar",
        imagen: "assets/img/productos/tortas/sin-azucar.jpg",
        url: "catalogoProductos.html?categoria=Productos Sin Azúcar"
    },
    {
        nombre: "Pastelería Tradicional",
        precio: "Kuchen, pies, milhojas",
        descripcion: "Recetas clásicas de la pastelería chilena",
        imagen: "assets/img/productos/tortas/tradicional.jpg",
        url: "catalogoProductos.html?categoria=Pastelería Tradicional"
    },
    {
        nombre: "Productos Sin Gluten",
        precio: "Aptos para celíacos",
        descripcion: "Tortas y postres sin gluten",
        imagen: "assets/img/productos/tortas/sin-gluten.jpg",
        url: "catalogoProductos.html?categoria=Productos Sin Gluten"
    },
    {
        nombre: "Productos Veganos",
        precio: "Tortas y postres sin ingredientes de origen animal",
        descripcion: "Alternativas saludables y libres de crueldad",
        imagen: "assets/img/productos/tortas/vegano.jpg",
        url: "catalogoProductos.html?categoria=Productos Vegana"
    },
    {
        nombre: "Tortas Especiales",
        precio: "Diseños personalizados",
        descripcion: "Tortas temáticas y exclusivas para cada ocasión",
        imagen: "assets/img/productos/tortas/especial.jpg",
        url: "catalogoProductos.html?categoria=Tortas Especiales"
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
                <a href="${prod1.url}" class="btn btn-color mt-auto">Comprar</a>
            </div>
        </div>
    </div>
    `;
});