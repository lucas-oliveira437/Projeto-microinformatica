

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
    const modalCaption = document.getElementById("modalCaption");

    // Ajusta o índice da imagem
    if (index >= images.length) currentImageIndex = 0;
    else if (index < 0) currentImageIndex = images.length - 1;
    else currentImageIndex = index;

    // Define a imagem e o texto do modal
    modalImage.src = images[currentImageIndex].src;
    modalCaption.textContent = images[currentImageIndex].alt;
}

function changeImage(step) {
    showImage(currentImageIndex + step);
}
let currentIndex = 0;
const images2 = document.querySelectorAll(".thumbnail");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const closeButton = document.getElementById("close");

// Quando uma imagem é clicada, abre no modal
images2.forEach((img, index) => {
    img.onclick = function() {
        currentIndex = index;
        modal.style.display = "block";
        modalImage.src = img.src;
    };
});

// Fechar o modal
closeButton.onclick = function() {
    modal.style.display = "none";
};

// Navegar para a imagem anterior
prevButton.onclick = function() {
    currentIndex = (currentIndex === 0) ? images2.length - 1 : currentIndex - 1;
    modalImage.src = images2[currentIndex].src;
};

// Navegar para a próxima imagem
nextButton.onclick = function() {
    currentIndex = (currentIndex === images2.length - 1) ? 0 : currentIndex + 1;
    modalImage.src = images2[currentIndex].src;
};

// Fechar o modal ao clicar fora da imagem
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};