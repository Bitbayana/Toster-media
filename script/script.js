// Получаем ссылки на элементы DOM
const thumbnails = document.querySelectorAll('.thumbnail');
const mainSlide = document.querySelector('.main-slide img');

// Функция для обработки клика по миниатюре
function handleThumbnailClick(event) {
    const thumbnail = event.currentTarget;
    const thumbnailImage = thumbnail.querySelector('img');

    // Применяем анимацию плавного исчезания главного изображения
    mainSlide.style.opacity = 0;

    setTimeout(() => {
        // Обновляем главное изображение на основе кликнутой миниатюры
        mainSlide.src = thumbnailImage.src;
        mainSlide.alt = thumbnailImage.alt;

        // Применяем анимацию плавного появления главного изображения
        setTimeout(() => {
            mainSlide.style.opacity = 1;
        }, 100);
    }, 100);

    // Удаляем выделение у всех миниатюр и выделяем текущую
    thumbnails.forEach((thumb) => {
        thumb.classList.remove('active');
    });
    thumbnail.classList.add('active');
}

// Добавляем обработчик клика к каждой миниатюре
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', handleThumbnailClick);
});