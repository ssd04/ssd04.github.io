(function() {
    var saved = localStorage.getItem('theme');
    var theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
})();

window.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    function setIcon(theme) {
        toggle.textContent = theme === 'dark' ? '☀' : '☾';
        toggle.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    }

    setIcon(document.documentElement.getAttribute('data-theme'));

    toggle.addEventListener('click', function() {
        var current = document.documentElement.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        setIcon(next);
    });
});
