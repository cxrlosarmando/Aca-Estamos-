// JavaScript
function volverAInicioDeSesion() {
    
    window.location.href = './login.html';
}

function irRegistro() {
    
    window.location.href ='formulario-resgistro.html'
}




function RedirigiraloginE() {
    
    window.location.href = './login.html';
}





function registrarUsuario(tipo) {
    // Obtén los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;

    // Crea un objeto usuario con los datos
    var usuario = {
        tipo: tipo,
        nombre: nombre,
        correo: correo
    };

    // Aquí podrías realizar acciones adicionales o enviar el objeto a algún lugar si lo necesitas

    // Muestra el objeto de usuario en la consola para propósitos de prueba
    console.log(usuario);

    // Puedes reiniciar el formulario si es necesario
    document.getElementById('registroForm').reset();
}