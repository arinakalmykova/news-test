document.addEventListener('DOMContentLoaded', initMenu);

async function initMenu() {
    const container = document.querySelector('.mobile-menu');

    try {
        const res = await fetch('/news_test/api/getMenu');
        const data = await res.json();

        const rootLevel = buildLevel(data, 0);
        container.appendChild(rootLevel);
        rootLevel.classList.add('active');

    } catch (e) {
        console.error('Ошибка загрузки меню', e);
    }
}

function buildLevel(items, level) {
    const levelContainer = document.createElement('div');
    levelContainer.className = 'menu-level';
    levelContainer.dataset.level = level;

    const ul = document.createElement('ul');

    if (level > 0) {
        const back = document.createElement('div');
        back.className = 'back-button';
        back.textContent = '← Назад';

        back.addEventListener('click', () => {
            levelContainer.classList.remove('active');
            document
                .querySelector(`.menu-level[data-level="${level - 1}"]`)
                .classList.add('active');
        });

        levelContainer.appendChild(back);
    }

    items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.title;
    li.style.cursor = 'pointer';

    if (item.children && item.children.length) {
        li.classList.add('has-children');

        li.addEventListener('click', (e) => {
            e.stopPropagation(); 

            levelContainer.classList.remove('active');

            let nextLevel = document.querySelector(`.menu-level[data-level="${level + 1}"]`);
            if (!nextLevel) {
                nextLevel = buildLevel(item.children, level + 1);
                document.querySelector('.mobile-menu').appendChild(nextLevel);
            }
            nextLevel.classList.add('active');
        });
    } else if (item.url) {
        li.addEventListener('click', () => {
            window.location.href = item.url;
        });
    }

    ul.appendChild(li);
});


    levelContainer.appendChild(ul);
    return levelContainer;
}


const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('closeMenu');

burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
});

function closeMenuFunc() {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
}

closeMenu.addEventListener('click', closeMenuFunc);
overlay.addEventListener('click', closeMenuFunc);
