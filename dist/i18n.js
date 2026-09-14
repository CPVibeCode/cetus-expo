(function () {
  var STORAGE_KEY = 'cetuspro-expo-lang';

  var en = {
    'meta.title': 'Cetuspro × Warsaw Medical Expo 2026 - Booth E16',
    'meta.description': 'Cetuspro - technology partner for the healthcare and MedTech sector. Warsaw Medical Expo 2026, Booth E16, together with SenVisio.',

    'hero.eyebrow': 'Technology partner for the healthcare and MedTech sector',
    'hero.title1': 'Your technology support',
    'hero.title2': 'in digitizing healthcare',
    'hero.lead': 'Cetuspro designs, builds and maintains business-critical systems - with particular focus on data security, regulatory compliance and operational stability. We understand that in healthcare, system failures and data breaches carry serious operational and legal consequences.',
    'hero.ctaConsult': 'Book a consultation',
    'hero.ctaVcard': 'Save contact (vCard)',

    'pillars.kicker': '- Why talk to us on site',
    'pillars.1.title': 'Data security',
    'pillars.1.text': 'We design systems with the protection of sensitive data and GDPR compliance in mind from the very first line of code.',
    'pillars.2.title': 'Critical processes',
    'pillars.2.text': 'We build platforms that must run without downtime - audit, architecture and maintenance in one process.',
    'pillars.3.title': 'Scalability',
    'pillars.3.text': 'Systems ready to scale with more users, integrations and data - without a rebuild from scratch a year later.',

    'services.kicker': '- Services',
    'services.title': "Software engineering for organizations that can't afford downtime",
    'services.flag': 'Flagship service',
    'services.web.title': 'Web applications',
    'services.web.text': 'Scalable platforms for critical processes - portals, internal systems and data management panels, designed with security and GDPR compliance in mind.',
    'services.mobile.title': 'Mobile applications',
    'services.mobile.text': 'Production-grade apps (iOS/Android) for staff, patients or business partners - stable, secure, consistent with the rest of the system.',
    'services.proto.text': 'Validate your system idea before investing in full development - a clickable prototype in days, not months.',
    'services.ai.title': 'AI & automation',
    'services.ai.text': "Automating operational and administrative processes where it genuinely lightens the team's load - LLM integrations, agents, workflows.",
    'services.security.text': 'Security audits and testing plus support with regulatory compliance (including GDPR) - critical wherever sensitive data is processed.',
    'services.outsourcing.title': 'Developer outsourcing',
    'services.outsourcing.text': 'Experienced teams strengthening your IT department, with full governance and transparent communication.',

    'process.kicker': '- How we work',
    'process.title': 'A process that delivers predictability even in a regulated environment',
    'process.lead': 'In regulated environments such as healthcare, we place extra emphasis on regulatory compliance and data security as early as the audit stage.',
    'process.step1.title': 'Audit',
    'process.step1.text': 'We review the system, processes and data before a single line of code is written.',
    'process.step2.title': 'Roadmap',
    'process.step2.text': 'Priorities, dependencies and business goals in one plan.',
    'process.step3.title': 'Delivery',
    'process.step3.text': 'Iterative development aligned with quality standards.',
    'process.step4.title': 'Reviews',
    'process.step4.text': 'Regular progress checks against your goals.',
    'process.step5.title': 'Maintenance',
    'process.step5.text': 'Monitoring, updates and stability under SLA.',

    'contact.kicker': '- Contact',
    'contact.iso': 'Quality management system',
    'contact.hq': 'Headquarters, Poland',

    'ceo.lead1': 'We build systems for companies across industries - from marketplaces and online galleries to service platforms.',
    'ceo.lead2': 'The next one can be yours.',
    'ceo.note1': 'Book a free consultation - we will talk about your project, the scope of work and the engagement model.',
    'ceo.note2': "Represent a healthcare organization? Let's talk about a system for your facility.",
    'ceo.cta': 'Free consultation',

    'footer.lead': 'We design, build and maintain the systems your business runs on.',
    'footer.address': 'ul. Adama Matuszczaka 14<br>35-083 Rzeszów, Poland',
    'footer.nip': 'EU VAT: PL8133850782',
    'footer.contactUs': 'Contact us',
    'footer.nav.title': 'Navigation',
    'footer.nav.home': 'Home',
    'footer.nav.services': 'Services',
    'footer.nav.contact': 'Contact',
    'footer.services.title': 'Services',
    'footer.services.web': 'Web applications',
    'footer.services.mobile': 'Mobile applications',
    'footer.services.ai': 'AI & Process Automation',
    'footer.services.transformation': 'Technology transformation',
    'footer.services.outsourcing': 'Software Development Outsourcing',
    'footer.services.academy': 'Academy & Training',
    'footer.docs.title': 'Documents',
    'footer.docs.quality': 'Quality Policy',
    'footer.docs.privacy': 'Privacy policy',
    'footer.docs.funding': 'European Funds',
    'footer.fundingText': 'Project co-financed by the European Union.<br><a href="https://cetuspro.com/en/dofinansowanie" target="_blank" rel="noopener">Funding details</a>',
    'footer.isoTitle': 'Quality management system',
    'footer.isoText': 'Certificate No. GIPO-1031-QC, certification body G-CERTI (IAS accreditation MSCB-113). Certification scope: training services.',
    'footer.isoLink': 'Quality policy',
    'footer.social.label': 'Stay in touch',
    'footer.social.sub': 'Follow us on social media',
    'footer.copy': 'Cetuspro · Rzeszów, Poland · Warsaw Medical Expo 2026 · Booth E16 · together with SenVisio',

    'sticky.save': 'Save contact',
    'sticky.book': 'Book a consultation'
  };

  var pl = {};
  var nodes = document.querySelectorAll('[data-i18n]');
  nodes.forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    var isAttr = el.hasAttribute('data-i18n-attr');
    var isHtml = el.hasAttribute('data-i18n-html');
    if (isAttr) {
      pl[key] = el.getAttribute(el.getAttribute('data-i18n-attr'));
    } else if (isHtml) {
      pl[key] = el.innerHTML;
    } else {
      pl[key] = el.textContent;
    }
  });

  var hrefNodes = document.querySelectorAll('[data-href-en]');

  function applyLang(lang) {
    var dict = lang === 'en' ? en : pl;

    nodes.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = dict[key];
      if (value === undefined) return;
      var isAttr = el.hasAttribute('data-i18n-attr');
      var isHtml = el.hasAttribute('data-i18n-html');
      if (isAttr) {
        el.setAttribute(el.getAttribute('data-i18n-attr'), value);
      } else if (isHtml) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    hrefNodes.forEach(function (el) {
      if (!el.dataset.hrefPl) {
        el.dataset.hrefPl = el.getAttribute('href');
      }
      el.setAttribute('href', lang === 'en' ? el.getAttribute('data-href-en') : el.dataset.hrefPl);
    });

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      var active = btn.getAttribute('data-lang-btn') === lang;
      btn.classList.toggle('is-active', active);
      if (active) {
        btn.setAttribute('aria-current', 'true');
      } else {
        btn.removeAttribute('aria-current');
      }
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore - private browsing or blocked storage */
    }
  }

  document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang-btn'));
    });
  });

  var initialLang = 'pl';
  try {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'pl') initialLang = saved;
  } catch (e) {
    /* ignore */
  }

  if (initialLang !== 'pl') {
    applyLang(initialLang);
  } else {
    document.querySelector('[data-lang-btn="pl"]').classList.add('is-active');
  }
})();
