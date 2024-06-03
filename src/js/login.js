document.getElementById('entrar').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão
  
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
  
    // Verifica se o email e a senha estão corretos
    if (email === "alinesantana2024@gmail.com" && senha === "bundona") {
      window.location.href = "final.html"; // Redireciona para final.html
    } else {
      alert("Email ou senha incorretos. Tente novamente.");
    }
  });
  