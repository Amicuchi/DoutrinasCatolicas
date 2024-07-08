// Função para criar um card
function createCard(data) {
    const cardItem = document.createElement('div');
    cardItem.className = 'card-item swiper-slide';

    const cardTitle = document.createElement('h2');
    cardTitle.className = 'card-title';
    cardTitle.textContent = data.title;

    const cardInstitution = document.createElement('p');
    cardInstitution.className = 'card-institution';
    cardInstitution.textContent = `Instituição: ${data.institution}`;

    const cardInstitutedBy = document.createElement('p');
    cardInstitutedBy.className = 'card-institutedBy';
    cardInstitutedBy.textContent = `Instituído por: ${data.institutedBy}`;

    const cardVerse = document.createElement('blockquote');
    cardVerse.className = 'card-verse';
    cardVerse.textContent = data.verse;

    cardItem.appendChild(cardTitle);
    cardItem.appendChild(cardInstitution);
    cardItem.appendChild(cardInstitutedBy);
    cardItem.appendChild(cardVerse);

    return cardItem;
}

// Função para carregar os dados do JSON e criar os cards
async function loadCards() {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();

        const cardList = document.getElementById('card-list');
        data.forEach(item => {
            const card = createCard(item);
            cardList.appendChild(card);
        });

        // Inicialize the Swiper after add the cards
        const swiper = new Swiper('.slider-wraper', {
            loop: true,
            grabCursor: true,
            spaceBetween: 30,
        
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
        
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
            // How many objects will appear in the screen
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
        
                768: {
                    slidesPerView: 2
                },
        
                1024: {
                    slidesPerView: 3
                }
            }
        });

    } catch (error) {
        console.error('Erro ao carregar os dados do JSON:', error);
    }
}

// Chame a função para carregar os cards quando a página for carregada
document.addEventListener('DOMContentLoaded', loadCards);
