particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 70,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#7F5AF0"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.7,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#7F5AF0",
            "opacity": 0.2,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 0.3
                }
            },
            "push": {
                "particles_nb": 3
            }
        }
    },
    "retina_detect": true
});

// Typewriter Effect
const phrases = [
    "Interfaces Intuitivas",
    "Experiências Digitais",
    "Soluções Criativas",
    "Aplicações Web",
    "Sistemas Escaláveis",
    "Designs Impactantes"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    const typewriterElement = document.getElementById('typewriter');

    if (isDeleting) {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 40;
    } else {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 1500;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
    }

    setTimeout(typeWriter, typingSpeed);
}

// Inicia o efeito
setTimeout(typeWriter, 1000);

// Scroll navigation
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Ativa dots de navegação
const dots = document.querySelectorAll('.dot');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });

    dots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.dataset.section === current) {
            dot.classList.add('active');
        }
    });
});

// Click nos dots
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const sectionId = dot.dataset.section;
        scrollToSection(sectionId);
    });
});

// Animação das barras de habilidades quando a seção é visível
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkills() {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skills').forEach(section => {
    observer.observe(section);
});

document.getElementById("whatsappForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = '#25D366';
    popup.style.color = 'white';
    popup.style.padding = '20px';
    popup.style.borderRadius = '10px';
    popup.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    popup.style.zIndex = '1000';
    popup.style.textAlign = 'center';
    popup.style.fontFamily = 'Arial, sans-serif';
    popup.style.maxWidth = '300px';
    popup.style.width = '100%';

    popup.innerHTML = `
        <i class="fab fa-whatsapp" style="font-size: 40px; margin-bottom: 10px;"></i>
        <h3 style="margin: 10px 0;">Abrindo WhatsApp...</h3>
        <p style="margin-bottom: 15px;">Estamos direcionando sua mensagem para o WhatsApp.</p>
        <div id="countdown" style="font-size: 24px; font-weight: bold;">5</div>
    `;

    document.body.appendChild(popup);

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
    overlay.style.zIndex = '999';
    document.body.appendChild(overlay);

    let count = 5;
    const countdownElement = document.getElementById('countdown');
    const countdownInterval = setInterval(() => {
        count--;
        countdownElement.textContent = count;

        if (count <= 0) {
            clearInterval(countdownInterval);

            const phoneNumber = "+5591982297971";
            const fullMessage = `Olá! ;)\n\nTenho uma nova mensagem do portfólio:\n\n- Nome: ${name}\n- Email: ${email}\n- Assunto: ${subject}\n- Mensagem:\n${message}`;
            const encodedMessage = encodeURIComponent(fullMessage);
            const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            // Remover popup e overlay
            document.body.removeChild(popup);
            document.body.removeChild(overlay);

            // Abrir WhatsApp
            window.open(whatsappLink, '_blank');
        }
    }, 1000);

    popup.addEventListener('click', function () {
        clearInterval(countdownInterval);
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
    });
});
