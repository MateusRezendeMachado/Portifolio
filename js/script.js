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
            'tmdb-desc': 'Projeto utilizando a API do The Movie Database',
            'stiquifar-desc': 'Landing page desenvolvida para um cliente real',
            'bingo-desc': 'Projeto pessoal',
            'caporale-desc': 'Landing page para um escritório de advocacia',
            'memoria-titulo': 'Jogo da Memória',
            'tmdb-titulo': 'Filmes Populares do TMDB',
            'bingo-titulo': 'Gerador de cartelas de bingo',
            'formacao-iot': 'Técnico em Internet das Coisas (IoT)',
            'formacao-ingles-inter': 'Inglês – Nível Intermediário',
            'formacao-sistemas': 'Sistemas para Internet',
            'formacao-ingles-avancado': 'Curso de Inglês – Avançado',
            'instituicao-iftm': 'Instituto Federal do Triângulo Mineiro (IFTM)',
            'periodo-sistemas': '2025 – Atual',
            'periodo-ingles': '2026 – Atual',
            'curriculo-pt': '🇧🇷 Português',
            'curriculo-en': '🇺🇸 Inglês',
            'page-title': 'Currículo Mateus Machado',
            'aria-idioma': 'Mudar para inglês',
            'aria-tema': 'Alternar tema',
            'alt-perfil': 'Foto de perfil',
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
            'tmdb-desc': 'Project using The Movie Database API',
            'stiquifar-desc': 'Landing page built for a real client',
            'bingo-desc': 'Personal project',
            'caporale-desc': 'Landing page for a law firm',
            'memoria-titulo': 'Memory Game',
            'tmdb-titulo': 'TMDB Popular Movies',
            'bingo-titulo': 'Bingo Card Generator',
            'formacao-iot': 'Technical Course in Internet of Things (IoT)',
            'formacao-ingles-inter': 'English – Intermediate Level',
            'formacao-sistemas': 'Technology Degree in Internet Systems',
            'formacao-ingles-avancado': 'English Course – Advanced',
            'instituicao-iftm': 'Federal Institute of Triângulo Mineiro (IFTM)',
            'periodo-sistemas': '2025 – Present',
            'periodo-ingles': '2026 – Present',
            'curriculo-pt': '🇧🇷 Portuguese',
            'curriculo-en': '🇺🇸 English',
            'page-title': 'Mateus Machado – Resume',
            'aria-idioma': 'Switch to Portuguese',
            'aria-tema': 'Toggle theme',
            'alt-perfil': 'Profile photo',
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

    const SUPPORTED_LANGS = ['pt', 'en'];
    let currentLang = 'pt';

    // ==================== FUNÇÕES DE IDIOMA ====================
    // Lê/grava a preferência sem quebrar se o localStorage estiver bloqueado
    function readStored(key) {
        try { return localStorage.getItem(key); } catch (e) { return null; }
    }

    function writeStored(key, value) {
        try { localStorage.setItem(key, value); } catch (e) { /* ignora */ }
    }

    // Ordem de prioridade: ?lang= na URL > escolha salva > idioma do navegador
    function detectLanguage() {
        const fromUrl = new URLSearchParams(window.location.search).get('lang');
        if (SUPPORTED_LANGS.includes(fromUrl)) return fromUrl;

        const saved = readStored('lang');
        if (SUPPORTED_LANGS.includes(saved)) return saved;

        const browserLangs = navigator.languages || [navigator.language || 'pt'];
        return browserLangs.some(l => l.toLowerCase().startsWith('pt')) ? 'pt' : 'en';
    }

    function applyLanguage(lang) {
        const dict = translations[lang];
        if (!dict) return;
        currentLang = lang;

        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
        document.title = dict['page-title'];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const text = dict[el.dataset.i18n];
            if (text) el.textContent = text;
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const text = dict[el.dataset.i18nAria];
            if (text) el.setAttribute('aria-label', text);
        });
        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            const text = dict[el.dataset.i18nAlt];
            if (text) el.setAttribute('alt', text);
        });

        // O botão mostra o idioma para o qual a página vai mudar
        if (langToggle) {
            langToggle.textContent = lang === 'pt' ? 'English' : 'Português';
        }
    }

    // Troca feita pelo usuário: aplica e guarda a escolha
    function changeLanguage(lang) {
        applyLanguage(lang);
        writeStored('lang', lang);
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
    const savedTheme = readStored('theme');
    applyTheme(savedTheme === 'light' ? 'light' : 'dark');

    applyLanguage(detectLanguage());

    // ==================== EVENTOS ====================
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isLight = body.classList.contains('light-theme');
            applyTheme(isLight ? 'dark' : 'light');
            writeStored('theme', isLight ? 'dark' : 'light');
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