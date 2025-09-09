let productos = [
      {
    nombre: "Torta Cuadrada de Chocolate",
    precio: 45000,
    descripcion: "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.",
    categoria: "Tortas Cuadradas",
    imagen: "assets/img/productos/tortas/torta_cuadrada_choc.jpg"
  },
  {
    nombre: "Torta Cuadrada de Frutas",
    precio: 50000,
    descripcion: "Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.",
    categoria: "Tortas Cuadradas",
    imagen: "assets/img/productos/tortas/torta_frutas.jpg"
  },
  {
    nombre: "Torta Circular de Vainilla",
    precio: 40000,
    descripcion: "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.",
    categoria: "Tortas Circulares",
    imagen: "assets/img/productos/tortas/Bizcocho-vainilla-2024.png"
  }
];

let contenedorproductos = document.getElementById("producto");

productos.forEach(prod => {
    contenedorproductos.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 mb-3">
        <div class="card h-20'">
            <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${prod.nombre}</h5>
                <p class="card-text">${prod.descripcion}</p>
                <p class="fw-bold">$${prod.precio}</p>
            </div>
        </div>
    </div>
    `;
});
