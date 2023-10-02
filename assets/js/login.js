document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        // Autenticação teste
        if (email === "admin@admin.com" && senha === "admin") {
            window.location.href = "./assets/pages/menu.html"; // Redirecionar para menu.html
        } else {
            alert("Credenciais inválidas. Tente novamente.");
        }
    });
});
