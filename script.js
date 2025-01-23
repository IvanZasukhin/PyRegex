function scrollToCards() {
    const cardsSection = document.getElementById('cards-section');
    if (cardsSection) {
        cardsSection.scrollIntoView({ behavior: 'smooth' });
    }
}


window.scrollToCards = scrollToCards;

function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    const body = document.body;

    function toggleTheme() {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
        updateThemeIcon();
    }

    function updateThemeIcon() {
        const themeToggleIcon = themeToggle.querySelector('i');
        if (!themeToggleIcon) return;

        if (body.classList.contains('dark-theme')) {
            themeToggleIcon.className = 'fas fa-sun';
        } else {
            themeToggleIcon.className = 'fas fa-moon';
        }
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }
    updateThemeIcon();

    themeToggle.addEventListener('click', toggleTheme);
}

document.addEventListener('DOMContentLoaded', function() {
    setupThemeToggle();
    
    if (document.getElementById('cards-section')) {
        loadExampleCards();
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const themeId = urlParams.get('id');
    if (themeId && document.getElementById('card-container')) {
        loadThemeCards(themeId);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const themeHeading = document.getElementById('theme-heading');
    const cardContainer = document.getElementById('card-container');
    const urlParams = new URLSearchParams(window.location.search);
    const themeId = urlParams.get('id');

    if(themes[themeId]){
         themeHeading.textContent = themes[themeId].title;
         loadCards(themes[themeId].cards, cardContainer);
    }

    function loadCards(cards, container){
      cards.forEach(cardData => {
               const card = document.createElement('div');
               card.classList.add('card');
               card.innerHTML = `
                <div class="card-content">
                    <h3>${cardData.title}</h3>
                    <p>${cardData.description}</p>
                    <div class="card-example">
                        <pre><code>${cardData.code}</code></pre>
                    </div>
                </div>

               `;
                container.appendChild(card);
           });
    }
});

async function loadCardsData() {
    const themeHeading = document.getElementById('theme-heading');
    const cardContainer = document.getElementById('card-container');
    const urlParams = new URLSearchParams(window.location.search);
    const themeId = urlParams.get('id');

    try {
        const response = await fetch('data/cards.json');
        const themesData = await response.json();
        
        if (themesData[themeId]) {
            themeHeading.textContent = themesData[themeId].title;
            
            themesData[themeId].cards.forEach(cardData => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <div class="card-content">
                        <h3>${cardData.title}</h3>
                        <p>${cardData.description}</p>
                        <div class="card-example">
                            <pre><code>${cardData.code}</code></pre>
                        </div>
                    </div>
                `;
                cardContainer.appendChild(card);
            });
        }
    } catch (error) {
        console.error('Ошибка при загрузке данных карточек:', error);
    }
}

async function loadExampleCards() {
    try {
        const containers = {
            'basic-functions': document.getElementById('basic-functions-example'),
            'metacharacters': document.getElementById('metacharacters-example'),
            'flags': document.getElementById('flags-example')
        };

        for (const [themeId, container] of Object.entries(containers)) {
            if (container && themes[themeId] && themes[themeId].cards.length > 0) {
                const card = document.createElement('div');
                card.className = 'example-card';
                
                card.onclick = () => window.location.href = `theme.html?id=${themeId}`;

                const cardData = themes[themeId].cards[0];
                
                card.innerHTML = `
                    <div class="card-content">
                        <h3>${cardData.title}</h3>
                        <p>${cardData.description}</p>
                        <div class="card-example">
                            <pre><code>${cardData.code}</code></pre>
                        </div>
                    </div>
                    <p class="click-hint">Нажмите, чтобы увидеть все примеры</p>
                `;

                container.appendChild(card);
            }
        }
    } catch (error) {
        console.error('Ошибка при загрузке примеров карточек:', error);
    }
}

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error('Ошибка при копировании:', err);
        return false;
    }
}

function showCopyNotification(element, success) {
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = success ? 'Скопировано!' : 'Ошибка копирования';
    notification.style.position = 'absolute';
    notification.style.top = '10px';
    notification.style.right = '10px';
    notification.style.padding = '8px 12px';
    notification.style.borderRadius = '4px';
    notification.style.backgroundColor = success ? '#4CAF50' : '#f44336';
    notification.style.color = 'white';
    notification.style.fontSize = '14px';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s ease';

    element.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '1';
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 1500);
    }, 100);
}

function loadThemeCards(themeId) {
    const container = document.getElementById('card-container');
    const themeHeading = document.getElementById('theme-heading');
    
    if (!themes[themeId]) {
        console.error('Тема не найдена');
        return;
    }

    const theme = themes[themeId];

    if (themeHeading) {
        themeHeading.textContent = theme.title;
    }

    container.innerHTML = '';

    theme.cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.style.position = 'relative'; 

        const titleElement = document.createElement('h3');
        titleElement.innerHTML = card.title;
        
        const descriptionElement = document.createElement('p');
        descriptionElement.innerHTML = card.description;
        
        const codeContainer = document.createElement('pre');
        const codeElement = document.createElement('code');
        codeElement.textContent = card.code;
        codeContainer.appendChild(codeElement);
        
        const copyHint = document.createElement('div');
        copyHint.className = 'copy-hint';
        copyHint.textContent = 'Нажмите, чтобы скопировать код';
        copyHint.style.textAlign = 'right';
        copyHint.style.fontSize = '12px';
        copyHint.style.color = '#666';
        copyHint.style.marginTop = '5px';
        
        cardElement.appendChild(titleElement);
        cardElement.appendChild(descriptionElement);
        cardElement.appendChild(codeContainer);
        cardElement.appendChild(copyHint);
        
        codeContainer.addEventListener('click', async () => {
            const success = await copyToClipboard(card.code);
            showCopyNotification(cardElement, success);
        });

        container.appendChild(cardElement);
        
        if (window.hljs) {
            hljs.highlightElement(codeElement);
        }
    });
}