// script.js
// A. Alternar tema claro/escuro
document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    // Salva preferência
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDark);
});

// B. Carregar tema salvo
window.onload = () => {
    const savedTheme = localStorage.getItem('darkTheme') === 'true';
    if(savedTheme) document.body.classList.add('dark-theme');
};

// C. Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});