// Seleciona todas as estrelas
const stars = document.querySelectorAll('.rating .star');

// Variável para rastrear a avaliação atual
let currentRating = 0;

// Adiciona o evento de clique para cada estrela
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        // Verifica se o usuário clicou na mesma estrela para resetar
        if (currentRating === index + 1) {
            // Reseta todas as estrelas
            stars.forEach(item => {
                item.classList.remove('fa-solid');
                item.classList.add('fa-regular'); // Torna todas vazias
            });

            // Reseta o valor da avaliação
            currentRating = 0;

            // Reseta o valor do input escondido
            const ratingInput = document.querySelector('.rating input[name="rating"]');
            if (ratingInput) {
                ratingInput.value = 0; // Define como 0
            }
        } else {
            // Atualiza as estrelas selecionadas
            stars.forEach((item, idx) => {
                if (idx <= index) {
                    item.classList.remove('fa-regular');
                    item.classList.add('fa-solid'); // Torna preenchida
                } else {
                    item.classList.remove('fa-solid');
                    item.classList.add('fa-regular'); // Torna vazia
                }
            });

            // Atualiza a avaliação atual
            currentRating = index + 1;

            // Atualiza o valor do input escondido
            const ratingInput = document.querySelector('.rating input[name="rating"]');
            if (ratingInput) {
                ratingInput.value = currentRating; // Define como a avaliação atual
            }
        }
    });
});
