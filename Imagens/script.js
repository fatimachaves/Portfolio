document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Aqui você pode adicionar a lógica para enviar o email para o seu endereço de email pessoal
    var emailContent = 'Nome: ' + name + '\nEmail: ' + email + '\nMensagem: ' + message;
    window.location.href = 'mailto:fatimachavves7@gmail.com?subject=Contato&body=' + encodeURIComponent(emailContent);

    // Limpar os campos do formulário após o envio
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  });