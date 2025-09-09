let usuario = document.getElementById("usuario");
let contrasena = document.getElementById("contrasena");
let btnLogin = document.getElementById("btnLogin");

//Se crean dos variables con un usuario y contraseña, esto hace que siempre exista
//Un usuario admin para realizar pruebas de verificacion
const user = "Admin";
const pass = "123456";

if (btnLogin && usuario && contrasena ){
    btnLogin.addEventListener("click", (e) => {
        e.preventDefault();
    if (usuario.value == user && contrasena.value == pass ) {
        alert("Logueado")
        localStorage.setItem("logueado","true");
        localStorage.setItem("usuario",usuario.value);
        window.location.href = "lander.html";
    } else {
        alert("Usuario o contraseña incorrecta")
        const modal = new bootstrap.Modal(document.getElementById("loginError"));
        modal.show();
    }
});
}

document.addEventListener("click", (e) =>{
    const clicLogout = e.target.closest("#btnLogout, #nav-logout a");
    if(!clicLogout) return;
    e.preventDefault();
    localStorage.removeItem("logueado");
    localStorage.removeItem("usuario");
    window.location.reload();

    const header = document.getElementById("header");
    document.getElementById("nav-login").classList.remove("d-none");
    document.getElementById("nav-registro").classList.remove("d-none");
    document.getElementById("nav-logout").classList.add("d-none");
    document.getElementById("nav-shop").classList.add("d-none");

    if(!location.pathname.endsWith("lander.html")){
        window.location.href="lander.html";
    }
});