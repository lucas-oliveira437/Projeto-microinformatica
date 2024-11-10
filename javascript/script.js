function filterGallery(category) {
    // Seleciona todos os itens da galeria
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.filter-btn'); // Seleciona todos os botões de filtro
    
    // Limpa a classe 'active' de todos os botões
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Adiciona a classe 'active' ao botão clicado
    const activeButton = document.querySelector(`.filter-btn[data-category="${category}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    // Exibe ou oculta as imagens com base na categoria selecionada
    items.forEach(item => {
        if (item.getAttribute('data-category') === category || category === 'todos') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
