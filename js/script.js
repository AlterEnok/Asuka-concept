document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    if (menuIcon && menu) {
        menuIcon.addEventListener('click', () => {
            menu.classList.toggle('_active'); // Активирует мобильное меню
            menuIcon.classList.toggle('_active'); // Анимация кнопки бургер-меню
        });
    }
});


document.querySelector('.hero__play-btn').addEventListener('click', function () {
    const video = document.querySelector('.hero__video');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');

    if (video.paused) {
        video.play(); // Возобновление воспроизведения
        playIcon.style.display = 'none'; // Скрыть иконку Play
        pauseIcon.style.display = 'block'; // Показать иконку Pause
    } else {
        video.pause(); // Поставить на паузу
        playIcon.style.display = 'block'; // Показать иконку Play
        pauseIcon.style.display = 'none'; // Скрыть иконку Pause
    }
});