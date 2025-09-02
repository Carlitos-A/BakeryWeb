import {mostrarProductos} from "../../components/mostrarProductos.js";

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


mostrarProductos(productos, contenedorproductos);