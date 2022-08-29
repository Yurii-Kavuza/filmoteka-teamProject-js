const refs = {
    watched: document.querySelector('.js-btn-watched'),
    queue: document.querySelector('.js-btn-queue'),
};

refs.watched.addEventListener('click', currentWatchedPage);
refs.queue.addEventListener('click', currentQueuePage);

export function currentWatchedPage() {
    if (refs.queue.classList.contains('library__btn--current')) {
        refs.queue.classList.remove('library__btn--current');
        refs.watched.classList.add('library__btn--current');
    } else {
        refs.watched.classList.add('library__btn--current');
    }
};


export function currentQueuePage() {
    if (refs.watched.classList.contains('library__btn--current')) {
        refs.watched.classList.remove('library__btn--current');
        refs.queue.classList.add('library__btn--current');
    } else {
        refs.queue.classList.add('library__btn--current');
    }

};