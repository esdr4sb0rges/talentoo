// ========================================
// 404 PAGE JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Log da página visitada (útil para analytics)
    console.log('Página 404 acessada:', window.location.href);
    
    // Opcional: Enviar para analytics
    // trackPageNotFound(window.location.href);
    
    // Adiciona efeitos visuais extras
    addInteractiveEffects();
});

/**
 * Adiciona efeitos interativos à página
 */
function addInteractiveEffects() {
    const errorNumber = document.querySelector('.error-number');
    
    // Efeito de parallax suave no mouse
    document.addEventListener('mousemove', function(e) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        
        if (errorNumber) {
            errorNumber.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
}

/**
 * Função para rastrear páginas 404 (integração com analytics)
 * 
 * ⚠️ IMPORTANTE - ANALYTICS:
 * 
 * Esta função pode ser usada para rastrear páginas não encontradas
 * e ajudar a identificar links quebrados ou URLs incorretas.
 * 
 * Exemplo de integração com Google Analytics:
 * 
 * function trackPageNotFound(url) {
 *     if (typeof gtag !== 'undefined') {
 *         gtag('event', 'page_not_found', {
 *             'page_location': url,
 *             'page_title': '404 - Page Not Found'
 *         });
 *     }
 * }
 */
function trackPageNotFound(url) {
    // Implementar integração com sistema de analytics
    console.log('Tracking 404 for URL:', url);
}

