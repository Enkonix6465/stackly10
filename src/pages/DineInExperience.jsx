import React, { useState } from "react";
import dineVideo from "../assets/dine.mp4";
import dine1 from "../assets/dine1.avif";
import dine2 from "../assets/dine2.jpg";
import dine3 from "../assets/dine3.jpg";

import { FaUtensils, FaWineGlassAlt, FaSmile, FaArrowLeft, FaArrowRight } from "react-icons/fa";


// Translation object for all text
const translations = {
  en: {
    heroTitle: "Premium Dine-In Experience",
    heroDesc: "Savor gourmet flavors in an elegant ambiance with world-class service designed for every occasion.",
    aboutTitle: "About Our Dine-In",
    about: [
      "Enjoy an immersive dining experience where every detail is designed to delight — from the lighting and music to the exceptional cuisine.",
      "Our chefs curate seasonal menus that highlight fresh, locally sourced ingredients, crafted with creativity and precision.",
      "Whether it's a romantic dinner, family gathering, or business meeting, our team ensures an atmosphere of elegance and comfort.",
      "Choose from intimate private rooms, open dining spaces, or exclusive chef's table seating.",
      "We provide personalized recommendations for wine pairings, desserts, and course customization to make every meal unforgettable."
    ],
    pricingTitle: "Our Dining Options",
    pricingDesc: "Select the perfect dining experience tailored to your occasion.",
    plans: [
      { name: "Standard Dining", price: "$29", period: "/guest", features: ["3-course set menu", "Cozy seating", "Complimentary beverage"], highlighted: false },
      { name: "Premium Dining", price: "$59", period: "/guest", features: ["5-course tasting menu", "Priority reservation", "Wine pairing options"], highlighted: true },
      { name: "Exclusive Chef’s Table", price: "$99", period: "/guest", features: ["7-course custom menu", "Private dining area", "Meet the chef experience"], highlighted: false },
    ],
    testimonials: [
      { name: "Nathan Foster", role: "Food Critic", text: "A true fine dining experience! Exceptional ambiance and world-class service." },
      { name: "Grace Miller", role: "Traveler", text: "Loved the cozy atmosphere — the staff made us feel right at home." },
      { name: "Jason Wright", role: "Business Executive", text: "Perfect place for a client dinner. Delicious courses and private seating." },
      { name: "Hannah Scott", role: "Couple", text: "Romantic and intimate — the chef's tasting menu was incredible!" },
      { name: "Leo Brooks", role: "Regular Guest", text: "Every visit feels special. The staff remembers my preferences — amazing!" },
    ],
    testimonialsTitle: "Guest Reviews",
    stepsTitle: "How It Works",
    stepsDesc: "Dining with us is effortless and enjoyable from start to finish.",
    steps: [
      { title: "Reserve Your Table", description: "Book in online or call to choose the your preferred time and seating." },
      { title: "Arrive and Relax", description: "Step into a welcoming atmosphere designed for your comfort." },
      { title: "Enjoy Your Meal", description: "Indulge in gourmet dishes crafted to perfection by our chefs." },
    ],
    ctaTitle: "Ready for a Perfect Evening?",
    ctaDesc: "Reserve your table now and experience exceptional flavors in a warm and elegant setting.",
    ctaBtn: "Reserve Now",
  },
  ar: {
    heroTitle: "تجربة تناول طعام فاخرة",
    heroDesc: "استمتع بنكهات راقية في أجواء أنيقة مع خدمة عالمية المستوى مصممة لكل مناسبة.",
    aboutTitle: "عن تجربة تناول الطعام",
    about: [
      "استمتع بتجربة طعام غامرة حيث تم تصميم كل التفاصيل لإسعادك — من الإضاءة والموسيقى إلى المأكولات الاستثنائية.",
      "يقوم طهاتنا بإعداد قوائم موسمية تبرز المكونات الطازجة والمحلية، مع لمسات إبداعية ودقة عالية.",
      "سواء كانت عشاء رومانسي، تجمع عائلي، أو اجتماع عمل، يضمن فريقنا أجواء من الأناقة والراحة.",
      "اختر بين غرف خاصة حميمة، مساحات طعام مفتوحة، أو طاولة الشيف الحصرية.",
      "نقدم توصيات شخصية لتنسيق النبيذ، الحلويات، وتخصيص الأطباق لجعل كل وجبة لا تُنسى."
    ],
    pricingTitle: "خيارات تناول الطعام",
    pricingDesc: "اختر تجربة الطعام المثالية المناسبة لمناسبتك.",
    plans: [
      { name: "تناول عادي", price: "$29", period: "/ضيف", features: ["قائمة من 3 أطباق", "مقاعد مريحة", "مشروب مجاني"], highlighted: false },
      { name: "تناول فاخر", price: "$59", period: "/ضيف", features: ["قائمة تذوق من 5 أطباق", "حجز أولوية", "خيارات تنسيق النبيذ"], highlighted: true },
      { name: "طاولة الشيف الحصرية", price: "$99", period: "/ضيف", features: ["قائمة مخصصة من 7 أطباق", "منطقة طعام خاصة", "لقاء مع الشيف"], highlighted: false },
    ],
    testimonials: [
      { name: "ناثان فوستر", role: "ناقد طعام", text: "تجربة طعام راقية حقيقية! أجواء استثنائية وخدمة عالمية المستوى." },
      { name: "غريس ميلر", role: "مسافرة", text: "أحببت الأجواء الدافئة — جعلنا الطاقم نشعر وكأننا في منزلنا." },
      { name: "جيسون رايت", role: "رجل أعمال", text: "المكان المثالي لعشاء عمل. أطباق لذيذة ومقاعد خاصة." },
      { name: "هانا سكوت", role: "زوجان", text: "رومانسي وحميم — قائمة التذوق كانت مذهلة!" },
      { name: "ليو بروكس", role: "ضيف دائم", text: "كل زيارة مميزة. الطاقم يتذكر تفضيلاتي — رائع!" },
    ],
    testimonialsTitle: "آراء الضيوف",
    stepsTitle: "كيف تعمل الخدمة",
    stepsDesc: "تناول الطعام معنا سهل وممتع من البداية للنهاية.",
    steps: [
      { title: "احجز طاولتك", description: "احجز عبر الإنترنت أو اتصل لاختيار الوقت والمقاعد المفضلة." },
      { title: "استمتع بالأجواء", description: "ادخل إلى أجواء ترحيبية مصممة لراحتك." },
      { title: "استمتع بوجبتك", description: "استمتع بأطباق فاخرة أعدها طهاتنا بإتقان." },
    ],
    ctaTitle: "جاهز لأمسية مثالية؟",
    ctaDesc: "احجز طاولتك الآن واستمتع بنكهات استثنائية في أجواء دافئة وأنيقة.",
    ctaBtn: "احجز الآن",
  },
  he: {
    heroTitle: "חווית אוכל יוקרתית במסעדה",
    heroDesc: "תיהנו מטעמים גורמה באווירה אלגנטית עם שירות ברמה עולמית לכל אירוע.",
    aboutTitle: "על חווית הישיבה",
    about: [
      "תיהנו מחוויית אוכל סוחפת שבה כל פרט נועד להפתיע — מהתאורה והמוזיקה ועד למטבח יוצא הדופן.",
      "השפים שלנו בונים תפריטים עונתיים המדגישים מרכיבים טריים ומקומיים, עם יצירתיות ודיוק.",
      "בין אם זו ארוחה רומנטית, מפגש משפחתי או פגישת עסקים, הצוות שלנו מבטיח אווירה של אלגנטיות ונוחות.",
      "בחרו בין חדרים פרטיים אינטימיים, חללי אוכל פתוחים או שולחן שף יוקרתי.",
      "אנו מעניקים המלצות מותאמות אישית לשילובי יין, קינוחים והתאמת מנות כדי להפוך כל ארוחה לבלתי נשכחת."
    ],
    pricingTitle: "אפשרויות ישיבה",
    pricingDesc: "בחרו את חווית הישיבה המושלמת לאירוע שלכם.",
    plans: [
      { name: "ישיבה רגילה", price: "$29", period: "/סועד", features: ["תפריט של 3 מנות", "מושבים נוחים", "משקה חינם"], highlighted: false },
      { name: "ישיבה פרימיום", price: "$59", period: "/סועד", features: ["תפריט טעימות של 5 מנות", "הזמנה בעדיפות", "אפשרויות התאמת יין"], highlighted: true },
      { name: "שולחן שף יוקרתי", price: "$99", period: "/סועד", features: ["תפריט מותאם של 7 מנות", "אזור אוכל פרטי", "פגישה עם השף"], highlighted: false },
    ],
    testimonials: [
      { name: "נתן פוסטר", role: "מבקר אוכל", text: "חווית אוכל יוקרתית אמיתית! אווירה יוצאת דופן ושירות ברמה עולמית." },
      { name: "גרייס מילר", role: "מטיילת", text: "אהבתי את האווירה החמימה — הצוות גרם לנו להרגיש בבית." },
      { name: "ג'ייסון רייט", role: "איש עסקים", text: "המקום המושלם לארוחת עסקים. מנות טעימות וישיבה פרטית." },
      { name: "האנה סקוט", role: "זוג", text: "רומנטי ואינטימי — תפריט הטעימות היה מדהים!" },
      { name: "ליאו ברוקס", role: "אורח קבוע", text: "כל ביקור מיוחד. הצוות זוכר את ההעדפות שלי — מדהים!" },
    ],
    testimonialsTitle: "חוות דעת אורחים",
    stepsTitle: "איך זה עובד",
    stepsDesc: "הישיבה אצלנו קלה ומהנה מההתחלה ועד הסוף.",
    steps: [
      { title: "הזמינו שולחן", description: "הזמינו אונליין או התקשרו לבחירת זמן ומקום מועדפים." },
      { title: "היכנסו ותיהנו", description: "היכנסו לאווירה מזמינה שנועדה לנוחותכם." },
      { title: "תיהנו מהארוחה", description: "תתפנקו במנות גורמה שהשפים שלנו יצרו בשלמות." },
    ],
    ctaTitle: "מוכנים לערב מושלם?",
    ctaDesc: "הזמינו שולחן עכשיו ותחוו טעמים יוצאי דופן באווירה חמימה ואלגנטית.",
    ctaBtn: "הזמן עכשיו",
  },
};

const stepIcons = [
  <FaUtensils size={28} className="text-white" />,
  <FaWineGlassAlt size={28} className="text-white" />,
  <FaSmile size={28} className="text-white" />,
];

const DineInExperienceHero = () => {
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
  <section className="relative w-full h-[85vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={dineVideo}
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
          {/* Left Image - balanced height */}
          <div className="w-full md:w-1/2 flex justify-center items-center min-h-[340px] h-full">
            <img
              src={dine1}
              alt="Our Dine-In Experience"
              className="w-full md:max-w-full md:h-[340px] max-w-md h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content - balanced height */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center min-h-[340px] h-full md:pl-8 text-justify">
            <h2 className="text-4xl font-bold text-red-500 mb-6" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
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
          {translations[language].plans.map((plan, index) => (
            <div
              key={index}
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
                {language === 'ar' ? 'احجز الآن' : language === 'he' ? 'הזמן עכשיו' : 'Reserve Now'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
  <section className={`py-10 px-4 ${sectionAltBg}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Card */}
          <div className="text-center md:text-left">
            <h2 className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`} style={dir === 'rtl' ? {textAlign:'right'} : {}}>
              {translations[language].testimonialsTitle}
            </h2>
            <div className={`rounded-2xl p-8 shadow-lg ${cardBg}`}>
              <p className="text-lg italic mb-6" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
                "{testimonial.text}"
              </p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-red-500 text-sm">{testimonial.role}</p>
            </div>

            {/* Arrows */}
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

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img
              src={dine2}
              alt="Dining area"
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

        <div className="flex flex-wrap justify-center items-center gap-6">
          {translations[language].steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col hover:scale-105 transition items-center max-w-[200px]">
                <div className={`rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md ${theme === 'dark' ? 'bg-red-700' : 'bg-red-500'}`}> 
                  {stepIcons[index]}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'} text-sm`}>{step.description}</p>
              </div>

              {index < translations[language].steps.length - 1 && (
                <FaArrowRight size={30} className="text-gray-400 mx-6 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-6 md:px-20 text-white">
        <img
          src={dine3}
          alt="Dining ambiance"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-red-500/70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
            {translations[language].ctaTitle}
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
            {translations[language].ctaDesc}
          </p>
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

export default DineInExperienceHero;
