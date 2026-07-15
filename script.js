const translations = {
  en: {
    skip: "Skip to content",
    navDrivers: "Drivers",
    navServices: "Services",
    navContact: "Contact",
    call: "Call Us",
    heroEyebrow: "Freight transportation across the United States",
    heroTitle: "Moving Freight.<br><span>Building Trust.</span>",
    heroCopy: "Dependable transportation, clear communication and real opportunities for professional drivers.",
    driverButton: "Driver Opportunities",
    rateButton: "Request a Freight Rate",
    trustSafety: "Safety focused",
    trustCommunication: "Clear communication",
    trustNationwide: "Nationwide service",
    driversEyebrow: "Driver opportunities",
    driversTitle: "A better path forward.",
    driversLead: "Choose the opportunity that fits your goals and work with a company that values professional drivers.",
    talkButton: "Talk with our team →",
    companyTitle: "Company Driver",
    companyText: "Competitive percentage pay while we handle truck maintenance and repair costs.",
    leaseTitle: "Lease to Purchase",
    leaseText: "A practical opportunity for qualified drivers working toward truck ownership.",
    rentalTitle: "Truck Lease & Rental",
    rentalText: "Flexible equipment options for qualified drivers and owner-operators.",
    servicesEyebrow: "Freight services",
    servicesTitle: "The right equipment for every load.",
    servicesLead: "Reliable service supported by professional drivers and responsive communication.",
    dryVanTitle: "Dry Van",
    dryVanText: "Dependable transportation for general and packaged freight.",
    flatbedTitle: "Flatbed",
    flatbedText: "Safe transport for construction, oversized and specialized freight.",
    reeferTitle: "Reefer",
    reeferText: "Temperature-controlled transportation for sensitive freight.",
    contactEyebrow: "Let's get moving",
    contactTitle: "Ready to work with Amazing Cargo?",
    phoneLabel: "Call us",
    emailLabel: "Email us",
    footerTagline: "MOVING FREIGHT. BUILDING TRUST.",
    rights: "All rights reserved."
  },
  es: {
    skip: "Ir al contenido",
    navDrivers: "Conductores",
    navServices: "Servicios",
    navContact: "Contacto",
    call: "Llámenos",
    heroEyebrow: "Transporte de carga en todo Estados Unidos",
    heroTitle: "Moviendo Carga.<br><span>Generando Confianza.</span>",
    heroCopy: "Transporte confiable, comunicación clara y oportunidades reales para conductores profesionales.",
    driverButton: "Oportunidades para Conductores",
    rateButton: "Solicitar Tarifa de Carga",
    trustSafety: "Enfocados en la seguridad",
    trustCommunication: "Comunicación clara",
    trustNationwide: "Servicio nacional",
    driversEyebrow: "Oportunidades para conductores",
    driversTitle: "Un mejor camino hacia adelante.",
    driversLead: "Elija la oportunidad que se adapte a sus metas y trabaje con una empresa que valora a los conductores profesionales.",
    talkButton: "Hable con nuestro equipo →",
    companyTitle: "Conductor de Empresa",
    companyText: "Pago competitivo por porcentaje mientras nosotros cubrimos el mantenimiento y las reparaciones del camión.",
    leaseTitle: "Arrendamiento con Compra",
    leaseText: "Una oportunidad práctica para conductores calificados que desean ser propietarios de su camión.",
    rentalTitle: "Arrendamiento y Renta",
    rentalText: "Opciones flexibles de equipo para conductores calificados y propietarios-operadores.",
    servicesEyebrow: "Servicios de carga",
    servicesTitle: "El equipo adecuado para cada carga.",
    servicesLead: "Servicio confiable respaldado por conductores profesionales y comunicación receptiva.",
    dryVanTitle: "Caja Seca",
    dryVanText: "Transporte confiable para carga general y empacada.",
    flatbedTitle: "Plataforma",
    flatbedText: "Transporte seguro para construcción, carga sobredimensionada y especializada.",
    reeferTitle: "Refrigerado",
    reeferText: "Transporte con temperatura controlada para carga sensible.",
    contactEyebrow: "Pongámonos en marcha",
    contactTitle: "¿Listo para trabajar con Amazing Cargo?",
    phoneLabel: "Llámenos",
    emailLabel: "Escríbanos",
    footerTagline: "MOVIENDO CARGA. GENERANDO CONFIANZA.",
    rights: "Todos los derechos reservados."
  }
};

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;
  localStorage.setItem("amazingCargoLanguage", language);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = dictionary[element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });

  document.querySelectorAll(".lang").forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

document.querySelectorAll(".lang").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

setLanguage(localStorage.getItem("amazingCargoLanguage") || "en");
