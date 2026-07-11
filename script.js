const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const translations = {
  en: {
    navServices: "Services",
    navOpportunities: "Opportunities",
    navAbout: "About Us",
    navWhy: "Why Us",
    navContact: "Contact",
    navQuote: "Get a Quote",
    heroEyebrow: "Reliable. Efficient. Professional.",
    heroTitle: "MOVING<br>BUSINESS<br><span>FORWARD.</span>",
    heroLead: "Amazing Cargo Inc. provides dependable freight transportation with professional communication, safety-focused operations, and opportunities that help drivers and owner-operators grow.",
    requestQuote: "Request a Quote",
    callPhone: "Call (312) 241-0973",
    offerEyebrow: "What We Offer",
    offerTitle: "Solutions That Keep You Moving",
    offerLead: "Transportation services you can count on, and opportunities that help you grow.",
    flatbedTitle: "Flatbed Freight",
    flatbedText: "Safe and reliable transport for oversized, construction, and specialized freight.",
    dryvanTitle: "Dry Van Freight",
    dryvanText: "Efficient and dependable dry van solutions for general freight across multiple lanes.",
    reeferTitle: "Reefer Freight",
    reeferText: "Temperature-controlled service for sensitive and time-critical loads.",
    leasePurchaseTitle: "Lease-to-Purchase Opportunities",
    leasePurchaseText: "Helping qualified drivers work toward truck ownership.",
    leaseRentalTitle: "Truck Lease / Rental Options",
    leaseRentalText: "Flexible truck access for drivers and owner-operators.",
    safetyFirst: "Safety First",
    safetyText: "Committed to the highest safety standards.",
    clearCommunication: "Clear Communication",
    communicationText: "Real-time updates and responsive support.",
    onTimeDelivery: "On-Time Delivery",
    onTimeText: "Your freight. Our priority. On time, every time.",
    growWithUs: "Grow With Us",
    growText: "We support drivers and owners to build a better future.",
    oppEyebrow: "Opportunities",
    oppTitle: "More than transportation — a path forward",
    oppLead: "Amazing Cargo Inc. supports qualified drivers with lease-to-purchase and truck lease/rental options designed to create greater independence and long-term opportunity.",
    leaseTitle: "Lease-to-Purchase",
    leaseText: "A practical path toward truck ownership for qualified drivers.",
    rentalTitle: "Truck Lease / Rental",
    rentalText: "Dependable equipment options for drivers and owner-operators.",
    aboutEyebrow: "About Amazing Cargo Inc.",
    aboutTitle: "Built on reliability, communication, and trust.",
    aboutLead: "Amazing Cargo Inc. is committed to dependable freight transportation, professional service, and long-term relationships with customers, drivers, and business partners.",
    aboutBody: "We approach every shipment with care and maintain clear communication throughout the transportation process. Our goal is simple: help businesses move freight efficiently, and help good drivers move forward with real opportunities.",
    quoteText: "Reliable freight. Quality equipment. Real opportunities.",
    quoteLead: "That is how we help customers, drivers and owner-operators grow.",
    whyEyebrow: "Why Choose Amazing Cargo",
    whyTitle: "A dependable partner for every mile",
    whyDrivers: "Professional Drivers",
    whyDriversText: "Respectful, responsible, and service-focused.",
    whyCommunication: "Transparent Communication",
    whyCommunicationText: "Responsive updates from pickup to delivery.",
    whySafety: "Safety Focused",
    whySafetyText: "Safety remains central to every operation.",
    whyGrowth: "Long-Term Growth",
    whyGrowthText: "We build lasting relationships and real opportunities.",
    contactEyebrow: "Contact Us",
    contactTitle: "Ready to move your business forward?",
    contactLead: "Contact Amazing Cargo Inc. to discuss your transportation needs.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    serviceAreaLabel: "Service Area",
    serviceArea: "United States",
    formName: "Name",
    formPhone: "Phone",
    formEmail: "Email",
    formInterest: "I am interested in",
    formMessage: "Message",
    optFreight: "Freight quote",
    optFlatbed: "Flatbed freight",
    optDryvan: "Dry van freight",
    optReefer: "Reefer freight",
    optLease: "Lease-to-purchase",
    optRental: "Truck lease / rental",
    sendRequest: "Send Request",
    formNote: "This form opens your email app with the request filled in."
  },
  es: {
    navServices: "Servicios",
    navOpportunities: "Oportunidades",
    navAbout: "Nosotros",
    navWhy: "Por Qué Elegirnos",
    navContact: "Contacto",
    navQuote: "Solicitar Cotización",
    heroEyebrow: "Confiable. Eficiente. Profesional.",
    heroTitle: "IMPULSANDO<br>SU NEGOCIO<br><span>HACIA ADELANTE.</span>",
    heroLead: "Amazing Cargo Inc. ofrece transporte de carga confiable, comunicación profesional, operaciones enfocadas en la seguridad y oportunidades que ayudan a crecer a conductores y propietarios-operadores.",
    requestQuote: "Solicitar Cotización",
    callPhone: "Llamar al (312) 241-0973",
    offerEyebrow: "Lo Que Ofrecemos",
    offerTitle: "Soluciones que lo mantienen en movimiento",
    offerLead: "Servicios de transporte en los que puede confiar y oportunidades que ayudan a crecer.",
    flatbedTitle: "Carga en Plataforma",
    flatbedText: "Transporte seguro y confiable para carga sobredimensionada, construcción y carga especializada.",
    dryvanTitle: "Carga en Caja Seca",
    dryvanText: "Soluciones eficientes y confiables de caja seca para carga general en múltiples rutas.",
    reeferTitle: "Carga Refrigerada",
    reeferText: "Transporte con temperatura controlada para cargas sensibles y urgentes.",
    leasePurchaseTitle: "Opciones de Arrendamiento con Compra",
    leasePurchaseText: "Ayudamos a conductores calificados a avanzar hacia la propiedad de su camión.",
    leaseRentalTitle: "Opciones de Arrendamiento / Renta",
    leaseRentalText: "Acceso flexible a camiones para conductores y propietarios-operadores.",
    safetyFirst: "La Seguridad Primero",
    safetyText: "Comprometidos con los más altos estándares de seguridad.",
    clearCommunication: "Comunicación Clara",
    communicationText: "Actualizaciones en tiempo real y soporte receptivo.",
    onTimeDelivery: "Entrega a Tiempo",
    onTimeText: "Su carga es nuestra prioridad. A tiempo, siempre.",
    growWithUs: "Crezca con Nosotros",
    growText: "Apoyamos a conductores y propietarios para construir un mejor futuro.",
    oppEyebrow: "Oportunidades",
    oppTitle: "Más que transporte: un camino hacia adelante",
    oppLead: "Amazing Cargo Inc. apoya a conductores calificados con opciones de arrendamiento con compra y arrendamiento/renta de camiones diseñadas para crear mayor independencia y oportunidades a largo plazo.",
    leaseTitle: "Arrendamiento con Compra",
    leaseText: "Un camino práctico hacia la propiedad de camiones para conductores calificados.",
    rentalTitle: "Arrendamiento / Renta de Camiones",
    rentalText: "Opciones confiables de equipo para conductores y propietarios-operadores.",
    aboutEyebrow: "Acerca de Amazing Cargo Inc.",
    aboutTitle: "Construido sobre confiabilidad, comunicación y confianza.",
    aboutLead: "Amazing Cargo Inc. está comprometida con el transporte de carga confiable, el servicio profesional y las relaciones a largo plazo con clientes, conductores y socios comerciales.",
    aboutBody: "Tratamos cada envío con cuidado y mantenemos una comunicación clara durante todo el proceso de transporte. Nuestro objetivo es simple: ayudar a las empresas a mover carga eficientemente y ayudar a buenos conductores a avanzar con oportunidades reales.",
    quoteText: "Carga confiable. Equipo de calidad. Oportunidades reales.",
    quoteLead: "Así ayudamos a crecer a clientes, conductores y propietarios-operadores.",
    whyEyebrow: "Por Qué Elegir Amazing Cargo",
    whyTitle: "Un socio confiable en cada milla",
    whyDrivers: "Conductores Profesionales",
    whyDriversText: "Respetuosos, responsables y enfocados en el servicio.",
    whyCommunication: "Comunicación Transparente",
    whyCommunicationText: "Actualizaciones receptivas desde la recogida hasta la entrega.",
    whySafety: "Enfoque en la Seguridad",
    whySafetyText: "La seguridad es fundamental en cada operación.",
    whyGrowth: "Crecimiento a Largo Plazo",
    whyGrowthText: "Construimos relaciones duraderas y oportunidades reales.",
    contactEyebrow: "Contáctenos",
    contactTitle: "¿Listo para impulsar su negocio?",
    contactLead: "Comuníquese con Amazing Cargo Inc. para hablar sobre sus necesidades de transporte.",
    phoneLabel: "Teléfono",
    emailLabel: "Correo Electrónico",
    serviceAreaLabel: "Área de Servicio",
    serviceArea: "Estados Unidos",
    formName: "Nombre",
    formPhone: "Teléfono",
    formEmail: "Correo Electrónico",
    formInterest: "Me interesa",
    formMessage: "Mensaje",
    optFreight: "Cotización de carga",
    optFlatbed: "Carga en plataforma",
    optDryvan: "Carga en caja seca",
    optReefer: "Carga refrigerada",
    optLease: "Arrendamiento con compra",
    optRental: "Arrendamiento / renta de camiones",
    sendRequest: "Enviar Solicitud",
    formNote: "Este formulario abre su aplicación de correo con la solicitud completada."
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('siteLanguage', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

const savedLanguage = localStorage.getItem('siteLanguage') || 'en';
setLanguage(savedLanguage);

const form = document.getElementById('contact-form');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);

  const subject = encodeURIComponent(`Website inquiry: ${data.get('service')}`);
  const body = encodeURIComponent(
`Name: ${data.get('name')}
Phone: ${data.get('phone')}
Email: ${data.get('email')}
Interested in: ${data.get('service')}

Message:
${data.get('message')}`
  );

  window.location.href = `mailto:office@amazingcargoinc.com?subject=${subject}&body=${body}`;
});
