// Redirecionamento para as redes sociais
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-icon');

    socialLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Previne o comportamento padrão de clicar no link
            event.preventDefault();
            
            // Redireciona para o link associado ao ícone
            const url = link.getAttribute('href');
            window.location.href = url; // Redireciona para o URL do link
        });
    });
});
