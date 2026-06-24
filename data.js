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
      tagline:      " أؤمن بقداسة النفس البشرية والجسد، وأضع وقتي في خدمتكم لتقديم الرعاية الطبية العامة والمتابعة الصحية للأفراد والأسر بإذن الله تعالى.",
      btn_call:      "اتصل الآن",
      btn_whatsapp:  "واتساب",

      /* About */
      section_about_title: "عن الطبيب",
      about_text: "طبيب عام متخصص في تقديم الرعاية الصحية الأولية لجميع أفراد العائلة. يتميز بمتابعة الأمراض الشائعة والمزمنة كضغط الدم والسكري، إلى جانب الاهتمام بصحة الأطفال والوقاية من الأمراض. يحرص على تقديم استشارات طبية دقيقة واتخاذ القرارات العلاجية المناسبة لكل حالة.",

      /* Services */
      section_services_title: "خدماتنا",
      services: [
        { icon: "🏥", title: "الاستشارات الطبية العامة والحالات المستعجلة"},
        { icon: "🩸", title: "متابعة الأمراض المزمنة (الضغط والسكري)" },
        { icon: "👶", title: "استشارات طب الأطفال ومتابعة نمو الطفل" },
        { icon: "📋", title: "التقييم الصحي الدوري والكشف المبكر" },
        { icon: "🥗", title: "التغذية الصحية والنشاط البدني ونمط الحياة السليم" },
        { icon: "🤰", title: "تشخيص الحمل والتوجيه الطبي" },
        { icon: "💬", title: "التثقيف الصحي والإجابة عن الاستفسارات الطبية"},
        { icon: "🔄", title: "توجيه الحالات إلى التخصص المناسب"},
      ],

      /* Qualifications */
      section_quals_title: "المؤهلات والخبرة",
      qualifications: [
        { icon: "🏥", title: "الرعاية الصحية الأولية" },
        { icon: "🎓", title: "طبيب عام معتمد" },
        { icon: "👨‍👩‍👧‍👦", title: "رعاية الأسرة والطفل" },
        { icon: "🩺", title: "متابعة الأمراض المزمنة" },
      ],

      /* Today's Location */
      section_today_title:  "📍أين الطبيب الآن؟",
      today_present:  "الطبيب متواجد حاليا في",
      today_absent:   "الطبيب غير متواجد في العيادة اليوم.",
      today_rest:     "يوم الراحة — سيعود الاثنين",

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
      tagline:       "Je crois en la valeur sacrée de la vie humaine et du corps, et je mets mon temps à votre service pour offrir des soins médicaux généraux et un suivi de santé aux individus et aux familles, avec la volonté de Dieu.",
      btn_call:      "Appeler",
      btn_whatsapp:  "WhatsApp",

      /* About */
      section_about_title: "À propos du médecin",
      about_text: "Médecin généraliste spécialisé dans les soins de santé primaires pour toute la famille. Il assure le suivi des maladies courantes et chroniques telles que l'hypertension et le diabète, en plus de la santé infantile et de la prévention des maladies. Il s'engage à fournir des consultations médicales précises et des décisions thérapeutiques adaptées à chaque cas.",

      /* Services */
      section_services_title: "Nos Services",
      services: [
        { icon: "🏥", title: "Consultations médicales générales et prise en charge des urgences courantes" },
        { icon: "🩸", title: "Suivi des maladies chroniques (hypertension artérielle et diabète)" },
        { icon: "👶", title: "Pédiatrie et suivi de la croissance et de la santé de l’enfant" },
        { icon: "📋", title: "Bilan de santé périodique et dépistage précoce des facteurs de risque" },
        { icon: "🥗", title: "Conseils en nutrition, activité physique et mode de vie sain" },
        { icon: "🤰", title: "Diagnostic de grossesse et accompagnement médical tout au long de ses différentes étapes" },
        { icon: "💬", title: "Éducation sanitaire, réponses aux questions médicales et aide à la prise de décisions de santé"},
        { icon: "🔄", title: "Orientation des patients vers le spécialiste adapté lorsque nécessaire"},
      ],

      /* Qualifications */
      section_quals_title: "Qualifications & Expérience",
      qualifications: [
        { icon: "🏥", title: "Soins de santé primaires" },
        { icon: "🎓", title: "Médecin généraliste" },
        { icon: "👨‍👩‍👧‍👦", title: "Suivi de la famille et de l’enfant" },
        { icon: "🩺", title: "Suivi des maladies chroniques" },
      ],

      /* Today's Location */
      section_today_title: "📍 Où est le médecin maintenant ?",
      today_present:  "Le médecin est actuellement à la",
      today_absent:   "Le médecin n'est pas disponible en clinique aujourd'hui.",
      today_rest:     "Jour de repos — retour lundi",

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
  

en: {
  dir: "ltr",
  lang: "en",
  font: "'Inter', sans-serif",

  nav_about: "About",
  nav_services: "Services",
  nav_clinics: "Clinics",
  nav_book: "Book",

  specialty: "General Practitioner",
  tagline: "I believe in the sacred value of human life and the body, and I dedicate my time to serving you by providing general medical care and health follow-up for individuals and families, by the will of God.",
  btn_call: "Call Now",
  btn_whatsapp: "WhatsApp",

  section_about_title: "About the Doctor",
  about_text: "A general practitioner providing primary healthcare for the whole family, with follow-up for common and chronic conditions such as hypertension and diabetes, as well as child health and preventive care.",

  section_services_title: "Our Services",
  services: [
    { icon: "🏥", title: "General medical consultations and urgent common cases" },
    { icon: "🩸", title: "Follow-up for chronic diseases (hypertension and diabetes)" },
    { icon: "👶", title: "Pediatric consultations and child growth follow-up" },
    { icon: "📋", title: "Periodic health check-ups and early risk detection" },
    { icon: "🥗", title: "Healthy nutrition, physical activity and lifestyle advice" },
    { icon: "🤰", title: "Pregnancy diagnosis and medical guidance" },
    { icon: "💬", title: "Health education and answers to medical questions" },
    { icon: "🔄", title: "Referral to the appropriate medical specialist" },
  ],

  section_quals_title: "Qualifications & Experience",
  qualifications: [
    { icon: "🏥", title: "Primary healthcare" },
    { icon: "🎓", title: "General practitioner" },
    { icon: "👨‍👩‍👧‍👦", title: "Family and child care" },
    { icon: "🩺", title: "Chronic disease follow-up" },
  ],

  section_today_title: "📍 Where is the doctor now?",
  today_present: "The doctor is currently at",
  today_absent: "The doctor is not currently available at the clinic.",
  today_rest: "Rest day — returns on Monday",

  section_clinics_title: "Workplaces",
  btn_call_label: "Call",
  btn_whatsapp_label: "WhatsApp",
  btn_map_label: "Location",
  days_label: "Working days",
  hours_label: "Working hours",
  no_location: "Location not available",

  whatsapp_msg: "Hello, I would like to book an appointment with Dr. Simo.",

  footer_phone: "Phone",
  footer_whatsapp: "WhatsApp",
  footer_address: "Nouakchott, Mauritania",
  footer_rights: "All rights reserved",

  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
}
},

  /* ── Clinics ─────────────────────────────────────────── */
  clinics: [
    {
      id: "las-palmas",
      image: "images/las-palmas.webp",
      name: { ar: "عيادة لاس بالماس الطبية", fr: "Clinique Las Palmas" , en: "Las Palmas Clinic" },
      workDays: { ar: "الاثنين، الأربعاء، الجمعة", fr: "Lun, Mer, Ven" , en: "Mon, Wed, Fri"},
      workHours: "08:00 – 00:00",
      clinicPhone: "+22230788882",
      clinicWhatsapp: "+22230788882",
      lat: 18.1129333,
      lng: -15.9995558,
    },
    {
      id: "nouakchott",
      image: "images/nouakchott.webp",
      name: { ar: "عيادة نواكشوط", fr: "Clinique Nouakchott", en: "Nouakchott Clinic" },
      workDays: { ar: "الثلاثاء", fr: "Mardi" , en: "Mon, Wed, Fri"},
      workHours: "17:00 – 00:00",
      clinicPhone: "+22230788882",
      clinicWhatsapp: "+22230788882",
      lat: 18.0328363,
      lng: -15.9262038,
    },
    {
      id: "vital",
      image: "images/vital.webp",
      name: { ar: "عيادة فيتال", fr: "Clinique Vital" , en: "Vital Clinic"},
      workDays: { ar: "الخميس", fr: "Jeudi" , en: "Mon, Wed, Fri"},
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
