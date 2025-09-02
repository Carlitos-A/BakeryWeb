const correo = document.getElementById("correo");  // 👈 aquí
const contrasena = document.getElementById("contrasena");
const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", () => {

    // Busca dentro del guardado local a los usuarios guardados
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("No existe un usuario registrado.");
        return;
    }

    // Valida si el correo y la contraseña coinciden con lo guardado
    if (
        (correo.value === storedUser.usuario || correo.value === storedUser.correo) &&
        contrasena.value === storedUser.contrasena
    ) {
        alert("Inicio de sesión correcto");
        window.location.href = "categoria.html";
    } else { //En caso de que no muestra alerta de error
        alert("Usuario o contraseña incorrectos");
    }
});
