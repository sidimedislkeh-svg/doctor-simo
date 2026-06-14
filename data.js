/**
 * ============================================================
 *  data.js — Doctor Profile Template
 *  To reuse this template for another doctor, edit ONLY
 *  this file and replace images in /images/.
 * ============================================================
 */

const DOCTOR_DATA = {

  /* ── Doctor Identity ─────────────────────────────────── */
  name: "Dr. Simo",
  photo: "images/doctor.webp",
  phone: "+22230788882",
  whatsapp: "+22230788882",

  /* ── Translations ────────────────────────────────────── */
  i18n: {

    ar: {
      dir: "rtl",
      lang: "ar",
      font: "'Tajawal', sans-serif",

      /* Nav */
      nav_about:     "عن الطبيب",
      nav_services:  "الخدمات",
      nav_clinics:   "العيادات",
      nav_book:      "حجز موعد",

      /* Hero */
      specialty:     "طبيب عام",
      tagline:       "أقدم رعاية طبية شاملة لجميع أفراد العائلة مع متابعة الحالات الشائعة والمزمنة وتقديم النصائح الصحية المناسبة.",
      btn_call:      "اتصل الآن",
      btn_whatsapp:  "واتساب",

      /* About */
      section_about_title: "عن الطبيب",
      about_text: "طبيب عام متخصص في تقديم الرعاية الصحية الأولية لجميع أفراد العائلة. يتميز بمتابعة الأمراض الشائعة والمزمنة كضغط الدم والسكري، إلى جانب الاهتمام بصحة الأطفال والوقاية من الأمراض. يحرص على تقديم استشارات طبية دقيقة واتخاذ القرارات العلاجية المناسبة لكل حالة.",

      /* Services */
      section_services_title: "خدماتنا",
      services: [
        { icon: "🩺", title: "فحص عام", desc: "فحص شامل لتقييم الحالة الصحية العامة." },
        { icon: "💉", title: "متابعة ضغط الدم والسكري", desc: "متابعة دقيقة ومنتظمة للأمراض المزمنة." },
        { icon: "👶", title: "صحة الأطفال", desc: "رعاية متكاملة لصحة الطفل ومتابعة نموه." },
        { icon: "💬", title: "الاستشارات الطبية", desc: "استشارة طبية متخصصة لتشخيص حالتك وتوجيهك." },
        { icon: "📋", title: "متابعة الحالات الشائعة", desc: "متابعة الأمراض الشائعة وضمان التعافي السريع." },
        { icon: "🛡️", title: "نصائح صحية وقائية", desc: "إرشادات وقائية للحفاظ على صحتك وصحة عائلتك." },
      ],

      /* Qualifications */
      section_quals_title: "المؤهلات والخبرة",
      qualifications: [
        { icon: "🎓", title: "طبيب عام" },
        { icon: "🏥", title: "الرعاية الصحية الأولية" },
        { icon: "👨‍👩‍👧", title: "متابعة الأطفال والعائلة" },
        { icon: "📌", title: "متابعة الحالات الشائعة والمزمنة" },
      ],

      /* Today's Location */
      section_today_title: "أين الطبيب اليوم؟",
      today_present:  "الطبيب متواجد اليوم في",
      today_absent:   "الطبيب غير متواجد في العيادة اليوم.",
      today_rest:     "يوم الراحة — سيعود غداً",

      /* Clinics */
      section_clinics_title: "أماكن العمل",
      btn_call_label:     "اتصال",
      btn_whatsapp_label: "واتساب",
      btn_map_label:      "الموقع",
      days_label:         "أيام العمل",
      hours_label:        "ساعات العمل",
      no_location:        "الموقع غير متوفر",

      /* Map */
      section_map_title:   "خريطة العيادات",
      map_directions:      "الاتجاهات",

      /* Booking */
      section_book_title:  "احجز موعدك الآن",
      book_subtitle:       "تواصل معنا عبر واتساب لتحديد موعدك بسهولة.",
      btn_book_whatsapp:   "احجز عبر واتساب",

      /* WhatsApp message */
      whatsapp_msg: "السلام عليكم، أريد حجز موعد مع الدكتور Simo.",

      /* Footer */
      footer_phone:     "الهاتف",
      footer_whatsapp:  "واتساب",
      footer_address:   "نواكشوط، موريتانيا",
      footer_rights:    "جميع الحقوق محفوظة",

      /* Days of week (to match JS getDay() 0=Sun) */
      days: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    },

    fr: {
      dir: "ltr",
      lang: "fr",
      font: "'Inter', sans-serif",

      /* Nav */
      nav_about:     "À propos",
      nav_services:  "Services",
      nav_clinics:   "Cliniques",
      nav_book:      "Rendez-vous",

      /* Hero */
      specialty:     "Médecin Généraliste",
      tagline:       "J'assure une prise en charge médicale générale pour toute la famille avec le suivi des pathologies courantes et chroniques ainsi que des conseils de santé adaptés.",
      btn_call:      "Appeler",
      btn_whatsapp:  "WhatsApp",

      /* About */
      section_about_title: "À propos du médecin",
      about_text: "Médecin généraliste spécialisé dans les soins de santé primaires pour toute la famille. Il assure le suivi des maladies courantes et chroniques telles que l'hypertension et le diabète, en plus de la santé infantile et de la prévention des maladies. Il s'engage à fournir des consultations médicales précises et des décisions thérapeutiques adaptées à chaque cas.",

      /* Services */
      section_services_title: "Nos Services",
      services: [
        { icon: "🩺", title: "Examen général", desc: "Bilan de santé complet pour évaluer votre état général." },
        { icon: "💉", title: "Suivi tension & diabète", desc: "Suivi régulier et précis des maladies chroniques." },
        { icon: "👶", title: "Santé de l'enfant", desc: "Soins complets et suivi de la croissance de l'enfant." },
        { icon: "💬", title: "Consultations médicales", desc: "Consultation spécialisée pour diagnostiquer et orienter." },
        { icon: "📋", title: "Suivi des pathologies courantes", desc: "Suivi des maladies courantes pour une guérison rapide." },
        { icon: "🛡️", title: "Conseils préventifs", desc: "Conseils pour préserver votre santé et celle de votre famille." },
      ],

      /* Qualifications */
      section_quals_title: "Qualifications & Expérience",
      qualifications: [
        { icon: "🎓", title: "Médecin Généraliste" },
        { icon: "🏥", title: "Soins de santé primaires" },
        { icon: "👨‍👩‍👧", title: "Suivi enfants & famille" },
        { icon: "📌", title: "Pathologies courantes & chroniques" },
      ],

      /* Today's Location */
      section_today_title: "Où est le médecin aujourd'hui ?",
      today_present:  "Le médecin est disponible aujourd'hui à",
      today_absent:   "Le médecin n'est pas disponible en clinique aujourd'hui.",
      today_rest:     "Jour de repos — retour demain",

      /* Clinics */
      section_clinics_title: "Lieux d'exercice",
      btn_call_label:     "Appeler",
      btn_whatsapp_label: "WhatsApp",
      btn_map_label:      "Localiser",
      days_label:         "Jours de travail",
      hours_label:        "Horaires",
      no_location:        "Localisation non disponible",

      /* Map */
      section_map_title:   "Carte des cliniques",
      map_directions:      "Itinéraire",

      /* Booking */
      section_book_title:  "Prenez rendez-vous",
      book_subtitle:       "Contactez-nous sur WhatsApp pour fixer votre rendez-vous facilement.",
      btn_book_whatsapp:   "Réserver via WhatsApp",

      /* WhatsApp message */
      whatsapp_msg: "Bonjour, je souhaite prendre rendez-vous avec le Dr Simo.",

      /* Footer */
      footer_phone:     "Téléphone",
      footer_whatsapp:  "WhatsApp",
      footer_address:   "Nouakchott, Mauritanie",
      footer_rights:    "Tous droits réservés",

      /* Days of week */
      days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    },
  },

  /* ── Clinics ─────────────────────────────────────────── */
  clinics: [
    {
      id: "las-palmas",
      image: "images/las-palmas.webp",
      name: { ar: "عيادة لاس بالماس الطبية", fr: "Clinique Las Palmas" },
      workDays: { ar: "الاثنين، الأربعاء، الجمعة", fr: "Lun, Mer, Ven" },
      workHours: "08:00 – 00:00",
      clinicPhone: "+22230788882",
      clinicWhatsapp: "+22230788882",
      lat: 18.1129333,
      lng: -15.9995558,
    },
    {
      id: "nouakchott",
      image: "images/nouakchott.webp",
      name: { ar: "عيادة نواكشوط", fr: "Clinique Nouakchott" },
      workDays: { ar: "الثلاثاء", fr: "Mardi" },
      workHours: "17:00 – 00:00",
      clinicPhone: "+22230788882",
      clinicWhatsapp: "+22230788882",
      lat: 18.0328363,
      lng: -15.9262038,
    },
    {
      id: "vital",
      image: "images/vital.webp",
      name: { ar: "عيادة فيتال", fr: "Clinique Vital" },
      workDays: { ar: "الخميس", fr: "Jeudi" },
      workHours: "17:00 – 08:00",
      clinicPhone: "+22230788882",
      clinicWhatsapp: "+22230788882",
      lat: null,   // Not available yet — card shown, no map pin
      lng: null,
    },
  ],

  /* ── Weekly Schedule ─────────────────────────────────── */
  /**
   * Keys: 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
   * clinicId must match clinics[].id above.
   * Use null for rest days.
   */
  schedule: {
    0: null,                          // Sunday — rest
    1: { clinicId: "las-palmas" },    // Monday
    2: { clinicId: "nouakchott" },    // Tuesday
    3: { clinicId: "las-palmas" },    // Wednesday
    4: { clinicId: "vital" },         // Thursday
    5: { clinicId: "las-palmas" },    // Friday
    6: null,                          // Saturday — rest
  },

};