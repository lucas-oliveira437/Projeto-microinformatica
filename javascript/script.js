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

function openModal(index) {
    document.getElementById("imageModal").style.display = "block";
    showImage(index);
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

function showImage(index) {
    const modalImage = document.getElementById("modalImage");
    if (index >= images.length) currentImageIndex = 0;
    else if (index < 0) currentImageIndex = images.length - 1;
    else currentImageIndex = index;
    modalImage.src = images[currentImageIndex].src;
}

function changeImage(step) {
    showImage(currentImageIndex + step);
}
