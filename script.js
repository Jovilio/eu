// Destacar link do menu ao clicar
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.style.textDecoration = 'none');
        link.style.textDecoration = 'underline';
    });
});

// Botão voltar ao topo
const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTop.style.display = "flex";
    } else {
        btnTop.style.display = "none";
    }
});

btnTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});
