document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todas as seções
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.menu-link');
    
    // Função para verificar se elemento está visível na tela
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.7 &&
            rect.bottom >= 0
        );
    }
    
    // Função para ativar animações das seções visíveis
    function checkVisibility() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('visible');
            }
        });
    }
    
    // Função para atualizar link ativo durante a rolagem
    function updateActiveLink() {
        let current = '';
        const scrollPosition = window.scrollY + 100; // Ajuste fino
        
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
    
    // Smooth scroll aprimorado com easing
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Remove highlight de todas as seções
                sections.forEach(s => s.classList.remove('highlight'));
                
                // Adiciona highlight na seção alvo
                targetSection.classList.add('highlight');
                
                // Scroll suave com easing
                const targetPosition = targetSection.offsetTop - 70; // Ajuste para o menu
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1000; // Duração em ms
                let start = null;
                
                function animation(currentTime) {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const progress = Math.min(timeElapsed / duration, 1);
                    
                    // Função de easing (easeInOutCubic)
                    const easing = progress < 0.5 
                        ? 4 * progress * progress * progress 
                        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                    
                    window.scrollTo(0, startPosition + (distance * easing));
                    
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    }
                }
                
                requestAnimationFrame(animation);
                
                // Remove o highlight após 1.5 segundos
                setTimeout(() => {
                    targetSection.classList.remove('highlight');
                }, 1500);
            }
        });
    });
    
    // Verifica visibilidade inicial
    checkVisibility();
    
    // Adiciona listeners de evento
    window.addEventListener('scroll', () => {
        checkVisibility();
        updateActiveLink();
    });
    
    window.addEventListener('resize', checkVisibility);
    
    // Efeito de rolagem com parallax (opcional)
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Efeito parallax suave nas seções
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

// Efeito de progresso de rolagem (opcional)
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

