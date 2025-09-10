import React, { useState } from "react";
import partyVideo from "../assets/party.mp4";
import party1 from "../assets/party1.jpg";
import party2 from "../assets/party2.webp";
import party3 from "../assets/party3.avif";

import { FaGlassCheers, FaUsers, FaTruck, FaArrowLeft, FaArrowRight } from "react-icons/fa";


// Translation object for all text
const translations = {
  en: {
    heroTitle: "Party Orders & Bulk Meals",
    heroDesc: "Hassle-free catering solutions — perfect for birthdays, weddings, corporate events, and big family gatherings.",
    aboutTitle: "Why Choose Our Party Catering?",
    about: [
      "Planning an event is stressful — but feeding your guests doesn’t have to be. Our bulk meal services offer convenience without compromising on flavor.",
      "We prepare generous portions using fresh ingredients, packaged neatly for effortless serving.",
      "From small gatherings to grand celebrations, our team helps you customize your order to match your theme and preferences.",
      "Need vegetarian, vegan, or allergy-friendly options? We've got you covered."
    ],
    pricingTitle: "Party Packages",
    pricingDesc: "Flexible options to suit any event size or budget.",
    plans: [
      { name: "Small Gathering", price: "$199", period: "/10-15 guests", features: ["Appetizers + Main Course", "Disposable plates & cutlery", "Pickup or delivery"], highlighted: false },
      { name: "Medium Party", price: "$399", period: "/25-30 guests", features: ["Full course buffet", "Desserts included", "Free delivery"], highlighted: true },
      { name: "Grand Celebration", price: "$799", period: "/50+ guests", features: ["Custom menu planning", "On-site setup available", "Dedicated event manager"], highlighted: false },
    ],
    testimonials: [
      { name: "Olivia Carter", role: "Event Planner", text: "They made catering for 200 guests seamless — food was hot, fresh, and everyone loved it!" },
      { name: "Ethan James", role: "Birthday Host", text: "The bulk order was a hit — delicious dishes, generous portions, and timely delivery." },
      { name: "Sophia Brown", role: "Corporate Organizer", text: "Perfect for office parties. They even customized the menu to fit dietary preferences." },
      { name: "Michael Turner", role: "Family Reunion Host", text: "Ordering was effortless and the quality exceeded expectations — five stars!" },
      { name: "Amelia Scott", role: "Repeat Customer", text: "I've used their bulk meals for three events now — consistently outstanding!" },
    ],
    testimonialsTitle: "What Clients Say",
    stepsTitle: "How to Order",
    stepsDesc: "Simple, fast, and reliable — enjoy stress-free event catering.",
    steps: [
      { title: "Choose Your Package", description: "Select from our party platters or fully customized bulk meals." },
      { title: "Place Your Order", description: "Book online or by phone — we'll confirm every detail with you." },
      { title: "Enjoy Your Event", description: "We deliver on time or prepare for easy pickup. Simply serve and celebrate." },
    ],
    ctaTitle: "Ready to Feed Your Guests?",
    ctaDesc: "Order now and make your celebration unforgettable — we handle the food so you can enjoy the party.",
    ctaBtn: "Order Now",
  },
  ar: {
    heroTitle: "طلبات الحفلات والوجبات بالجملة",
    heroDesc: "حلول تموين بلا عناء — مثالية لأعياد الميلاد، حفلات الزفاف، الفعاليات، والتجمعات العائلية الكبيرة.",
    aboutTitle: "لماذا تختار تموين الحفلات لدينا؟",
    about: [
      "تخطيط المناسبات مرهق — لكن إطعام ضيوفك لا يجب أن يكون كذلك. خدمات الوجبات بالجملة لدينا توفر الراحة دون التضحية بالنكهة.",
      "نعد كميات سخية باستخدام مكونات طازجة، مع تعبئة مرتبة لسهولة التقديم.",
      "من التجمعات الصغيرة إلى الاحتفالات الكبيرة، يساعدك فريقنا في تخصيص الطلب ليناسب موضوعك وتفضيلاتك.",
      "تحتاج خيارات نباتية أو نباتية صرفة أو خالية من مسببات الحساسية؟ نحن هنا لخدمتك."
    ],
    pricingTitle: "باقات الحفلات",
    pricingDesc: "خيارات مرنة تناسب أي حجم أو ميزانية للفعالية.",
    plans: [
      { name: "تجمع صغير", price: "$199", period: "/10-15 ضيفًا", features: ["مقبلات + طبق رئيسي", "أطباق وأدوات مائدة للاستخدام مرة واحدة", "استلام أو توصيل"], highlighted: false },
      { name: "حفلة متوسطة", price: "$399", period: "/25-30 ضيفًا", features: ["بوفيه كامل", "حلويات مشمولة", "توصيل مجاني"], highlighted: true },
      { name: "احتفال كبير", price: "$799", period: "/50+ ضيفًا", features: ["تخطيط قائمة مخصصة", "تجهيز في الموقع متاح", "مدير فعالية خاص"], highlighted: false },
    ],
    testimonials: [
      { name: "أوليفيا كارتر", role: "منظمة فعاليات", text: "جعلوا تموين 200 ضيف سهلًا — الطعام كان ساخنًا وطازجًا والجميع أحبه!" },
      { name: "إيثان جيمس", role: "مضيف عيد ميلاد", text: "الطلب بالجملة كان رائعًا — أطباق لذيذة وكميات سخية وتوصيل في الوقت المحدد." },
      { name: "صوفيا براون", role: "منظمة شركات", text: "مثالي لحفلات المكتب. حتى أنهم خصصوا القائمة لتناسب تفضيلات الحمية." },
      { name: "مايكل تيرنر", role: "مضيف تجمع عائلي", text: "الطلب كان سهلًا والجودة فاقت التوقعات — خمس نجوم!" },
      { name: "أميليا سكوت", role: "عميلة متكررة", text: "استخدمت وجباتهم بالجملة في ثلاث مناسبات — دائمًا مميزون!" },
    ],
    testimonialsTitle: "ماذا يقول العملاء",
    stepsTitle: "كيف تطلب",
    stepsDesc: "بسيطة وسريعة وموثوقة — استمتع بتموين فعاليات بلا توتر.",
    steps: [
      { title: "اختر الباقة", description: "اختر من أطباق الحفلات أو وجبات بالجملة مخصصة بالكامل." },
      { title: "أكمل الطلب", description: "احجز عبر الإنترنت أو الهاتف — سنؤكد كل التفاصيل معك." },
      { title: "استمتع بفعاليتك", description: "نقوم بالتوصيل في الوقت المحدد أو نجهز للاستلام السهل. فقط قدم الطعام واحتفل." },
    ],
    ctaTitle: "جاهز لإطعام ضيوفك؟",
    ctaDesc: "اطلب الآن واجعل احتفالك لا يُنسى — نحن نهتم بالطعام لتستمتع بالحفل.",
    ctaBtn: "اطلب الآن",
  },
  he: {
    heroTitle: "הזמנות למסיבות וארוחות בכמויות",
    heroDesc: "פתרונות קייטרינג ללא דאגות — מושלם לימי הולדת, חתונות, אירועים עסקיים ומפגשים משפחתיים גדולים.",
    aboutTitle: "למה לבחור בקייטרינג שלנו?",
    about: [
      "תכנון אירוע מלחיץ — אבל להאכיל את האורחים לא חייב להיות כך. שירותי הארוחות בכמויות שלנו מציעים נוחות בלי להתפשר על הטעם.",
      "אנו מכינים מנות נדיבות ממרכיבים טריים, ארוזות בצורה מסודרת להגשה קלה.",
      "ממפגשים קטנים ועד חגיגות גדולות, הצוות שלנו עוזר להתאים את ההזמנה לנושא ולהעדפות שלכם.",
      "צריכים אפשרויות צמחוניות, טבעוניות או ללא אלרגנים? אנחנו כאן בשבילכם."
    ],
    pricingTitle: "חבילות למסיבות",
    pricingDesc: "אפשרויות גמישות לכל גודל אירוע או תקציב.",
    plans: [
      { name: "התכנסות קטנה", price: "$199", period: "/10-15 אורחים", features: ["מנות ראשונות + עיקרית", "כלים חד פעמיים", "איסוף או משלוח"], highlighted: false },
      { name: "מסיבה בינונית", price: "$399", period: "/25-30 אורחים", features: ["בופה מלא", "קינוחים כלולים", "משלוח חינם"], highlighted: true },
      { name: "חגיגה גדולה", price: "$799", period: "/50+ אורחים", features: ["תכנון תפריט מותאם", "הקמה במקום אפשרית", "מנהל אירוע ייעודי"], highlighted: false },
    ],
    testimonials: [
      { name: "אוליביה קרטר", role: "מתכננת אירועים", text: "הם הפכו קייטרינג ל-200 אורחים לפשוט — האוכל היה חם, טרי וכולם אהבו!" },
      { name: "אית'ן ג'יימס", role: "מארח יום הולדת", text: "הזמנה בכמויות הייתה הצלחה — מנות טעימות, כמויות נדיבות ומשלוח בזמן." },
      { name: "סופיה בראון", role: "מארגנת חברות", text: "מושלם למסיבות משרד. אפילו התאימו את התפריט להעדפות תזונה." },
      { name: "מייקל טרנר", role: "מארח איחוד משפחתי", text: "ההזמנה הייתה קלה והאיכות עלתה על הציפיות — חמש כוכבים!" },
      { name: "אמיליה סקוט", role: "לקוחה חוזרת", text: "השתמשתי בארוחות בכמויות שלהם בשלושה אירועים — תמיד מצוינים!" },
    ],
    testimonialsTitle: "מה הלקוחות אומרים",
    stepsTitle: "איך מזמינים",
    stepsDesc: "פשוט, מהיר ואמין — תהנו מקייטרינג לאירועים ללא דאגות.",
    steps: [
      { title: "בחרו חבילה", description: "בחרו ממגשי מסיבה או ארוחות בכמויות בהתאמה אישית." },
      { title: "בצעו הזמנה", description: "הזמינו אונליין או בטלפון — נאשר את כל הפרטים איתכם." },
      { title: "תהנו מהאירוע", description: "נגיע בזמן או נכין לאיסוף קל. פשוט להגיש ולחגוג." },
    ],
    ctaTitle: "מוכנים להאכיל את האורחים?",
    ctaDesc: "הזמינו עכשיו והפכו את החגיגה לבלתי נשכחת — אנחנו דואגים לאוכל כדי שתוכלו ליהנות מהמסיבה.",
    ctaBtn: "הזמן עכשיו",
  },
};

const stepIcons = [
  <FaUsers size={28} className="text-white" />,
  <FaGlassCheers size={28} className="text-white" />,
  <FaTruck size={28} className="text-white" />,
];

const PartyOrdersHero = () => {
  // Language and theme state synced with Header
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('light');
  // Map UI language names to codes
  const langMap = {
    English: 'en',
    Arabic: 'ar',
    Hebrew: 'he',
    en: 'en',
    ar: 'ar',
    he: 'he',
  };
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
      const storedSelectedLang = localStorage.getItem('selectedLanguage') || 'English';
      setLanguage(langMap[storedSelectedLang] || 'en');
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem('theme') || 'light';
        setTheme(newTheme);
      };
      const handleLangChange = () => {
        const newSelectedLang = localStorage.getItem('selectedLanguage') || 'English';
        setLanguage(langMap[newSelectedLang] || 'en');
      };
      window.addEventListener('theme-changed', handleThemeChange);
      window.addEventListener('storage', handleThemeChange);
      window.addEventListener('language-changed', handleLangChange);
      window.addEventListener('storage', handleLangChange);
      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);
        window.removeEventListener('language-changed', handleLangChange);
        window.removeEventListener('storage', handleLangChange);
      };
    }
  }, []);

  // Theme toggle handler
  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      window.dispatchEvent(new Event('theme-changed'));
    }
  };

  // Set RTL/LTR direction
  const dir = language === 'ar' || language === 'he' ? 'rtl' : 'ltr';

  // Testimonial carousel
  const [index, setIndex] = useState(0);
  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % translations[language].testimonials.length);
  };
  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + translations[language].testimonials.length) % translations[language].testimonials.length);
  };
  const testimonial = translations[language].testimonials[index];

  // Section background classes
  const sectionBg = theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black';
  const sectionAltBg = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-red-50 text-black';
  const cardBg = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black';
  const pricingBg = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black';

  return (
    <div dir={dir} className={sectionBg}>
      {/* Theme Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={handleToggleTheme}
          className={`px-4 py-2 rounded-full font-semibold shadow transition duration-300 ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
        >
          {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
      {/* Hero Section */}
  <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={partyVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
            {translations[language].heroTitle}
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
            {translations[language].heroDesc}
          </p>
        </div>
      </section>

  {/* About Section */}
  <section className={`py-20 px-6 md:px-20 ${sectionAltBg}`}> 
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={party1}
              alt="Party catering"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
              {translations[language].aboutTitle}
            </h2>
            {translations[language].about.map((p, i) => (
              <p className="mb-4" key={i} style={dir === 'rtl' ? {textAlign:'right'} : {}}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
  <section className={`py-20 px-6 ${pricingBg} text-center`} id="pricing">
        <h2 className="text-4xl font-bold text-red-500 mb-4" style={dir === 'rtl' ? {textAlign:'right'} : {}}>{translations[language].pricingTitle}</h2>
  <p className="max-w-2xl mx-auto mb-12" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
          {translations[language].pricingDesc}
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {translations[language].plans.map((plan, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center rounded-2xl p-8 shadow-lg border 
                ${plan.highlighted ? (theme === 'dark' ? 'bg-red-700 text-white scale-105' : 'bg-red-500 text-white scale-105') : (theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800')}`}
              style={dir === 'rtl' ? {textAlign:'right'} : {}}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-extrabold mb-2">
                {plan.price} <span className="text-lg font-medium">{plan.period}</span>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm">{feature}</li>
                ))}
              </ul>
              <button
                className={`px-6 py-3 rounded-full font-semibold transition 
                  ${plan.highlighted 
                    ? "bg-white text-red-500 hover:bg-gray-100" 
                    : "bg-red-500 text-white hover:bg-red-600"}`}
              >
                {language === 'ar' ? 'اطلب الآن' : language === 'he' ? 'הזמן עכשיו' : 'Order Now'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
  <section className={`py-10 px-4 ${sectionAltBg}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`} style={dir === 'rtl' ? {textAlign:'right'} : {}}>{translations[language].testimonialsTitle}</h2>
            <div className={`rounded-2xl p-8 shadow-lg ${cardBg}`}>
              <p className="text-lg italic mb-6" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
                "{testimonial.text}"
              </p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-red-500 text-sm">{testimonial.role}</p>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={party2}
              alt="Bulk meal catering"
              className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
  <section className={`py-20 px-6 ${pricingBg} text-center`}>
        <h2 className="text-4xl font-bold text-red-500 mb-4" style={dir === 'rtl' ? {textAlign:'right'} : {}}>{translations[language].stepsTitle}</h2>
        <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'} max-w-2xl mx-auto mb-12`} style={dir === 'rtl' ? {textAlign:'right'} : {}}>
          {translations[language].stepsDesc}
        </p>

<div className="flex flex-wrap justify-center items-stretch gap-6 items-center">          {translations[language].steps.map((step, idx) => (
            <div key={idx} className="flex items-center">
              <div className="flex flex-col hover:scale-105 transition items-center max-w-[220px] h-full justify-center text-center">
                <div className={`rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md ${theme === 'dark' ? 'bg-red-700' : 'bg-red-500'}`}> 
                  {stepIcons[idx]}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{textAlign:'center'}}>{step.title}</h3>
                <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'} text-sm`} style={{textAlign:'center'}}>{step.description}</p>
              </div>
              {idx < translations[language].steps.length - 1 && (
                <FaArrowRight size={30} className="text-gray-400 mx-6 hidden md:block self-center" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-6 md:px-20 text-white">
        <img
          src={party3}
          alt="Party meal setup"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-red-500/70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6" style={dir === 'rtl' ? {textAlign:'right'} : {}}>{translations[language].ctaTitle}</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed" style={dir === 'rtl' ? {textAlign:'right'} : {}}>{translations[language].ctaDesc}</p>
          <button
            onClick={() => {
              document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-black py-4 px-10 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            {translations[language].ctaBtn}
          </button>
        </div>
      </section>
    </div>
  );
};

export default PartyOrdersHero;
