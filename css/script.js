document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.querySelector(".login-form");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        var username = usernameInput.value;
        var password = passwordInput.value;

        console.log("Nombre de usuario: " + username);
        console.log("Contraseña: " + password);
        window.location.href = "ruta-a-tu-pagina-principal.html";
    });
});
