

/// JavaScript
function volverAInicioDeSesion() {
    
    window.location.href = './login.html';
}

function irRegistro() {
    
    window.location.href ='formulario-resgistro.html'
}




function RedirigiraloginE() {
    
    window.location.href = './login.html';
}





// Lista para almacenar usuarios
// Lista para almacenar usuarios
var listaUsuarios = [];

// Función para registrar un nuevo usuario
function registrarUsuario() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var rut = document.getElementById("rut").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var correo = document.getElementById("correo").value;
    var repetirCorreo = document.getElementById("repetirCorreo").value;
    var contraseña = document.getElementById("contraseña").value;
    var repetirContraseña = document.getElementById("repetircontraseña").value;

    // Validar que los campos no estén vacíos (puedes agregar más validaciones según tus necesidades)
    if (nombre === "" || apellido === "" || telefono === "" || rut === "" || fechaNacimiento === "" || correo === "" || repetirCorreo === "" || contraseña === "" || repetirContraseña === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Validar que las contraseñas coincidan
    if (contraseña !== repetirContraseña) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Crear un objeto usuario con los datos proporcionados
    var nuevoUsuario = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        rut: rut,
        fechaNacimiento: fechaNacimiento,
        correo: correo,
        contraseña: contraseña
    };

    // Agregar el nuevo usuario a la lista
    listaUsuarios.push(nuevoUsuario);

    // Almacenar la lista de usuarios en localStorage
    localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));

    // Aquí puedes realizar otras acciones, como redireccionar a una página de inicio de sesión
    alert("Usuario registrado con éxito. Redirigiendo a la página de inicio de sesión.");

    // Simular una redirección (puedes cambiar la URL según tus necesidades)
    window.location.href = "/pages/login.html";
}

// También puedes imprimir la lista de usuarios fuera de la función
console.log("Lista de usuarios al inicio:", listaUsuarios);

// En la página de inicio u otra página donde necesitas acceder a la lista de usuarios
var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios')) || [];

console.log("Lista de usuarios en la página de inicio:", listaUsuarios);
