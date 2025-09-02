document.getElementById("header").innerHTML = `

  <div class="navbar bg-secondary shadow-sm">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content dropdown-color rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><a href="lander.html">Inicio</a></li>
          <li><a href="categoria.html">Catálogo</a></li>
          <li><a href="conocenos.html">Conócenos</a></li>
        </ul>
      </div>
      <a class="navbar-brand" href="lander.html">
        <img src="assets/img/icons/iconon.png" height="10" width="100" alt="">
      </a>
    </div>
        <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a href="lander.html">Inicio</a></li>
        <LI><a href="categoria.html">Catálogo</a></LI>
        <li><a href="conocenos.html">Conócenos</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <a id="navbar-btn" class="btn btn-neutral-content btn-outline"></a>
    </div>
  </div>
`;

const header = document.getElementById("header");
const btn = document.getElementById("navbar-btn");

// Oculta el botón si data-btn-visible es "false"
//En caso de que no, nos permite modificar su texto y la referencia a la que nos lleva al hacer click
if (header.dataset.btnVisible === "false") {
  btn.style.display = "none";
} else {
  btn.textContent = header.dataset.btnText;
  btn.href = header.dataset.btnAhref;
}
//Mas adelante considerar hacer que no solo sea un boton que se pueda ocultar, sino que pueda ser una barra de busqueda funcional (Alivianar vacio en navbar en paginas donde no existe el botón)