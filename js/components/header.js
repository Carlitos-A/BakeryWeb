document.getElementById("header").innerHTML = `

<nav class="navbar navbar-expand-lg bg-customize shadow-sm position-relative">
  <div class="container-fluid">
    <!-- Marca -->
    <a class="navbar-brand" href="lander.html">
      <img src="assets/img/icons/iconon.png" alt="Logo" height="80">
    </a>

    <!-- Botón hamburguesa -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
      aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Contenido colapsable -->
    <div class="collapse navbar-collapse" id="navbarContent">
      
      <!-- Menú central -->
      <ul class="navbar-nav mb-2 mb-lg-0 central-menu">
        <li class="nav-item">
          <a class="nav-link" href="lander.html">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="categoria.html">Catálogo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="conocenos.html">Conócenos</a>
        </li>
      </ul>

      <!-- Menú derecho -->
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item" id="nav-login">
          <a class="nav-link" href="login.html">Login</a>
        </li>
        <li class="nav-item" id="nav-registro">
          <a class="nav-link" href="register.html">Registrarse</a>
        </li>
        <li class="nav-item d-none" id="nav-logout">
          <a class="nav-link" href="#" id="btnLogout">Logout</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
`;

const logueado = localStorage.getItem("logueado");

// Toggle visibilidad según estado
document.getElementById("nav-login").classList.toggle("hidden", logueado === "true");
document.getElementById("nav-registro").classList.toggle("hidden", logueado === "true");
document.getElementById("nav-logout").classList.toggle("hidden", logueado !== "true");

if (logueado === "true") {
  const user = localStorage.getItem("usuario") || "";
  document.querySelector("#nav-logout a").textContent = `Logout ${user}`;
}
