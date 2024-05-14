// Функция для добавления стиля подчеркивания активной ссылке
    function underlineActiveLink(link) {
        link.style.textDecoration = 'underline 3px solid orange'; // Установите подчёркивание с жирной линией и цветом lightblue
    }

    // Получаем ссылки на кнопки меню
    var homeLink = document.querySelector('a[href="../index.html"]');
    var toursLink = document.querySelector('a[href="../tours.html"]');
    var contactLink = document.querySelector('a[href="../contact.html"]');

    // Получаем текущий путь к файлу
    var currentPagePath = window.location.pathname;

    // Проверяем текущий путь к файлу и добавляем стиль подчеркивания к активной ссылке
    if (currentPagePath.endsWith("index.html")) {
        underlineActiveLink(homeLink);
    }
    if (currentPagePath.endsWith("tours.html")) {
        underlineActiveLink(toursLink);
    }
    if (currentPagePath.endsWith("contact.html")) {
        underlineActiveLink(contactLink);
    }