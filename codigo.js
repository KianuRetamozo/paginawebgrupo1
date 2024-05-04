
document.getElementById("contactForm").addEventListener("submit", function (event) {
    var nombre = document.getElementsByName("nombre")[0].value.trim();
    var email = document.getElementsByName("email")[0].value.trim();
    var mensaje = document.getElementsByName("mensaje")[0].value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese su nombre."); 
        event.preventDefault(); 
        return;
    }
    if (email === "") {
        alert("Por favor, ingrese su correo electrónico."); 
        event.preventDefault();
        return;
    }
    if (mensaje === "") {
        alert("Por favor, ingrese su mensaje.");
        event.preventDefault();
        return;
    }
});
