'use strict';

function getWednesday() {
    return new Date().getUTCDay();
}

// Browser alerts triggered during loading may be suppressed on mobile.
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('wednesday-popup');
    const message = document.getElementById('wednesday-popup-message');
    const close = document.getElementById('wednesday-popup-close');
    if (!popup || !message || !close) return;

    message.textContent = getWednesday() === 3
        ? 'It is Wednesday, my dudes.'
        : 'It is not Wednesday, my dudes.';
    popup.hidden = false;
    close.focus();

    const dismiss = () => { popup.hidden = true; };
    close.addEventListener('click', dismiss);
    popup.addEventListener('click', (event) => {
        if (event.target === popup) dismiss();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !popup.hidden) dismiss();
    });
});

function navBar() {
    const nav = document.getElementById('navbar');
    if (nav) nav.classList.toggle('responsive');
}
