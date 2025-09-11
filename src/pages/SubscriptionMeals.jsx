import React, { useState } from "react";
import mealVideo from "../assets/meal.mp4";
import meal1 from "../assets/meals1.webp";
import meal2 from "../assets/meal2.jpg";
import meal3 from "../assets/meal3.jpg";

import { FaUtensils, FaClock, FaLeaf, FaArrowLeft, FaArrowRight } from "react-icons/fa";


// Translation object for all text
const translations = {
  en: {
    heroTitle: "Subscription Meals",
    heroDesc: "Fresh, healthy, chef-prepared meals — delivered to your door every day.",
    aboutTitle: "Why Choose Our Meal Subscription?",
    about: [
      "Skip grocery shopping, skip cooking, and skip the stress. Our meal plans are designed for busy lifestyles.",
      "Every dish is crafted by professional chefs using fresh ingredients and delivered in eco-friendly packaging.",
      "Whether you're aiming for weight management, fitness goals, or just convenient healthy eating, we've got you covered.",
      "Flexible plans, customizable menus, and no long-term commitments."
    ],
    pricingTitle: "Meal Plans",
    pricingDesc: "Pick the plan that fits your lifestyle and goals.",
    plans: [
      { name: "Starter Plan", price: "$59", period: "/week", features: ["5 chef-prepared meals", "Balanced nutrition", "Pickup or delivery"], highlighted: false },
      { name: "Standard Plan", price: "$99", period: "/week", features: ["10 chef-prepared meals", "Customizable menu", "Free delivery"], highlighted: true },
      { name: "Premium Plan", price: "$179", period: "/week", features: ["20 meals + snacks", "Dietitian-approved", "Priority delivery"], highlighted: false },
    ],
    testimonials: [
      { name: "Ava Mitchell", role: "Busy Professional", text: "These subscription meals save me hours every week — healthy, delicious, and always on time." },
      { name: "Liam Walker", role: "Fitness Enthusiast", text: "The high-protein options fit perfectly with my workout routine — no cooking, no stress!" },
      { name: "Isabella Green", role: "New Parent", text: "Having fresh meals delivered daily has been a lifesaver while juggling family and work." },
      { name: "Noah Davis", role: "Student", text: "Affordable, nutritious, and so much better than instant noodles — I'm hooked!" },
      { name: "Mia Johnson", role: "Repeat Customer", text: "I've had this plan for six months — zero complaints, only compliments from my taste buds!" },
    ],
    testimonialsTitle: "What Customers Say",
    stepsTitle: "How It Works",
    stepsDesc: "Healthy eating made easy — get started in three quick steps.",
    steps: [
      { title: "Pick Your Plan", description: "Choose from weekly or monthly meal subscriptions." },
      { title: "Customize Your Menu", description: "Select from vegetarian, vegan, or balanced diet options." },
      { title: "Enjoy Fresh Meals", description: "Delivered to your door, ready to heat and eat." },
    ],
    ctaTitle: "Ready to Eat Better Every Day?",
    ctaDesc: "Subscribe today and enjoy chef-prepared meals — no cooking required.",
    ctaBtn: "Subscribe Now",
  },
  ar: {
    heroTitle: "وجبات الاشتراك",
    heroDesc: "وجبات طازجة وصحية من إعداد الطهاة — تُسلم إلى باب منزلك كل يوم.",
    aboutTitle: "لماذا تختار اشتراك الوجبات لدينا؟",
    about: [
      "وداعًا للتسوق والطبخ والتوتر. خطط وجباتنا مصممة لأسلوب حياة مزدحم.",
      "كل طبق يُعده طهاة محترفون بمكونات طازجة ويُسلم بتغليف صديق للبيئة.",
      "سواء كنت تهدف لإدارة الوزن أو أهداف اللياقة أو فقط تناول طعام صحي بسهولة، نحن هنا لأجلك.",
      "خطط مرنة، قوائم قابلة للتخصيص، ولا التزام طويل الأمد."
    ],
    pricingTitle: "خطط الوجبات",
    pricingDesc: "اختر الخطة التي تناسب نمط حياتك وأهدافك.",
    plans: [
      { name: "خطة البداية", price: "$59", period: "/أسبوع", features: ["5 وجبات من إعداد الطهاة", "تغذية متوازنة", "استلام أو توصيل"], highlighted: false },
      { name: "الخطة القياسية", price: "$99", period: "/أسبوع", features: ["10 وجبات من إعداد الطهاة", "قائمة قابلة للتخصيص", "توصيل مجاني"], highlighted: true },
      { name: "الخطة المميزة", price: "$179", period: "/أسبوع", features: ["20 وجبة + وجبات خفيفة", "معتمدة من أخصائي تغذية", "توصيل أولوية"], highlighted: false },
    ],
    testimonials: [
      { name: "آفا ميتشل", role: "محترفة مشغولة", text: "هذه الوجبات توفر لي ساعات كل أسبوع — صحية ولذيذة ودائمًا في الوقت المحدد." },
      { name: "ليام ووكر", role: "مهتم باللياقة", text: "الخيارات عالية البروتين تناسب روتيني الرياضي تمامًا — لا طبخ ولا توتر!" },
      { name: "إيزابيلا جرين", role: "أم جديدة", text: "توصيل الوجبات الطازجة يوميًا أنقذني أثناء التوفيق بين العائلة والعمل." },
      { name: "نواه ديفيس", role: "طالب", text: "مغذية وبأسعار معقولة وأفضل بكثير من النودلز الفورية — أصبحت مدمنًا!" },
      { name: "ميا جونسون", role: "عميلة متكررة", text: "لدي هذه الخطة منذ ستة أشهر — لا شكاوى، فقط مدح من براعم التذوق!" },
    ],
    testimonialsTitle: "ماذا يقول العملاء",
    stepsTitle: "كيف تعمل",
    stepsDesc: "الأكل الصحي أصبح سهلاً — ابدأ في ثلاث خطوات سريعة.",
    steps: [
      { title: "اختر خطتك", description: "اختر من اشتراكات أسبوعية أو شهرية." },
      { title: "خصص قائمتك", description: "اختر من خيارات نباتية أو نباتية صرفة أو نظام متوازن." },
      { title: "استمتع بوجبات طازجة يوميًا", description: "تُسلم إلى باب منزلك، جاهزة للتسخين والأكل." },
    ],
    ctaTitle: "جاهز لتناول طعام أفضل كل يوم؟",
    ctaDesc: "اشترك اليوم واستمتع بوجبات من إعداد الطهاة — دون الحاجة للطبخ.",
    ctaBtn: "اشترك الآن",
  },
  he: {
    heroTitle: "ארוחות במנוי",
    heroDesc: "ארוחות טריות, בריאות ומוכנות על ידי שף — מגיעות עד הדלת כל יום.",
    aboutTitle: "למה לבחור במנוי הארוחות שלנו?",
    about: [
      "בלי קניות, בלי בישול, בלי לחץ. תוכניות הארוחות שלנו מתאימות לחיים עמוסים.",
      "כל מנה מוכנה על ידי שפים מקצועיים ממרכיבים טריים ומגיעה באריזה ידידותית לסביבה.",
      "בין אם אתם שואפים לניהול משקל, מטרות כושר או פשוט לאכילה בריאה ונוחה — אנחנו כאן בשבילכם.",
      "תוכניות גמישות, תפריטים מותאמים אישית וללא התחייבות ארוכת טווח."
    ],
    pricingTitle: "תוכניות ארוחות",
    pricingDesc: "בחרו את התוכנית שמתאימה לאורח החיים והמטרות שלכם.",
    plans: [
      { name: "תוכנית מתחילים", price: "$59", period: "/שבוע", features: ["5 ארוחות מוכנות על ידי שף", "תזונה מאוזנת", "איסוף או משלוח"], highlighted: false },
      { name: "תוכנית סטנדרטית", price: "$99", period: "/שבוע", features: ["10 ארוחות מוכנות על ידי שף", "תפריט מותאם אישית", "משלוח חינם"], highlighted: true },
      { name: "תוכנית פרימיום", price: "$179", period: "/שבוע", features: ["20 ארוחות + חטיפים", "מאושר על ידי דיאטנית", "משלוח בעדיפות"], highlighted: false },
    ],
    testimonials: [
      { name: "אווה מיטשל", role: "אשת מקצוע עסוקה", text: "הארוחות האלו חוסכות לי שעות כל שבוע — בריאות, טעימות ותמיד בזמן." },
      { name: "ליאם ווקר", role: "חובב כושר", text: "האפשרויות עתירות החלבון מתאימות בדיוק לשגרת האימונים שלי — בלי בישול, בלי לחץ!" },
      { name: "איזבלה גרין", role: "הורה טרי", text: "קבלת ארוחות טריות כל יום הצילה אותי juggling בין משפחה לעבודה." },
      { name: "נואה דייוויס", role: "סטודנט", text: "משביע, מזין, וזול בהרבה מאטריות אינסטנט — התמכרתי!" },
      { name: "מיה ג'ונסון", role: "לקוחה חוזרת", text: "אני במנוי הזה כבר חצי שנה — אין תלונות, רק מחמאות!" },
    ],
    testimonialsTitle: "מה הלקוחות אומרים",
    stepsTitle: "איך זה עובד",
    stepsDesc: "אכילה בריאה בקלות — מתחילים בשלושה שלבים מהירים.",
    steps: [
      { title: "בחרו תוכנית", description: "בחרו במנוי שבועי או חודשי." },
      { title: "התאימו את התפריט", description: "בחרו באפשרויות צמחוניות, טבעוניות או תפריט מאוזן." },
      { title: "הנאה מארוחות טריות כל יום", description: "מגיע עד הדלת, מוכן לחימום ואכילה." },
    ],
    ctaTitle: "מוכנים לאכול טוב כל יום?",
    ctaDesc: "הירשמו היום ותהנו מארוחות שף — בלי לבשל.",
    ctaBtn: "הירשם עכשיו",
  },
};

const stepIcons = [
  <FaUtensils size={28} className="text-white" />,
  <FaLeaf size={28} className="text-white" />,
  <FaClock size={28} className="text-white" />,
];

const SubscriptionMealsHero = () => {
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
          src={mealVideo}
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
          <div className="w-full md:w-1/2 flex justify-center items-center min-h-[340px] h-full">
            <img
              src={meal1}
              alt="Subscription meal"
              className="w-full md:max-w-full md:h-[340px] max-w-md h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
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
                {translations[language].ctaBtn}
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
              src={meal2}
              alt="Healthy meal plan"
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
          {translations[language].steps.map((step, idx) => (
            <div key={idx} className="flex items-center">
              <div className="flex flex-col hover:scale-105 transition items-center max-w-[200px]">
                <div className={`rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md ${theme === 'dark' ? 'bg-red-700' : 'bg-red-500'}`}> 
                  {stepIcons[idx]}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'} text-sm`}>{step.description}</p>
              </div>
              {idx < translations[language].steps.length - 1 && (
                <FaArrowRight size={30} className="text-gray-400 mx-6 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-6 md:px-20 text-white">
        <img
          src={meal3}
          alt="Meal delivery setup"
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

export default SubscriptionMealsHero;
