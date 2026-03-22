const menuItems = document.querySelectorAll('.menu-item');
const loadDataButton = document.getElementById('load-data-button');
const iconButtons = document.querySelectorAll('.icon-button');

for (const menuItem of menuItems) {
    const activateItem = () => {
        for (const item of menuItems) {
            item.classList.remove('active');
        }

        menuItem.classList.add('active');
    };

    menuItem.addEventListener('click', activateItem);
    menuItem.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            activateItem();
        }
    });
}

for (const button of iconButtons) {
    button.addEventListener('click', () => {
        const action = button.dataset.action;
        const record = button.dataset.record;

        if (action === 'view') {
            console.log('Visualizar registro', record);
            window.alert(`Visualizar registro ${record}`);
            return;
        }

        console.log('Abrir documento', record);
        window.alert(`Abrir documento ${record}`);
    });
}

if (loadDataButton) {
    const defaultText = loadDataButton.textContent;

    loadDataButton.addEventListener('click', () => {
        loadDataButton.classList.add('is-loading');
        loadDataButton.textContent = 'Cargando...';

        window.setTimeout(() => {
            loadDataButton.classList.remove('is-loading');
            loadDataButton.textContent = defaultText;
        }, 1000);
    });
}