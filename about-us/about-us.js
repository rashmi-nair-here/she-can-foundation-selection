//sidebar functionality (for mobile phones)
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

//cursor
const circle = document.querySelector('.cursor');
window.addEventListener('mousemove', (e) => {
    circle.style.left = e.clientX + 'px';
    circle.style.top = e.clientY + 'px';
})