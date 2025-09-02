const btnRegister = document.getElementById("btnRegister");

btnRegister.addEventListener("click", () => {
    // Captura de valores
    const usuario = document.getElementById("usuario").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const contrasena = document.getElementById("contrasena").value;
    const confirmar = document.getElementById("confirmarcontraseña").value;

    // Validaciones
    if (!usuario || !correo || !contrasena || !confirmar) {
        alert("Por favor complete todos los campos.");
        return;
    }

    if (contrasena !== confirmar) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Guardar usuario en localStorage (simulación de registro)
    //Esto guarda el usuario de manera local en el navegador del pc de la persona
    const userData = {
        usuario: usuario,
        correo: correo,
        contrasena: contrasena
    };
    localStorage.setItem("user", JSON.stringify(userData)); //Convierte el objeto a string para poder guardarlo como json en el localstorage (Propiedad stringify)

    alert("Registro creado correctamente");
    window.location.href = "login.html"; //Redirige a la página de login después del registro y despues de mostrar alerta
});
