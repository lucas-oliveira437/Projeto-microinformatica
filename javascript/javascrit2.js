// Filtro de Galeria
function filterGallery(category) {
    // Seleciona todos os itens da galeria e botões de filtro
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.filter-btn');

    // Remove a classe 'active' de todos os botões e adiciona no botão clicado
    buttons.forEach(button => button.classList.remove('active'));
    const activeButton = document.querySelector(`.filter-btn[data-category="${category}"]`);
    if (activeButton) activeButton.classList.add('active');

    // Exibe ou oculta as imagens com base na categoria
    items.forEach(item => {
        if (item.getAttribute('data-category') === category || category === 'todos') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Modal de Visualização e Navegação
let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-item img');

// Abre o modal com a imagem clicada
function openModal(index) {
    document.getElementById("imageModal").style.display = "flex";
    showImage(index);
}

// Fecha o modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Exibe a imagem no modal
function showImage(index) {
    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");

    // Ajusta o índice da imagem
    if (index >= images.length) currentImageIndex = 0;
    else if (index < 0) currentImageIndex = images.length - 1;
    else currentImageIndex = index;

    // Define a imagem e o texto do modal
    modalImage.src = images[currentImageIndex].src;
    modalCaption.textContent = images[currentImageIndex].alt;
}

// Navega para a imagem anterior ou próxima
function changeImage(step) {
    showImage(currentImageIndex + step);
}

// Abrir o modal quando clicar em qualquer imagem da galeria
images.forEach((img, index) => {
    img.onclick = function() {
        currentImageIndex = index;
        openModal(currentImageIndex);
    };
});

// Fechar o modal ao clicar no botão de fechar
document.getElementById("close").onclick = function() {
    closeModal();
};

// Navegar para a imagem anterior
document.getElementById("prev").onclick = function() {
    changeImage(-1);
};

// Navegar para a próxima imagem
document.getElementById("next").onclick = function() {
    changeImage(1);
};

// Fechar o modal ao clicar fora da imagem
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        closeModal();
    }
};

// Adicionando funcionalidade de fechar ao clicar fora da imagem
const modal = document.getElementById("imageModal");
modal.addEventListener("click", function(event) {
    // Se o clique for fora da imagem, fecha o modal
    if (event.target === modal) {
        closeModal();
    }
});
