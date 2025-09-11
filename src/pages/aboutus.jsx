
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import aboutushero from "../assets/aboutushero.mp4";
import special1 from "../assets/special1.jpg";
import special2 from "../assets/special2.jpg";
import awards from "../assets/awards.jpg";

const translations = {
  English: {
    about: "About Us",
    hero: "Crafting Culinary Memories, One Plate at a Time",
    missionTitle: "Our Mission",
    missionDesc: "To delight every guest with an exceptional dining experience, blending authentic flavors, warm hospitality, and a passion for culinary excellence. We strive to create a welcoming space where families and friends can celebrate life’s moments over delicious food.",
    achievementsTitle: "Achievements Timeline",
    achievementsDesc: "Over the years, our journey has been marked by numerous awards and milestones that celebrate our commitment to excellence and innovation in the culinary world.",
    achievementsList: [
      { year: "1990", desc: "Best New Restaurant Award" },
      { year: "2005", desc: "Culinary Excellence Recognition" },
      { year: "2015", desc: "Community Choice Award" },
      { year: "2022", desc: "Sustainability & Innovation Honor" },
    ],
    visionTitle: "Our Vision",
    visionDesc: "To be the region’s most loved restaurant, known for innovation, sustainability, and a commitment to community. We envision a future where every meal is a celebration and every guest leaves with a smile.",
    corePrinciples: "Core Principles",
    principle1: "Hygiene & Safety",
    principle1Desc: "We maintain the highest standards of cleanliness and food safety, ensuring every meal is prepared in a safe and healthy environment.",
    principle2: "Sustainability",
    principle2Desc: "We are committed to sustainable practices, from sourcing local ingredients to minimizing waste and supporting eco-friendly initiatives.",
    principle3: "Integrity & Respect",
    principle3Desc: "We treat our guests, staff, and partners with honesty and respect, fostering a welcoming and inclusive community for all.",
    ctaTitle: "Reserve Your Table or Order Online!",
    ctaDesc: "Experience gourmet dining, chef’s specials, and unforgettable evenings at Foodify. Book your table for a special night or order your favorite dishes for home delivery. We’re here to delight your taste buds—every day!",
    reserveBtn: "Reserve a Table",
    orderBtn: "Order Online",
  },
  Arabic: {
    about: "من نحن",
    hero: "نصنع ذكريات الطهي، طبقًا تلو الآخر",
    missionTitle: "مهمتنا",
    missionDesc: "إسعاد كل ضيف بتجربة طعام استثنائية، تجمع بين النكهات الأصيلة، والضيافة الدافئة، والشغف بالتميز في الطهي. نسعى لخلق مساحة ترحيبية حيث يمكن للعائلات والأصدقاء الاحتفال بلحظات الحياة على مائدة لذيذة.",
    achievementsTitle: "جدول الإنجازات",
    achievementsDesc: "على مر السنين، تميزت رحلتنا بالعديد من الجوائز والإنجازات التي تحتفي بالتزامنا بالتميز والابتكار في عالم الطهي.",
    achievementsList: [
      { year: "1990", desc: "جائزة أفضل مطعم جديد" },
      { year: "2005", desc: "التميز في الطهي" },
      { year: "2015", desc: "جائزة اختيار المجتمع" },
      { year: "2022", desc: "شرف الاستدامة والابتكار" },
    ],
    visionTitle: "رؤيتنا",
    visionDesc: "أن نكون المطعم الأكثر حبًا في المنطقة، معروفين بالابتكار والاستدامة والالتزام بالمجتمع. نتصور مستقبلاً يكون فيه كل وجبة احتفالًا ويغادر فيه كل ضيف مبتسمًا.",
    corePrinciples: "المبادئ الأساسية",
    principle1: "النظافة والسلامة",
    principle1Desc: "نحافظ على أعلى معايير النظافة وسلامة الغذاء، لضمان إعداد كل وجبة في بيئة آمنة وصحية.",
    principle2: "الاستدامة",
    principle2Desc: "نلتزم بالممارسات المستدامة، من شراء المكونات المحلية إلى تقليل النفايات ودعم المبادرات الصديقة للبيئة.",
    principle3: "النزاهة والاحترام",
    principle3Desc: "نتعامل مع ضيوفنا وموظفينا وشركائنا بأمانة واحترام، ونبني مجتمعًا مرحبًا وشاملًا للجميع.",
    ctaTitle: "احجز طاولتك أو اطلب عبر الإنترنت!",
    ctaDesc: "اختبر الطعام الفاخر، أطباق الشيف الخاصة، والأمسيات التي لا تُنسى في فوديفاي. احجز طاولتك لليلة مميزة أو اطلب أطباقك المفضلة للتوصيل. نحن هنا لإسعاد ذوقك—كل يوم!",
    reserveBtn: "احجز طاولة",
    orderBtn: "اطلب عبر الإنترنت",
  },
  Hebrew: {
    about: "עלינו",
    hero: "יוצרים זיכרונות קולינריים, צלחת אחר צלחת",
    missionTitle: "המשימה שלנו",
    missionDesc: "לשמח כל אורח בחוויית אוכל יוצאת דופן, המשלבת טעמים אותנטיים, אירוח חם ותשוקה למצוינות קולינרית. אנו שואפים ליצור מקום מזמין בו משפחות וחברים יכולים לחגוג את רגעי החיים על אוכל טעים.",
    achievementsTitle: "ציר הזמן של ההישגים",
    achievementsDesc: "לאורך השנים, המסע שלנו התאפיין בפרסים רבים ואבני דרך החוגגים את המחויבות שלנו למצוינות וחדשנות בעולם הקולינריה.",
    achievementsList: [
      { year: "1990", desc: "פרס המסעדה החדשה הטובה ביותר" },
      { year: "2005", desc: "הוקרה למצוינות קולינרית" },
      { year: "2015", desc: "פרס בחירת הקהילה" },
      { year: "2022", desc: "אות קיימות וחדשנות" },
    ],
    visionTitle: "החזון שלנו",
    visionDesc: "להיות המסעדה האהובה ביותר באזור, ידועה בחדשנות, קיימות ומחויבות לקהילה. אנו רואים עתיד בו כל ארוחה היא חגיגה וכל אורח יוצא עם חיוך.",
    corePrinciples: "עקרונות יסוד",
    principle1: "היגיינה ובטיחות",
    principle1Desc: "אנו שומרים על הסטנדרטים הגבוהים ביותר של ניקיון ובטיחות מזון, ומבטיחים שכל ארוחה מוכנה בסביבה בטוחה ובריאה.",
    principle2: "קיימות",
    principle2Desc: "אנו מחויבים לפרקטיקות ברות קיימא, מרכישת מרכיבים מקומיים ועד למזעור פסולת ותמיכה ביוזמות ידידותיות לסביבה.",
    principle3: "יושרה וכבוד",
    principle3Desc: "אנו מתייחסים לאורחים, לצוות ולשותפים שלנו ביושרה ובכבוד, ומטפחים קהילה מזמינה ומכילה לכולם.",
    ctaTitle: "הזמן שולחן או הזמן אונליין!",
    ctaDesc: "חווית אוכל גורמה, מנות שף וערבים בלתי נשכחים בפודיפיי. הזמינו שולחן לערב מיוחד או הזמינו את המנות האהובות עליכם למשלוח. אנחנו כאן כדי לפנק אתכם—כל יום!",
    reserveBtn: "הזמן שולחן",
    orderBtn: "הזמן אונליין",
  },
};

export default function AboutUs() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'English';
    }
    return 'English';
  });
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(localStorage.getItem('selectedLanguage') || 'English');
    };
    const handleThemeChange = () => {
      setTheme(localStorage.getItem('theme') || 'light');
    };
    window.addEventListener('language-changed', handleLanguageChange);
    window.addEventListener('storage', handleLanguageChange);
    window.addEventListener('theme-changed', handleThemeChange);
    window.addEventListener('storage', handleThemeChange);
    return () => {
      window.removeEventListener('language-changed', handleLanguageChange);
      window.removeEventListener('storage', handleLanguageChange);
      window.removeEventListener('theme-changed', handleThemeChange);
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);

  const t = translations[language] || translations.English;
  const isRTL = language === 'Arabic' || language === 'Hebrew';

  // Theme toggle handler
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      window.dispatchEvent(new Event('theme-changed'));
    }
  };

  return (
    <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-30 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>

      {/* Hero Section */}
  <section className="relative flex flex-col items-center justify-center h-[90vh] w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-110"
          src={aboutushero}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={`absolute inset-0 z-10 ${theme === 'dark' ? 'bg-black/70' : 'bg-black/60'}`} />
          <div className="relative z-20 flex flex-col items-center justify-center h-full w-full px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white text-center mb-4 drop-shadow-lg">{t.about}</h1>
            <span className="text-lg md:text-2xl text-white/90 text-center mb-8 max-w-2xl drop-shadow">{t.hero}</span>
          </div>
      </section>

      {/* Our Mission Section */}
      <section className={`w-full py-20 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#181818]' : 'bg-red-50'}`}>
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div className="w-full h-full">
            <div className="w-full aspect-[16/10]">
              <img
                src={special1}
                alt="Our Mission"
                className="rounded-2xl shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Right: Content */}
          <div className="grid gap-4 content-center">
            <h2 className={`text-3xl md:text-4xl font-bold font-serif text-red-500`}>{t.missionTitle}</h2>
            <p className={`text-lg max-w-lg ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{t.missionDesc}</p>
          </div>
        </div>
      </section>

      {/* Achievements Timeline Section */}
      <section className={`w-full py-20 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div className="w-full h-full order-1 md:order-2">
            <div className="w-full aspect-[16/10]">
              <img
                src={awards}
                alt="Achievements Timeline"
                className="rounded-2xl shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Right: Content */}
          <div className="grid gap-4 content-center">
            <h2 className={`text-3xl md:text-4xl font-bold font-serif text-red-500`}>{t.achievementsTitle}</h2>
            <p className={`text-lg max-w-lg ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{t.achievementsDesc}</p>
            <ul className={`space-y-2 list-disc pl-5 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              {t.achievementsList.map((item, i) => (
                <li key={i}><span className="font-semibold">{item.year}:</span> {item.desc}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className={`w-full py-20 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#181818]' : 'bg-red-50'}`}>
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Content */}
          <div className="grid gap-4 content-center order-2 md:order-1">
            <h2 className={`text-3xl md:text-4xl font-bold font-serif text-red-500`}>{t.visionTitle}</h2>
            <p className={`text-lg max-w-lg ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.visionDesc}</p>
          </div>
          {/* Right: Image */}
          <div className="w-full h-full order-1 md:order-2">
            <div className="w-full aspect-[16/10]">
              <img
                src={special2}
                alt="Our Vision"
                className="rounded-2xl shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className={`w-full py-20 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 font-serif text-center text-red-500`}>{t.corePrinciples}</h2>
          <div className="grid  md:grid-cols-3 gap-10 w-full">
            {/* Principle 1 */}
            <div className={`flex flex-col items-center rounded-2xl shadow-lg p-8 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-red-50'}`}>
              <h3 className="text-xl font-semibold mb-2 text-red-600">{t.principle1}</h3>
              <p className={`text-center ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{t.principle1Desc}</p>
            </div>
            {/* Principle 2 */}
            <div className={`flex flex-col items-center rounded-2xl shadow-lg p-8 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-red-50'}`}>
              <h3 className="text-xl font-semibold mb-2 text-red-600">{t.principle2}</h3>
              <p className={`text-center ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{t.principle2Desc}</p>
            </div>
            {/* Principle 3 */}
            <div className={`flex flex-col items-center rounded-2xl shadow-lg p-8 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-red-50'}`}>
              <h3 className="text-xl font-semibold mb-2 text-red-600">{t.principle3}</h3>
              <p className={`text-center ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{t.principle3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`w-full py-16 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#181818]' : 'bg-red-50'}`}>
        <div className="max-w-3xl w-full mx-auto flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-red-500">{t.ctaTitle}</h2>
          <p className={`text-lg text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{t.ctaDesc}</p>
          <div className="flex flex-row sm:flex-row gap-4">
            <button
              onClick={() => navigate('/contactus')}
              className="px-10 py-4 rounded-full text-white font-semibold text-lg shadow-lg transition bg-red-600 hover:bg-red-700"
            >
              {t.reserveBtn}
            </button>
            <button
              onClick={() => navigate('/contactus')}
              className={`px-10 py-4 rounded-full font-semibold text-lg shadow-lg transition border ${theme === 'dark' ? 'text-red-400 bg-[#181818] border-red-400 hover:bg-[#222]' : 'text-red-600 bg-white border-red-600 hover:bg-red-100'}`}
            >
              {t.orderBtn}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}