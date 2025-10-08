export function setLang() {
  // Testimonios (cards)
  const testimonials = document.querySelectorAll('.testimonials-grid .testimonial-card');
  if (testimonials.length >= 3) {
    // 1. María López
    testimonials[0].querySelector('.testimonial-text p').textContent =
      'Desde que uso Energix, reduje mi recibo de luz en casi un 20%. Ahora entiendo mejor qué aparatos consumen más y cómo optimizar mi consumo.';
    testimonials[0].querySelector('.testimonial-from').textContent = 'De María López';
    testimonials[0].querySelector('.testimonial-city').textContent = 'Lima';
    // 2. Jorge Ramírez
    testimonials[1].querySelector('.testimonial-text p').textContent =
      'Las alertas en tiempo real me ayudaron a detectar un electrodoméstico que estaba gastando de más. Es como tener un asesor de energía en casa.';
    testimonials[1].querySelector('.testimonial-from').textContent = 'De Jorge Ramírez';
    testimonials[1].querySelector('.testimonial-city').textContent = 'Arequipa';
    // 3. Carolina Fernández
    testimonials[2].querySelector('.testimonial-text p').textContent =
      'Lo mejor es la simplicidad. No necesito ser experto en energía para ahorrar. Energix me da la información clara y fácil de entender.';
    testimonials[2].querySelector('.testimonial-from').textContent = 'De Carolina Fernández';
    testimonials[2].querySelector('.testimonial-city').textContent = 'Trujillo';
  }
  // Textos en español
  document.querySelector('.nav-links a[href="#hero"]').textContent = 'Nosotros';
  document.querySelector('.nav-links a[href="#services"]').textContent = 'Servicios';
  document.querySelector('.nav-links a[href="#subscription"]').textContent = 'Subscripciones';
  document.querySelector('.nav-links a[href="#contact"]').textContent = 'Contacto';
  document.querySelector('.login').textContent = 'Iniciar Sesión';
  document.querySelector('.cta-button').textContent = 'Empezar ahora';
  // Hero
  document.querySelector('.hero-center h1').textContent = 'Energía inteligente y conectada, en la palma de tu mano';
  document.querySelector('.hero-desc').textContent = 'Energix te ayuda a entender, controlar y optimizar el uso de cada dispositivo en tu hogar, con reportes claros y alertas inteligentes.';
  // Liders
  document.querySelector('.liders h2').textContent = 'Con la confianza de líderes en energía';
  // Features
  document.querySelector('.features-below h2').innerHTML = 'Deja que la tecnología<br>trabaje por ti';
  document.querySelector('.features-below p').innerHTML = 'En Energix creemos que reducir el consumo eléctrico no tiene por qué ser complicado.<br>Nuestra plataforma transforma tus datos de energía en información clara, ayudándote a ahorrar sin perder comodidad.';

  // Sección de servicios
  const servicesTitle = document.querySelector('#services > h2');
  if (servicesTitle) servicesTitle.innerHTML = 'Tu consumo <em>bajo control</em>, siempre';
  const serviceLabels = document.querySelectorAll('.services-slider .label');
  if (serviceLabels.length >= 4) {
    serviceLabels[0].textContent = 'Monitoreo en tiempo real';
    serviceLabels[1].textContent = 'Alertas de consumo inusual';
    serviceLabels[2].textContent = 'Reportes semanales';
    serviceLabels[3].textContent = 'Consejos de ahorro personalizados';
  }
  // Videos
  document.querySelector('.videos > h2').textContent = 'Conoce más';
  document.querySelector('.about-team > h3').textContent = 'Sobre el equipo';
  document.querySelector('.about-team p').textContent = 'Conozca al equipo detrás de Energix, comprometido con un futuro energético más sostenible.';
  document.querySelector('.about-product > h3').textContent = 'Sobre el producto';
  document.querySelector('.about-product p').textContent = 'Descubre cómo Energix puede transformar la forma en que gestionas su consumo energético.';
  // Planes
  document.querySelector('.basic-plan h2').textContent = 'Plan Básico';
  document.querySelector('.basic-plan h3').textContent = '(Gratuito)';
  document.querySelector('.basic-plan .cta-button').textContent = 'Ver más';
  // Lista Basic
  const basicLis = document.querySelectorAll('.basic-plan ul li');
  if (basicLis.length >= 3) {
    basicLis[0].textContent = 'Historial de consumo (últimos 7 días)';
    basicLis[1].textContent = 'Alertas mensuales';
    basicLis[2].textContent = 'Integración con dispositivos (sujeto a condiciones)';
  }
  document.querySelector('.student-plan h2').textContent = 'Plan Estudiantíl';
  document.querySelector('.student-plan h3').textContent = '(Económico)';
  document.querySelector('.student-plan .cta-button').textContent = 'Ver más';
  // Lista Student
  const studentLis = document.querySelectorAll('.student-plan ul li');
  if (studentLis.length >= 5) {
    studentLis[0].textContent = 'Todo lo del Plan Básico';
    studentLis[1].textContent = 'Historial ampliado (últimos 3 meses)';
    studentLis[2].textContent = 'Recomendaciones personalizadas para ahorrar';
    studentLis[3].textContent = 'Alertas inteligentes (consumo inusual, luces encendidas)';
    studentLis[4].textContent = 'Integración con hasta 2 dispositivos inteligentes';
  }
  document.querySelector('.family-plan h2').textContent = 'Plan Familiar';
  document.querySelector('.family-plan h3').textContent = '(Premium)';
  document.querySelector('.family-plan .cta-button').textContent = 'Ver más';
  // Lista Family
  const familyLis = document.querySelectorAll('.family-plan ul li');
  if (familyLis.length >= 7) {
    familyLis[0].textContent = 'Todo lo del Plan Estudiantil';
    familyLis[1].textContent = 'Historial completo sin límites';
    familyLis[2].textContent = 'Pronóstico de consumo y ahorro estimado';
    familyLis[3].textContent = 'Exportación de reportes en PDF y Excel';
    familyLis[4].textContent = 'Integración con varios dispositivos IoT';
    familyLis[5].textContent = 'Panel estadístico familiar';
    familyLis[6].textContent = 'Soporte prioritario';
  }
  // Contacto
  document.querySelector('.contact h1').textContent = 'Contáctanos';
  // Labels y placeholders del formulario de contacto
  const nombreLabel = document.querySelector('label[for="nombre"]');
  if (nombreLabel) nombreLabel.textContent = 'Nombre';
  const nombreInput = document.getElementById('nombre');
  if (nombreInput) nombreInput.placeholder = 'Ingrese su nombre';
  const apellidoLabel = document.querySelector('label[for="apellido"]');
  if (apellidoLabel) apellidoLabel.textContent = 'Apellido';
  const apellidoInput = document.getElementById('apellido');
  if (apellidoInput) apellidoInput.placeholder = 'Ingrese sus apellidos';
  const emailLabel = document.querySelector('label[for="email"]');
  if (emailLabel) emailLabel.textContent = 'Correo electrónico';
  const emailInput = document.getElementById('email');
  if (emailInput) emailInput.placeholder = 'ej. contacto@energix.com';
  const mensajeLabel = document.querySelector('label[for="mensaje"]');
  if (mensajeLabel) mensajeLabel.textContent = 'Mensaje';
  const mensajeInput = document.getElementById('mensaje');
  if (mensajeInput) mensajeInput.placeholder = '';
  document.querySelector('input.submit').value = 'Enviar';
  // Footer (footer-info)
  const footerInfo = document.querySelector('.footer-info');
  if (footerInfo) {
    const h1 = footerInfo.querySelector('h1');
    if (h1) h1.textContent = 'Energix';
    const ps = footerInfo.querySelectorAll('p');
    if (ps[0]) ps[0].textContent = 'Energia inteligente y conectada, en la palma de tu mano.';
    if (ps[1]) ps[1].textContent = '© 2025 Todos los derechos reservados.';
  }
  // Footer (social-links)
  const socialLinks = document.querySelectorAll('.social-links a');
  if (socialLinks.length >= 3) {
    socialLinks[0].textContent = 'Nosotros';
    socialLinks[1].textContent = 'Servicios';
    socialLinks[2].textContent = 'Contacto';
  }
}
