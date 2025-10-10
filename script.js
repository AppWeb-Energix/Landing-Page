
let position = 0;
const speed=1.3;

const lidersTrack=document.querySelector('.liders-track');
const liders = document.querySelectorAll('.liders-card');

liders.forEach(lider =>{
    const clone = lider.cloneNode(true);
    lidersTrack.appendChild(clone);
});

function moveslider(){

    position -=speed;

    const totalwidth = lidersTrack.scrollWidth/2;
    if(Math.abs(position)>=totalwidth)position=0;
    lidersTrack.style.transform = `translateX(${position}px)`; 
    requestAnimationFrame(moveslider)

}

moveslider();


(() => {
  const slider = document.querySelector('.services-slider');
  if (!slider) return;

  const track  = slider.querySelector('.track');
  const cards  = [...track.children];
  const prev   = slider.querySelector('.prev');
  const next   = slider.querySelector('.next');
  const dotsEl = slider.querySelector('.dots');

  let perView = 4;      // cuántas visibles a la vez
  let index = 0;        // índice de la primera tarjeta visible
  let maxIndex = 0;     // hasta dónde puedo llegar
  let cardWidth = 0;    

  function calcPerView(){
    if (window.innerWidth >= 1024) perView = 3;
    else if (window.innerWidth >= 640) perView = 2;
    else perView = 1;
  }

  function layout(){
    calcPerView();
    const wrapWidth = slider.clientWidth - 88; // resta espacio flechas
    cardWidth = Math.floor((wrapWidth - (perView-1)*24) / perView);
    cards.forEach(c => c.style.minWidth = cardWidth + 'px');

    maxIndex = cards.length - perView; // último índice permitido
    index = Math.min(index, maxIndex);

    move();
    drawDots();
  }

  function move(){
    track.style.transform = `translateX(-${index * (cardWidth + 24)}px)`;
    drawDots();
  }

  function drawDots(){
    dotsEl.innerHTML = '';
    for (let i = 0; i <= maxIndex; i++){
      const b = document.createElement('button');
      if (i === index) b.setAttribute('aria-current','true');
      b.addEventListener('click', () => { index = i; move(); });
      dotsEl.appendChild(b);
    }
  }

  function go(dir){
    index = Math.max(0, Math.min(maxIndex, index + dir));
    move();
  }

  prev.addEventListener('click', () => go(-1));
  next.addEventListener('click', () => go(1));
  window.addEventListener('resize', layout, { passive:true });

  // init
  layout();
})();


// Helpers
function limpiarFormulario(form) {
  form?.reset();
}
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// === Event delegation (funciona aunque el script cargue antes del HTML) ===
document.addEventListener('click', (e) => {
  const target = e.target;

  // Toggle mobile nav
  if (target.closest('.nav-toggle')) {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
    return;
  }

  // --- 0) Si es un link "real" (href != "#") y NO es trigger de modal, permitir navegación ---
  const link = target.closest('a[href]');
  if (link) {
    const href = link.getAttribute('href');
    const isRealLink = href && href !== '#' && !href.startsWith('javascript:');
    const isModalTrigger = link.matches('[data-open-modal], .open-login, .open-register, .auth-buttons .login, .auth-buttons .sign-up');
    if (isRealLink && !isModalTrigger) {
      // Mostrar loader y dejar que el navegador navegue (¡no hagas preventDefault!)
      const loader = document.getElementById('loader');
      if (loader) { loader.removeAttribute('hidden'); loader.style.display = 'grid'; }
      return; // <- importantísimo, no bloquees el click
    }
  }

  // 1) Cerrar con "X"
  if (target.closest('.close-modal')) {
    const modal = target.closest('.modal');
    if (modal) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    return;
  }

  // 2) Cerrar al hacer click fuera del contenido (overlay)
  if (target.classList?.contains('modal')) {
    target.style.display = 'none';
    target.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    return;
  }


  // Si el href NO es 'profile.html', deja que el navegador abra el enlace normalmente
}

  // 4) Internacionalización: cambiar idioma
  if (target.classList.contains('lang-btn')) {
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    target.classList.add('active');
    const lang = target.getAttribute('data-lang');
    if (lang === 'en') {
      import('./assets/locale/en.js').then(m => { try { m.setLang && m.setLang(); } catch(e) { console.error('Error setting EN lang:', e); } });
    } else if (lang === 'es') {
      import('./assets/locale/es.js').then(m => { try { m.setLang && m.setLang(); } catch(e) { console.error('Error setting ES lang:', e); } });
    }
    return;
  }

  // 3b) Abrir por data-atributo genérico (recomendado)
  const opener = target.closest('[data-open-modal]');
  if (opener) {
    e.preventDefault();
    const id = opener.getAttribute('data-open-modal');
    openModal(id);
    return;
  }

});

// Idioma por defecto: inglés
window.addEventListener('DOMContentLoaded', () => {
  const enBtn = document.querySelector('.lang-btn[data-lang="en"]');
  if (enBtn) {
    enBtn.classList.add('active');
    import('./assets/locale/en.js').then(m => { try { m.setLang && m.setLang(); } catch(e) { console.error('Error setting default EN lang:', e); } });
  }
});


// 5) Cerrar con tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal').forEach(m => {
      if (m.style.display !== 'none') {
        m.style.display = 'none';
        m.setAttribute('aria-hidden', 'true');
      }
    });
    document.body.style.overflow = '';
  }
});

// 6) Submit (formulario de contacto y otros)
document.addEventListener('submit', (e) => {
  const form = e.target;
  // Contacto
  if (form.matches('#contactForm')) {
    e.preventDefault();
    // Detectar idioma activo
    let lang = 'es';
    const activeBtn = document.querySelector('.lang-btn.active');
    if (activeBtn) lang = activeBtn.getAttribute('data-lang') || 'es';
    // Mensaje según idioma
    const msg = document.getElementById('contact-success');
    if (msg) {
      msg.textContent = lang === 'en'
        ? 'Message sent successfully! We will contact you soon.'
        : '¡Mensaje enviado correctamente! Pronto nos pondremos en contacto.';
      msg.style.display = 'block';
    }
    // Limpiar campos
    form.reset();
    setTimeout(() => { if(msg) msg.style.display = 'none'; }, 3500);
    return;
  }

  // Si es login o registro, redirige a profile.html
  const authForm = form.closest('.auth-form');
  if (authForm && (authForm.closest('#loginModal') || authForm.closest('#registerModal'))) {
    e.preventDefault();
    window.location.href = 'profile.html';
    return;
  }
});

