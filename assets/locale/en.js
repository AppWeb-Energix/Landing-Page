export function setLang() {
  // Testimonials (cards)
  const testimonials = document.querySelectorAll('.testimonials-grid .testimonial-card');
  if (testimonials.length >= 3) {
    // 1. María López
    testimonials[0].querySelector('.testimonial-text p').textContent =
      'Since using Energix, I have reduced my electricity bill by almost 20%. Now I better understand which devices consume the most and how to optimize my usage.';
    testimonials[0].querySelector('.testimonial-from').textContent = 'From María López';
    testimonials[0].querySelector('.testimonial-city').textContent = 'Lima';
    // 2. Jorge Ramírez
    testimonials[1].querySelector('.testimonial-text p').textContent =
      'Real-time alerts helped me detect an appliance that was over-consuming. It\'s like having an energy advisor at home.';
    testimonials[1].querySelector('.testimonial-from').textContent = 'From Jorge Ramírez';
    testimonials[1].querySelector('.testimonial-city').textContent = 'Arequipa';
    // 3. Carolina Fernández
    testimonials[2].querySelector('.testimonial-text p').textContent =
      'The best thing is the simplicity. I don\'t need to be an energy expert to save. Energix gives me clear and easy-to-understand information.';
    testimonials[2].querySelector('.testimonial-from').textContent = 'From Carolina Fernández';
    testimonials[2].querySelector('.testimonial-city').textContent = 'Trujillo';
  }
  // Textos en inglés
  document.querySelector('.nav-links a[href="#hero"]').textContent = 'About Us';
  document.querySelector('.nav-links a[href="#services"]').textContent = 'Services';
  document.querySelector('.nav-links a[href="#subscription"]').textContent = 'Subscriptions';
  document.querySelector('.nav-links a[href="#contact"]').textContent = 'Contact';
  document.querySelector('.login').textContent = 'Sign In';
  document.querySelector('.cta-button').textContent = 'Get Started';
  // Hero
  document.querySelector('.hero-center h1').textContent = 'Smart and connected energy, in the palm of your hand';
  document.querySelector('.hero-desc').textContent = 'Energix helps you understand, control, and optimize the use of every device in your home, with clear reports and smart alerts.';
  // Liders
  document.querySelector('.liders h2').textContent = 'Trusted by energy leaders';
  // Features
  document.querySelector('.features-below h2').innerHTML = 'Let technology<br>work for you';
  document.querySelector('.features-below p').innerHTML = "At Energix, we believe that reducing electricity consumption doesn't have to be complicated.<br>Our platform turns your energy data into clear information, helping you save without losing comfort.";

  // Services section
  const servicesTitle = document.querySelector('#services > h2');
  if (servicesTitle) servicesTitle.innerHTML = 'Your <em>consumption</em> under control, always';
  const serviceLabels = document.querySelectorAll('.services-slider .label');
  if (serviceLabels.length >= 4) {
    serviceLabels[0].textContent = 'Real-time monitoring';
    serviceLabels[1].textContent = 'Unusual consumption alerts';
    serviceLabels[2].textContent = 'Weekly reports';
    serviceLabels[3].textContent = 'Personalized saving tips';
  }
  // Videos
  document.querySelector('.videos > h2').textContent = 'Learn more';
  document.querySelector('.about-team > h3').textContent = 'About the team';
  document.querySelector('.about-team p').textContent = 'Meet the team behind Energix, committed to a more sustainable energy future.';
  document.querySelector('.about-product > h3').textContent = 'About the product';
  document.querySelector('.about-product p').textContent = 'Discover how Energix can transform the way you manage your energy consumption.';
  // Planes
  document.querySelector('.basic-plan h2').textContent = 'Basic Plan';
  document.querySelector('.basic-plan h3').textContent = '(Free)';
  document.querySelector('.basic-plan .cta-button').textContent = 'See more';
  // Lista Basic
  const basicLis = document.querySelectorAll('.basic-plan ul li');
  if (basicLis.length >= 3) {
    basicLis[0].textContent = 'Consumption history (last 7 days)';
    basicLis[1].textContent = 'Monthly alerts';
    basicLis[2].textContent = 'Device integration (subject to conditions)';
  }
  document.querySelector('.student-plan h2').textContent = 'Student Plan';
  document.querySelector('.student-plan h3').textContent = '(Affordable)';
  document.querySelector('.student-plan .cta-button').textContent = 'See more';
  // Lista Student
  const studentLis = document.querySelectorAll('.student-plan ul li');
  if (studentLis.length >= 5) {
    studentLis[0].textContent = 'Everything in Basic Plan';
    studentLis[1].textContent = 'Extended history (last 3 months)';
    studentLis[2].textContent = 'Personalized saving recommendations';
    studentLis[3].textContent = 'Smart alerts (unusual consumption, lights on)';
    studentLis[4].textContent = 'Integration with up to 2 smart devices';
  }
  document.querySelector('.family-plan h2').textContent = 'Family Plan';
  document.querySelector('.family-plan h3').textContent = '(Premium)';
  document.querySelector('.family-plan .cta-button').textContent = 'See more';
  // Lista Family
  const familyLis = document.querySelectorAll('.family-plan ul li');
  if (familyLis.length >= 7) {
    familyLis[0].textContent = 'Everything in Student Plan';
    familyLis[1].textContent = 'Unlimited history';
    familyLis[2].textContent = 'Consumption forecast and estimated savings';
    familyLis[3].textContent = 'Export reports in PDF and Excel';
    familyLis[4].textContent = 'Integration with multiple IoT devices';
    familyLis[5].textContent = 'Family statistics panel';
    familyLis[6].textContent = 'Priority support';
  }
  // Contacto
  document.querySelector('.contact h1').textContent = 'Contact Us';
  // Labels y placeholders del formulario de contacto
  const nombreLabel = document.querySelector('label[for="nombre"]');
  if (nombreLabel) nombreLabel.textContent = 'First Name';
  const nombreInput = document.getElementById('nombre');
  if (nombreInput) nombreInput.placeholder = 'Enter your first name';
  const apellidoLabel = document.querySelector('label[for="apellido"]');
  if (apellidoLabel) apellidoLabel.textContent = 'Last Name';
  const apellidoInput = document.getElementById('apellido');
  if (apellidoInput) apellidoInput.placeholder = 'Enter your last name';
  const emailLabel = document.querySelector('label[for="email"]');
  if (emailLabel) emailLabel.textContent = 'Email';
  const emailInput = document.getElementById('email');
  if (emailInput) emailInput.placeholder = 'e.g. contact@energix.com';
  const mensajeLabel = document.querySelector('label[for="mensaje"]');
  if (mensajeLabel) mensajeLabel.textContent = 'Message';
  const mensajeInput = document.getElementById('mensaje');
  if (mensajeInput) mensajeInput.placeholder = 'Type your message here';
  document.querySelector('input.submit').value = 'Send';
  // Footer (footer-info)
  const footerInfo = document.querySelector('.footer-info');
  if (footerInfo) {
    const h1 = footerInfo.querySelector('h1');
    if (h1) h1.textContent = 'Energix';
    const ps = footerInfo.querySelectorAll('p');
    if (ps[0]) ps[0].textContent = 'Smart and connected energy, in the palm of your hand.';
    if (ps[1]) ps[1].textContent = '© 2025 All rights reserved.';
  }
  // Footer (social-links)
  const socialLinks = document.querySelectorAll('.social-links a');
  if (socialLinks.length >= 3) {
    socialLinks[0].textContent = 'About Us';
    socialLinks[1].textContent = 'Services';
    socialLinks[2].textContent = 'Contact';
  }
}
