function openTab(tabName) {
    // Esconde todas as seções
    var tabs = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    
    // Mostra apenas a seção clicada
    document.getElementById(tabName).style.display = "block";
}

// Abre a aba "Sobre Nós" por padrão ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    openTab('sobre');
});
