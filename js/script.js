document.addEventListener('DOMContentLoaded', () => {
    // ==================== ELEMENTOS ====================
    const themeToggle = document.getElementById('themeToggle');
    const langToggle = document.getElementById('langToggle');
    const body = document.body;
    const profileImg = document.getElementById('profileImage');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu-link');
    const dropdownBtn = document.querySelector('.btn-curriculo-dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    // ==================== TRADUÇÕES ====================
    const translations = {
        pt: {
            'menu-sobre': 'Sobre',
            'menu-formacao': 'Formação',
            'menu-projetos': 'Projetos',
            'btn-curriculo': 'Currículo',
            'menu-contato': 'Contato',
            'sobre-titulo': 'Sobre Mim',
            'sobre-p1': 'Olá! Meu nome é Mateus Rezende Machado e sou estudante de Sistemas para Internet no Instituto Federal do Triângulo Mineiro (IFTM). Tenho formação técnica em Internet das Coisas (IoT) e experiência em desenvolvimento web, com foco em front-end utilizando HTML, CSS, JavaScript e React.',
            'sobre-p2': 'Durante minha trajetória acadêmica e profissional, atuei como estagiário de desenvolvimento front-end na Sunsale System, onde trabalhei na melhoria da interface e estilização de um dos principais sites da empresa. Além disso, desenvolvo projetos próprios e acadêmicos disponíveis no meu GitHub, onde aplico na prática os conhecimentos adquiridos durante minha formação.',
            'formacao-titulo': 'Formação Acadêmica',
            'concluido': '✓ Concluído',
            'andamento': '⏳ Em andamento',
            'btn-concluido': 'Ver certificado',
            'btn-andamento': 'Ver comprovante de matrícula',
            'projetos-titulo': 'Projetos',
            'bookflow-desc': 'Projeto desenvolvido utilizando arquitetura MVC',
            'breakingbad-desc': 'Projeto desenvolvido no 1º semestre',
            'memoria-desc': 'Projeto desenvolvido no 2º semestre',
            'estagio-desc': 'Projeto desenvolvido durante estágio',
            'contato-titulo': 'Entre em Contato',
            'contato-email': 'E-mail',
            'contato-telefone': 'Telefone',
            'contato-github': 'GitHub',
            'contato-linkedin': 'LinkedIn',
            'contato-github-link': 'Acessar perfil',
            'contato-linkedin-link': 'Acessar perfil',
            'contato-mensagem': 'Estou disponível para oportunidades, colaborações e novos projetos.',
            'footer-copyright': '© 2026 Mateus Rezende Machado. Todos os direitos reservados.',
            'footer-github': 'GitHub',
            'footer-linkedin': 'LinkedIn',
            'footer-email': 'Email'
        },
        en: {
            'menu-sobre': 'About',
            'menu-formacao': 'Education',
            'menu-projetos': 'Projects',
            'btn-curriculo': 'Resume',
            'menu-contato': 'Contact',
            'sobre-titulo': 'About Me',
            'sobre-p1': 'Hi! My name is Mateus Rezende Machado and I am a student of Internet Systems at the Federal Institute of Triângulo Mineiro (IFTM). I hold a technical degree in Internet of Things (IoT) and have experience in web development, with a focus on front-end technologies such as HTML, CSS, JavaScript, and React.',
            'sobre-p2': 'During my academic and professional journey, I worked as a Front-End Development Intern at Sunsale System, where I helped improve the interface and styling of one of the company’s main websites. In addition, I develop personal and academic projects available on my GitHub, where I apply in practice the knowledge I gain throughout my studies.',
            'formacao-titulo': 'Education',
            'concluido': '✓ Completed',
            'andamento': '⏳ In Progress',
            'btn-concluido': 'View certificate',
            'btn-andamento': 'View enrollment proof',
            'projetos-titulo': 'Projects',
            'bookflow-desc': 'Project built using MVC architecture',
            'breakingbad-desc': 'Project developed during the 1st semester',
            'memoria-desc': 'Project developed during the 2nd semester',
            'estagio-desc': 'Project developed during internship',
            'contato-titulo': 'Get in Touch',
            'contato-email': 'Email',
            'contato-telefone': 'Phone',
            'contato-github': 'GitHub',
            'contato-linkedin': 'LinkedIn',
            'contato-github-link': 'View profile',
            'contato-linkedin-link': 'View profile',
            'contato-mensagem': 'I am available for opportunities, collaborations, and new projects.',
            'footer-copyright': '© 2026 Mateus Rezende Machado. All rights reserved.',
            'footer-github': 'GitHub',
            'footer-linkedin': 'LinkedIn',
            'footer-email': 'Email'
        }
    };

    let currentLang = 'pt';

    // ==================== FUNÇÕES DE IDIOMA ====================
    function changeLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        if (langToggle) {
            langToggle.textContent = lang === 'pt' ? 'English' : 'Português';
        }
        localStorage.setItem('lang', lang);
    }

    // ==================== FUNÇÕES DE TEMA E IMAGEM ====================
    function updateProfileImage(theme) {
        if (profileImg) {
            profileImg.src = theme === 'light' ? 'img/perfil-claro.jpg' : 'img/perfil-escuro.jpg';
        }
    }

    function applyTheme(theme) {
        if (theme === 'light') {
            body.classList.add('light-theme');
            if (themeToggle) themeToggle.textContent = '🌙';
            updateProfileImage('light');
        } else {
            body.classList.remove('light-theme');
            if (themeToggle) themeToggle.textContent = '☀️';
            updateProfileImage('dark');
        }
    }

    // ==================== SCROLL E ANIMAÇÕES ====================
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.7 && rect.bottom >= 0;
    }

    function checkVisibility() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('visible');
            }
        });
    }

    function updateActiveLink() {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // ==================== INICIALIZAÇÃO ====================
    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme === 'light' ? 'light' : 'dark');

    const savedLang = localStorage.getItem('lang');
    if (savedLang && (savedLang === 'pt' || savedLang === 'en')) {
        changeLanguage(savedLang);
    } else {
        changeLanguage('pt');
    }

    // ==================== EVENTOS ====================
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isLight = body.classList.contains('light-theme');
            applyTheme(isLight ? 'dark' : 'light');
            localStorage.setItem('theme', isLight ? 'dark' : 'light');
        });
    }

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'pt' ? 'en' : 'pt';
            changeLanguage(newLang);
        });
    }

    // Dropdown do currículo
    if (dropdownBtn && dropdownContent) {
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownContent.classList.toggle('show');
        });

        document.addEventListener('click', (e) => {
            if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
                dropdownContent.classList.remove('show');
            }
        });
    }

    // Scroll suave nos links do menu
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                sections.forEach(s => s.classList.remove('highlight'));
                targetSection.classList.add('highlight');
                const targetPosition = targetSection.offsetTop - 70;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1000;
                let start = null;
                function animation(currentTime) {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const progress = Math.min(timeElapsed / duration, 1);
                    const easing = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                    window.scrollTo(0, startPosition + (distance * easing));
                    if (timeElapsed < duration) requestAnimationFrame(animation);
                }
                requestAnimationFrame(animation);
                setTimeout(() => targetSection.classList.remove('highlight'), 1500);
            }
        });
    });

    // Visibilidade inicial
    checkVisibility();

    window.addEventListener('scroll', () => {
        checkVisibility();
        updateActiveLink();
    });

    window.addEventListener('resize', checkVisibility);

    // Parallax opcional
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        sections.forEach(section => {
            const speed = 0.5;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrolled > sectionTop - window.innerHeight && scrolled < sectionTop + sectionHeight) {
                const yPos = -(scrolled - sectionTop) * speed;
                section.style.backgroundPosition = `center ${yPos}px`;
            }
        });
    });
});