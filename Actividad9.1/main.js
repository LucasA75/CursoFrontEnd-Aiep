function validarNombre() {
    var nombre = document.getElementById("name");
    // Validar que el nombre no esté vacío
    if (nombre.value === "") {
        document.getElementById("nombreError").innerText = "Por favor ingresa un nombre.";
        nombre.style.border = "2px solid red"
        return false
    } else {
        document.getElementById("nombreError").innerText = "";
        nombre.style.border = "2px solid green"
        
    }
}

function validarEmail() {
    var email = document.getElementById("email");
    // Validar que el correo electrónico tenga un formato válido
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.match(emailRegex)) {
        document.getElementById("emailError").innerText = "Por favor ingresa una dirección de correo electrónico válida.";
        email.style.border = "2px solid red"
        return false
    } else {
        document.getElementById("emailError").innerText = "";
        email.style.border = "2px solid green"
    }
}

function validarRut() {
    var rut = document.getElementById("rut");
    // Validar que el rut tenga al menos 8 caracteres
    if (rut.value.length < 8) {
        document.getElementById("rutError").innerText = "El rut debe tener al menos 8 caracteres.";
        rut.style.border = "2px solid red"
        return false
    } else {
        rut.style.border = "1px solid black"
        rut.classList.add("animateVerde")
        document.getElementById("rutError").innerText = "";
    }
}

function validarSexo() {
    var sexo = document.getElementById("sex").value;
    if (sexo === "") {
        return false
    }
}

function validarFormulario() {
    // Realizar la validación final del formulario
    let nombre = validarNombre();
    let email = validarEmail();
    let rut = validarRut();
    let sexo = validarSexo()

    if ((sexo || rut || email || nombre) === false) {
        alert("Hay un error con el formulario. Abort submit")
        window.location.reload()
    }
    else {
        alert("Formulario enviado")
    }
}