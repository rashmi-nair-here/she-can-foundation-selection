//sidebar functionality (for mobile phones)
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

//number display
document.addEventListener('DOMContentLoaded', () => {
    const createOdometer = (el, value) => {
        const odometer = new Odometer({
            el: el,
            value: value,
        });

        odometer.update(value);
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statisticOneOdometer = document.querySelector('.statistic-one-odometer');
                createOdometer(statisticOneOdometer, 120000000);
                const statisticTwoOdometer = document.querySelector('.statistic-two-odometer');
                createOdometer(statisticTwoOdometer, 120000);
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1});

    const targetOne = document.querySelector('.statistic-one-odometer');
    observer.observe(targetOne);

    const targetTwo = document.querySelector('.statistic-two-odometer');
    observer.observe(targetTwo);
})

//typewriter effect
const textContainer = document.getElementById('bold');
const text = "SHE CAN";

function textTypingEffect(element, text, i = 0) {
    element.textContent += text[i];

    if (i === text.length - 1) {
        textContainer.classList.add('textAnimate');
        return;
    }
    
    setTimeout(() => textTypingEffect(element, text, i + 1), 200);
}

textTypingEffect(textContainer, text);

//hover effect
const container = document.querySelectorAll('.card');
container.forEach(container => {
    const paragraph = container.querySelector('.revealOnHover');
    const header = container.querySelector('.header');
    container.addEventListener('mouseover', () => {
        if (paragraph) {
            header.style.opacity = '0';
            paragraph.style.opacity = '1';
        }
    });
    container.addEventListener('mouseleave', () => {
        if (paragraph) {
            header.style.opacity = '1';
            paragraph.style.opacity = '0';
        }
    });
});

//rewriting effect
const textContent = document.querySelector('.retypeHeader');
const words = ["TODAY, WE CAN", "TOMORROW, SHE CAN"];

let i = 0;

function typing() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            textContent.innerHTML += word.shift();
        }
        else {
            deleting();
            return false;
        }
        setTimeout(loopTyping, 150);
    };
    loopTyping();
}

function deleting() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            textContent.innerHTML = word.join("");
        }
        else {
            if (words.length > (i + 1)) {
                i++;
            }
            else {
                i = 0;
            }
            typing();
            return false;
        }
        setTimeout(loopDeleting, 120);
    }
    loopDeleting();
}

typing();

//cursor
const circle = document.querySelector('.cursor');
window.addEventListener('mousemove', (e) => {
    circle.style.left = e.clientX + 'px';
    circle.style.top = e.clientY + 'px';
})