document.addEventListener('DOMContentLoaded', () => {
    // Check saved language or default to 'kk'
    const savedLang = localStorage.getItem('language') || 'kk';
    setLanguage(savedLang);

    // Attach event listeners to switchers
    const switchers = document.querySelectorAll('.lang-switch');
    switchers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});

function setLanguage(lang) {
    // Save preference
    localStorage.setItem('language', lang);

    // Set body class for CSS targeting
    document.body.classList.remove('lang-kk-active', 'lang-ru-active');
    document.body.classList.add(`lang-${lang}-active`);

    // Update switcher text/visibility if needed (optional)
    // Here we might want to toggle the button text or state
    const switchers = document.querySelectorAll('.lang-switch');
    switchers.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    console.log(`Language set to: ${lang}`);
}
