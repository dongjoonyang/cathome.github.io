const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab_content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-tab');

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    contents.forEach(c => {
        c.classList.remove('active');
        if (c.getAttribute('data-content') === target) {
        c.classList.add('active');
        }
    });
    });
});
