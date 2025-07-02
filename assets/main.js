document.addEventListener('DOMContentLoaded', () => {
  // Traducciones
  const translations = {
    es: { title: 'Reserva tu Servicio', serviceLabel: 'Servicio', servicePlaceholder: '-- Elige Servicio --', services: [
        {v:'Cortar', l:'Cortar - 12,00€'},
        {v:'Tinte', l:'Tinte desde 10,00€'},
        {v:'Mechas', l:'Mechas desde 10,00€'},
        {v:'Afeitar', l:'Afeitar - 8,00€'},
        {v:'Alisado', l:'Alisado desde 10,00€'},
        {v:'Niños', l:'Niños - 10,00€'}
      ], date: 'Fecha', time: 'Hora', nameLabel: 'Nombre', namePlaceholder: 'Tu nombre', phoneLabel: 'Teléfono', phonePlaceholder: '+34 600 000 000', plus: 'Plus desplazamiento en Palma (+30,00€)', btnGenerate: 'Ver Resumen', btnSend: 'Enviar por WhatsApp', summaryPrefix: 'Buenos días, ¿sería posible reservar?:' },
    en: { title: 'Book Your Service', serviceLabel: 'Service', servicePlaceholder: '-- Choose Service --', services: [
        {v:'Cut', l:'Cut - €12.00'},
        {v:'Dye', l:'Dye from €10.00'},
        {v:'Highlights', l:'Highlights from €10.00'},
        {v:'Shave', l:'Shave - €8.00'},
        {v:'Straighten', l:'Straighten from €10.00'},
        {v:'Kids', l:'Kids - €10.00'}
      ], date: 'Date', time: 'Time', nameLabel: 'Name', namePlaceholder: 'Your name', phoneLabel: 'Phone', phonePlaceholder: '+34 600 000 000', plus: 'Travel surcharge in Palma (+€30.00)', btnGenerate: 'View Summary', btnSend: 'Send via WhatsApp', summaryPrefix: 'Good morning, would it be possible to book?:' },
    de: { title: 'Buche deinen Service', serviceLabel: 'Service', servicePlaceholder: '-- Service wählen --', services: [
        {v:'Haarschnitt', l:'Haarschnitt - 12,00€'},
        {v:'Färben', l:'Färben ab 10,00€'},
        {v:'Strähnen', l:'Strähnen ab 10,00€'},
        {v:'Rasur', l:'Rasur - 8,00€'},
        {v:'Glätten', l:'Glätten ab 10,00€'},
        {v:'Kinder', l:'Kinder - 10,00€'}
      ], date: 'Datum', time: 'Uhrzeit', nameLabel: 'Name', namePlaceholder: 'Ihr Name', phoneLabel: 'Telefon', phonePlaceholder: '+34 600 000 000', plus: 'Anfahrtszuschlag Palma (+30,00€)', btnGenerate: 'Zusammenfassung', btnSend: 'Per WhatsApp senden', summaryPrefix: 'Guten Morgen, wäre es möglich zu buchen?:' },
    fr: { title: 'Réservez votre service', serviceLabel: 'Service', servicePlaceholder: '-- Choisir un service --', services: [
        {v:'Coupe', l:'Coupe - 12,00€'},
        {v:'Coloration', l:'Coloration dès 10,00€'},
        {v:'Mèches', l:'Mèches dès 10,00€'},
        {v:'Rasage', l:'Rasage - 8,00€'},
        {v:'Lissage', l:'Lissage dès 10,00€'},
        {v:'Enfants', l:'Enfants - 10,00€'}
      ], date: 'Date', time: 'Heure', nameLabel: 'Nom', namePlaceholder: 'Votre nom', phoneLabel: 'Téléphone', phonePlaceholder: '+34 600 000 000', plus: 'Supplément déplacement Palma (+30,00€)', btnGenerate: 'Voir le résumé', btnSend: 'Envoyer sur WhatsApp', summaryPrefix: 'Bonjour, serait-il possible de réserver?:' },
    it: { title: 'Prenota il tuo servizio', serviceLabel: 'Servizio', servicePlaceholder: '-- Scegli servizio --', services: [
        {v:'Taglio', l:'Taglio - 12,00€'},
        {v:'Colorazione', l:'Colorazione da 10,00€'},
        {v:'Meches', l:'Meches da 10,00€'},
        {v:'Rasatura', l:'Rasatura - 8,00€'},
        {v:'Lisciatura', l:'Lisciatura da 10,00€'},
        {v:'Bambini', l:'Bambini - 10,00€'}
      ], date: 'Data', time: 'Ora', nameLabel: 'Nome', namePlaceholder: 'Il tuo nome', phoneLabel: 'Telefono', phonePlaceholder: '+34 600 000 000', plus: 'Supplemento trasferta Palma (+30,00€)', btnGenerate: 'Visualizza riepilogo', btnSend: 'Invia su WhatsApp', summaryPrefix: 'Buongiorno, sarebbe possibile prenotare?:' }
  };

  // Referencias DOM
  const langBtns = document.querySelectorAll('.lang-btn');
  const titleEl = document.getElementById('title');
  const serviceEl = document.getElementById('service');
  const dateEl = document.getElementById('date');
  const timeEl = document.getElementById('time');
  const nameEl = document.getElementById('name');
  const phoneEl = document.getElementById('phone');
  const labelService = document.getElementById('label-service');
  const labelDate = document.getElementById('label-date');
  const labelTime = document.getElementById('label-time');
  const labelName = document.getElementById('label-name');
  const labelPhone = document.getElementById('label-phone');
  const labelPlus = document.getElementById('label-plus');
  const btnGen = document.getElementById('btn-generate');
  const btnSend = document.getElementById('btn-send');
  const summaryEl = document.getElementById('summary');
  let currentLang = 'es';

  // Aplicar idioma
  function applyLang() {
    const t = translations[currentLang];
    titleEl.textContent = t.title;
    labelService.textContent = t.serviceLabel;
    serviceEl.innerHTML = `<option value="" disabled selected>${t.servicePlaceholder}</option>` +
      t.services.map(s => `<option value="${s.v}">${s.l}</option>`).join('');
    labelDate.textContent = t.date;
    labelTime.textContent = t.time;
    labelName.textContent = t.nameLabel;
    nameEl.placeholder = t.namePlaceholder;
    labelPhone.textContent = t.phoneLabel;
    phoneEl.placeholder = t.phonePlaceholder;
    labelPlus.textContent = t.plus;
    btnGen.textContent = t.btnGenerate;
    btnSend.textContent = t.btnSend;
  }

  // Cambiar idioma
  langBtns.forEach(btn => btn.addEventListener('click', () => {
    langBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLang = btn.dataset.lang;
    document.documentElement.lang = currentLang;
    applyLang();
    validate();
    summaryEl.classList.add('hidden');
    btnSend.classList.add('hidden');
  }));
  applyLang();

  // Fecha mínima = hoy
  dateEl.min = new Date().toISOString().split('T')[0];

  // Precios
  const priceMap = { Cortar:12, Tinte:10, Mechas:10, Afeitar:8, Alisado:10, Niños:10, Cut:12, Dye:10, Highlights:10, Shave:8, Straighten:10, Kids:10, Haarschnitt:12, Färben:10, Strähnen:10, Rasur:8, Glätten:10, Kinder:10, Coupe:12, Coloration:10, Mèches:10, Rasage:8, Lissage:10, Enfants:10, Taglio:12, Colorazione:10, Meches:10, Rasatura:8, Lisciatura:10, Bambini:10 };

  // Validación
  function validate() {
    const valid = serviceEl.value && dateEl.value && timeEl.value && nameEl.value.trim() && /^\+34\s?\d{9}$/.test(phoneEl.value);
    btnGen.disabled = !valid;
  }
  [serviceEl, dateEl, timeEl, nameEl, phoneEl].forEach(el => el.addEventListener('input', validate));

  // Generar resumen
  document.getElementById('booking-form').addEventListener('submit', e => {
    e.preventDefault();
    const s = serviceEl.value;
    const d = dateEl.value;
    const tm = timeEl.value;
    const n = nameEl.value.trim();
    const p = phoneEl.value.trim();
    const pl = document.getElementById('plus-travel').checked;
    let price = priceMap[s] || 0;
    if (pl) price += 30;
    const prefix = translations[currentLang].summaryPrefix;
    const summaryText = `${prefix}\n- Servicio: ${s}\n- Fecha: ${d}\n- Hora: ${tm}\n- Desplazamiento en Palma: ${pl?'Sí (+30,00€)':'No'}\n- Precio estimado: ${price.toFixed(2)}€\n- Nombre: ${n}\n- Teléfono: ${p}`;
    summaryEl.textContent = summaryText;
    summaryEl.classList.remove('hidden');
    btnSend.classList.remove('hidden');
  });

  // Enviar por WhatsApp
  btnSend.addEventListener('click', () => {
    const phoneNum = phoneEl.value.replace(/\s+/g, '');
    window.open(`https://wa.me/${phoneNum}?text=${encodeURIComponent(summaryEl.textContent)}`, '_blank');
  });
});
