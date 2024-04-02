const reviewInput = document.getElementById('reviewInput');
const submitButton = document.getElementById('submitButton');
const reviewsList = document.getElementById('reviewsList');

// Обработчик нажатия на кнопку отправки отзыва
submitButton.addEventListener('click', function() {
    const reviewText = reviewInput.value;

    if (reviewText.trim() !== '') {
        const reviewItem = document.createElement('div');
        reviewItem.textContent = reviewText;
        reviewsList.appendChild(reviewItem);
        reviewInput.value = '';

        // Сохранение отзыва в локальное хранилище
        saveReviewToLocalStorage(reviewText);
    } else {
        alert("Пожалуйста, введите отзыв перед отправкой.");
    }
});

// Функция для сохранения отзыва в локальное хранилище
function saveReviewToLocalStorage(review) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

// Загрузка отзывов из локального хранилища при загрузке страницы
window.addEventListener('load', function() {
    let savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    savedReviews.forEach(function(review) {
        const reviewItem = document.createElement('div');
        reviewItem.textContent = review;
        reviewsList.appendChild(reviewItem);
    });
});
