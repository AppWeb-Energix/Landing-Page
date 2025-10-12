let position = 0;
const speed = 1.3;

const lidersTrack = document.querySelector(".liders-track");
const liders = document.querySelectorAll(".liders-card");

liders.forEach((lider) => {
  const clone = lider.cloneNode(true);
  lidersTrack.appendChild(clone);
});

function moveslider() {
  position -= speed;

  const totalwidth = lidersTrack.scrollWidth / 2;
  if (Math.abs(position) >= totalwidth) position = 0;
  lidersTrack.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(moveslider);
}

moveslider();

(() => {
  const slider = document.querySelector(".services-slider");
  if (!slider) return;

  const track = slider.querySelector(".track");
  const cards = [...track.children];
  const prev = slider.querySelector(".prev");
  const next = slider.querySelector(".next");
  const dotsEl = slider.querySelector(".dots");

  let perView = 4; // cuántas visibles a la vez
  let index = 0; // índice de la primera tarjeta visible
  let maxIndex = 0; // hasta dónde puedo llegar
  let cardWidth = 0;

  function calcPerView() {
    if (window.innerWidth >= 1024) perView = 3;
    else if (window.innerWidth >= 640) perView = 2;
    else perView = 1;
  }

  function layout() {
    calcPerView();
    const wrapWidth = slider.clientWidth - 88; // resta espacio flechas
    cardWidth = Math.floor((wrapWidth - (perView - 1) * 24) / perView);
    cards.forEach((c) => (c.style.minWidth = cardWidth + "px"));

    maxIndex = cards.length - perView; // último índice permitido
    index = Math.min(index, maxIndex);

    move();
    drawDots();
  }

  function move() {
    track.style.transform = `translateX(-${index * (cardWidth + 24)}px)`;
    drawDots();
  }

  function drawDots() {
    dotsEl.innerHTML = "";
    for (let i = 0; i <= maxIndex; i++) {
      const b = document.createElement("button");
      if (i === index) b.setAttribute("aria-current", "true");
      b.addEventListener("click", () => {
        index = i;
        move();
      });
      dotsEl.appendChild(b);
    }
  }

  function go(dir) {
    index = Math.max(0, Math.min(maxIndex, index + dir));
    move();
  }

  prev.addEventListener("click", () => go(-1));
  next.addEventListener("click", () => go(1));
  window.addEventListener("resize", layout, { passive: true });

  // init
  layout();
})();

// Helpers
function limpiarFormulario(form) {
  form?.reset();
}


// === Event delegation (funciona aunque el script cargue antes del HTML) ===
document.addEventListener("click", (e) => {
  const target = e.target;

  // Toggle mobile nav
  if (target.closest(".nav-toggle")) {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("open");
    return;
  }


  // Nuevo: Alternar idioma con un solo botón
  if (target.id === "lang-toggle") {
    const btn = target;
    let lang = btn.getAttribute("data-lang");
    // Alternar idioma
    if (lang === "en") {
      btn.textContent = "ES";
      btn.setAttribute("data-lang", "es");
      import("./assets/locale/es.js").then((m) => {
        try { m.setLang && m.setLang(); } catch (e) { console.error("Error setting ES lang:", e); }
      });
    } else {
      btn.textContent = "EN";
      btn.setAttribute("data-lang", "en");
      import("./assets/locale/en.js").then((m) => {
        try { m.setLang && m.setLang(); } catch (e) { console.error("Error setting EN lang:", e); }
      });
    }
    return;
  }

});

// Idioma por defecto: inglés
window.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.textContent = "EN";
    langBtn.setAttribute("data-lang", "en");
    import("./assets/locale/en.js").then((m) => {
      try { m.setLang && m.setLang(); } catch (e) { console.error("Error setting default EN lang:", e); }
    });
  }
});

// 6) Submit (formulario de contacto y otros)
document.addEventListener("submit", (e) => {
  const form = e.target;
  // Contacto
  if (form.matches("#contactForm")) {
    e.preventDefault();
    // Detectar idioma activo
    let lang = "es";
    const activeBtn = document.querySelector(".lang-btn.active");
    if (activeBtn) lang = activeBtn.getAttribute("data-lang") || "es";
    // Mensaje según idioma
    const msg = document.getElementById("contact-success");
    if (msg) {
      msg.textContent =
        lang === "en"
          ? "Message sent successfully! We will contact you soon."
          : "¡Mensaje enviado correctamente! Pronto nos pondremos en contacto.";
      msg.style.display = "block";
    }
    // Limpiar campos
    form.reset();
    setTimeout(() => {
      if (msg) msg.style.display = "none";
    }, 3500);
    return;
  }
});
