document.addEventListener("DOMContentLoaded", () => {
    const contenedorproductos = document.getElementById("producto");
    const listaCategorias = document.getElementById("lista-categorias");
    const itemsCategoria = listaCategorias.querySelectorAll("li");

    function mostrarProductos(productosFiltrados) {
        contenedorproductos.innerHTML = "";
        if (productosFiltrados.length === 0) {
            contenedorproductos.innerHTML = `<p class="text-muted">No hay productos en esta categoría.</p>`;
            return;
        }

        productosFiltrados.forEach(prod => {
            contenedorproductos.innerHTML += `
            <div class="col-12 col-sm-6 col-md-4 mb-3">
                <div class="card h-100">
                    <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${prod.nombre}</h5>
                        <p class="card-text">${prod.descripcion}</p>
                        <p class="fw-bold">$${prod.precio}</p>
                        <button class="btn btn-primary mt-auto">Comprar</button>
                    </div>
                </div>
            </div>
            `;
        });
    }

    function filtrarPorCategoria(categoria) {
        if (categoria === "todos") {
            mostrarProductos(productos);
        } else {
            const filtrados = productos.filter(p => p.categoria === categoria);
            mostrarProductos(filtrados);
        }
    }

    // Agregar eventos a cada item de la lista
    itemsCategoria.forEach(item => {
        item.addEventListener("click", () => {
            // Quitar 'active' de todos
            itemsCategoria.forEach(li => li.classList.remove("active"));
            // Activar el seleccionado
            item.classList.add("active");

            // Obtener categoría desde data-atributo
            const categoriaSeleccionada = item.dataset.categoria;
            filtrarPorCategoria(categoriaSeleccionada);
        });
    });

    // Mostrar todos los productos al cargar
    mostrarProductos(productos);
});
