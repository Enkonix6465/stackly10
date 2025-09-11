import React, { useState } from "react";
import contactVideo from "../assets/contact.mp4";
import contact1 from "../assets/contact1.jpg";
import contact2 from "../assets/contact2.jpg";
import contact3 from "../assets/contact3.webp";
import faqImage from "../assets/faq.jpg";

// Translation object for Contact page
const translations = {
  en: {
    heroTitle: "Get in <span class='text-red-500'>Touch</span> Today",
    heroDesc: "Serving <span class='text-white font-semibold'>flavors</span>, delivering <span class='text-white font-semibold'>happiness</span> — enjoy every bite with us.",
    supportHeading: "Meet Our Support Team",
    cards: [
      { title: "Visit Us", text: "123 Business Street, Suite 100, YourCity" },
      { title: "Email Us", text: "stackly.com" },
      { title: "Customer Care", text: "+1 (800) 123-4567" },
    ],
    getInTouch: "Get in Touch",
    needHelp: "Need help? <span class='text-red-500'>Let's get in touch</span>",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    message: "Write a Message",
    send: "Send Message",
    submitted: "Submitted!",
    submitSuccess: "Submitted successfully!",
    location: "Location",
    howToReach: "How to Reach Our Location",
    faqSmall: "Frequently Asked Questions",
    faqTitle: "Got <span class='text-red-500'>Questions?</span> We've Got Answers",
    stayUpdated: "Stay Updated",
    newsletterDesc: "Subscribe to our newsletter and never miss our latest news, updates, and special offers.",
    subscribe: "Subscribe",
    subscribed: "Subscribed!",
    subscribeSuccess: "Subscribed successfully!",
    faqs: [
      { q: "How do I place an order online?", a: "You can easily order through our website or mobile app by browsing the menu, selecting your dishes, and checking out securely." },
      { q: "Do you offer home delivery?", a: "Yes, we provide fast and reliable home delivery to your doorstep within our service area." },
      { q: "Can I customize my order?", a: "Absolutely! You can add special instructions, choose spice levels, and request add-ons while placing your order." },
      { q: "What areas do you deliver to?", a: "We currently deliver across major parts of the city. You can check delivery availability by entering your location at checkout." },
      { q: "Do you offer special deals or discounts?", a: "Yes, we regularly run promotions, combo offers, and discounts. Keep an eye on our website or app for the latest deals." },
    ],
  },
  ar: {
    heroTitle: "تواصل معنا <span class='text-red-500'>اليوم</span>",
    heroDesc: "نقدم <span class='text-white font-semibold'>أشهى النكهات</span>، ونوصّل <span class='text-white font-semibold'>السعادة</span> — استمتع بكل لقمة معنا.",
    supportHeading: "فريق الدعم لدينا",
    cards: [
      { title: "زرنا", text: "123 شارع الأعمال، جناح 100، مدينتك" },
      { title: "راسلنا عبر البريد", text: "stackly.com" },
      { title: "خدمة العملاء", text: "+1 (800) 123-4567" },
    ],
    getInTouch: "تواصل معنا",
    needHelp: "تحتاج مساعدة؟ <span class='text-red-500'>تواصل معنا الآن</span>",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    message: "اكتب رسالتك",
    send: "إرسال الرسالة",
    submitted: "تم الإرسال!",
    submitSuccess: "تم الإرسال بنجاح!",
    location: "الموقع",
    howToReach: "كيفية الوصول إلى موقعنا",
    faqSmall: "الأسئلة الشائعة",
    faqTitle: "هل لديك <span class='text-red-500'>أسئلة؟</span> لدينا الإجابات",
    stayUpdated: "ابقَ على اطلاع",
    newsletterDesc: "اشترك في نشرتنا الإخبارية ولا تفوت آخر الأخبار والعروض الخاصة.",
    subscribe: "اشترك",
    subscribed: "تم الاشتراك!",
    subscribeSuccess: "تم الاشتراك بنجاح!",
    faqs: [
      { q: "كيف أطلب عبر الإنترنت؟", a: "يمكنك الطلب بسهولة من خلال موقعنا أو تطبيقنا باختيار الأطباق وإتمام الدفع بأمان." },
      { q: "هل تقدمون خدمة التوصيل للمنزل؟", a: "نعم، نقدم توصيل سريع وموثوق إلى باب منزلك ضمن منطقة الخدمة." },
      { q: "هل يمكنني تخصيص طلبي؟", a: "بكل تأكيد! يمكنك إضافة تعليمات خاصة، واختيار مستوى التوابل، وطلب الإضافات أثناء الطلب." },
      { q: "ما هي المناطق التي توصلون إليها؟", a: "نقوم بالتوصيل حاليًا لمعظم مناطق المدينة. يمكنك التحقق من التوصيل بإدخال موقعك عند الدفع." },
      { q: "هل لديكم عروض أو خصومات خاصة؟", a: "نعم، نقدم عروض وخصومات بشكل منتظم. تابع موقعنا أو تطبيقنا لأحدث العروض." },
    ],
  },
  he: {
    heroTitle: "צור <span class='text-red-500'>קשר</span> היום",
    heroDesc: "מגישים <span class='text-white font-semibold'>טעמים</span>, מביאים <span class='text-white font-semibold'>שמחה</span> — תהנה מכל ביס איתנו.",
    supportHeading: "צוות התמיכה שלנו",
    cards: [
      { title: "בקר אותנו", text: "123 רחוב העסקים, קומה 100, העיר שלך" },
      { title: "שלח לנו מייל", text: "stackly.com" },
      { title: "שירות לקוחות", text: "+1 (800) 123-4567" },
    ],
    getInTouch: "צור קשר",
    needHelp: "צריך עזרה? <span class='text-red-500'>צור קשר עכשיו</span>",
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    email: "אימייל",
    phone: "טלפון",
    message: "כתוב הודעה",
    send: "שלח הודעה",
    submitted: "נשלח!",
    submitSuccess: "נשלח בהצלחה!",
    location: "מיקום",
    howToReach: "איך להגיע אלינו",
    faqSmall: "שאלות נפוצות",
    faqTitle: "יש <span class='text-red-500'>שאלות?</span> יש לנו תשובות",
    stayUpdated: "הישאר מעודכן",
    newsletterDesc: "הירשם לניוזלטר שלנו ואל תפספס חדשות, עדכונים ומבצעים.",
    subscribe: "הירשם",
    subscribed: "נרשמת!",
    subscribeSuccess: "נרשמת בהצלחה!",
    faqs: [
      { q: "איך מבצעים הזמנה אונליין?", a: "ניתן להזמין בקלות דרך האתר או האפליקציה על ידי בחירת מנות ותשלום מאובטח." },
      { q: "האם יש משלוח לבית?", a: "כן, אנו מספקים משלוח מהיר ואמין עד הבית באזור השירות שלנו." },
      { q: "אפשר להתאים את ההזמנה?", a: "בהחלט! אפשר להוסיף הוראות מיוחדות, לבחור רמת חריפות ולבקש תוספות בהזמנה." },
      { q: "לאילו אזורים אתם מגיעים?", a: "אנחנו מגיעים לרוב חלקי העיר. ניתן לבדוק זמינות משלוח לפי מיקום בקופה." },
      { q: "יש מבצעים או הנחות?", a: "כן, יש לנו מבצעים והנחות באופן קבוע. עקבו אחרי האתר או האפליקציה לעדכונים." },
    ],
  },
};



export default function ContactHero() {
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  // Language state synced with Header (live update)
  const [language, setLanguage] = React.useState('en');
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
      const storedSelectedLang = localStorage.getItem('selectedLanguage') || 'English';
      setLanguage(langMap[storedSelectedLang] || 'en');
      const handleLangChange = () => {
        const newSelectedLang = localStorage.getItem('selectedLanguage') || 'English';
        setLanguage(langMap[newSelectedLang] || 'en');
      };
      window.addEventListener('language-changed', handleLangChange);
      window.addEventListener('storage', handleLangChange);
      return () => {
        window.removeEventListener('language-changed', handleLangChange);
        window.removeEventListener('storage', handleLangChange);
      };
    }
  }, []);

  // Set RTL/LTR direction
  const dir = language === 'ar' || language === 'he' ? 'rtl' : 'ltr';

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Theme state synced with Header (live update)
  const [theme, setTheme] = React.useState('light');
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem('theme') || 'light';
        setTheme(newTheme);
      };
      window.addEventListener('theme-changed', handleThemeChange);
      window.addEventListener('storage', handleThemeChange);
      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);
      };
    }
  }, []);

  return (
    <div className={theme === 'dark' ? 'min-h-screen text-white' : 'min-h-screen  text-black'} dir={dir}>
      {/* Hero Section */}
  <section className={`relative h-[90vh] flex items-center justify-center ${theme === 'dark' ? '' : ''}`}> 
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src={contactVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Optional dark overlay for readability */}
        <div className={theme === 'dark' ? 'absolute inset-0 bg-black/60 -z-10' : 'absolute inset-0 bg-black/40 -z-10'}></div>

        {/* Content */}
        <div className={`relative text-center px-4 max-w-2xl ${theme === 'dark' ? 'text-white' : 'text-white'}`}
          style={dir === 'rtl' ? { direction: 'rtl' } : {}}>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight" dangerouslySetInnerHTML={{ __html: translations[language].heroTitle }} />
          <p className="text-lg md:text-2xl font-light mb-6" dangerouslySetInnerHTML={{ __html: translations[language].heroDesc }} />
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-red-50'}`}> 
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
  <h2 className={`text-4xl md:text-5xl font-extrabold text-center mb-12 text-red-500`}
          style={dir === 'rtl' ? { direction: 'rtl' } : {}}>
          {translations[language].supportHeading}
        </h2>
        {/* Cards Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {(() => {
            const cardImages = [contact1, contact2, contact3];
            return translations[language].cards.map((card, index) => (
              <div
                key={index}
                className={`${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-black'} rounded-2xl shadow-md hover:shadow-xl transition text-center p-6`}
                style={dir === 'rtl' ? { direction: 'rtl' } : {}}
              >
                <img
                  src={cardImages[index]}
                  alt={card.title}
                  className="w-full h-56 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold mb-2" style={{ color: 'red-500' }}>{card.title}</h3>
                <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}>{card.text}</p>
              </div>
            ));
          })()}
        </div>
      </div>
    </section>



      <section className={`py-20 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#fff]'}`}>
      <div className="max-w-4xl mx-auto px-6">
         
        {/* Main Heading */}
  <h2 className={`text-4xl md:text-5xl font-extrabold mb-10 text-red-500`}
          style={dir === 'rtl' ? { direction: 'rtl' } : {}}
          dangerouslySetInnerHTML={{ __html: translations[language].needHelp }} />

        {/* Contact Form */}
        <form
          className={`${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black'} rounded-2xl shadow-lg p-8 space-y-6`}
          onSubmit={e => {
            e.preventDefault();
            setFormSubmitted(true);
          }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium" htmlFor="firstName">{translations[language].firstName}</label>
              <input
                id="firstName"
                type="text"
                placeholder={translations[language].firstName}
                className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500 ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
                style={dir === 'rtl' ? { direction: 'rtl' } : {}}
              />
            </div>
            <div>
              <label className="block mb-2 font-medium" htmlFor="lastName">{translations[language].lastName}</label>
              <input
                id="lastName"
                type="text"
                placeholder={translations[language].lastName}
                className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500 ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
                style={dir === 'rtl' ? { direction: 'rtl' } : {}}
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 font-medium" htmlFor="email">{translations[language].email}</label>
            <input
              id="email"
              type="email"
              placeholder={translations[language].email}
              className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500 ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
              style={dir === 'rtl' ? { direction: 'rtl' } : {}}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium" htmlFor="phone">{translations[language].phone}</label>
            <input
              id="phone"
              type="tel"
              placeholder={translations[language].phone}
              className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500 ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
              style={dir === 'rtl' ? { direction: 'rtl' } : {}}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium" htmlFor="message">{translations[language].message}</label>
            <textarea
              id="message"
              rows="5"
              placeholder={translations[language].message}
              className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500 ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
              style={dir === 'rtl' ? { direction: 'rtl' } : {}}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition"
            disabled={formSubmitted}
          >
            {formSubmitted ? translations[language].submitted : translations[language].send}
          </button>
          {formSubmitted && (
            <div className="text-green-500 text-center font-semibold mt-4">{translations[language].submitSuccess}</div>
          )}
        </form>
      </div>
    </section>


      <section className={`py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-red-50'}`}>
      <div className="max-w-6xl mx-auto px-6">
         

        {/* Main heading */}
  <h2 className={`text-4xl md:text-5xl font-extrabold mb-10 text-red-500`}
          style={dir === 'rtl' ? { direction: 'rtl' } : {}}>
          {translations[language].howToReach}
        </h2>

        {/* Map embed */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019826876137!2d-122.40081358468178!3d37.79361197975621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064ebcc65e9%3A0x34b3b70f6a64a96f!2s456%20Market%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1692225939182!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>



      <section className={`py-20 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#fff]'}`}>
      <div className="max-w-7xl mx-auto px-6 grid  md:grid-cols-2 gap-12 items-center">
        {/* Left: Image and Heading */}
        <div>
           
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-8 text-red-500`}
            style={dir === 'rtl' ? { direction: 'rtl' } : {}}
            dangerouslySetInnerHTML={{ __html: translations[language].faqTitle }} />
          <img 
            src={faqImage} 
            alt="FAQ illustration" 
            className="rounded-xl shadow-lg"
            
          />
        </div>

        {/* Right: Accordion */}
        <div className="space-y-4">
          {translations[language].faqs.map((faq, index) => (
            <div
              key={index}
              className={`${theme === 'dark' ? 'bg-[#222] border-gray-700' : 'bg-gray-50 border-gray-100'} rounded-xl shadow-sm border`}
              style={dir === 'rtl' ? { direction: 'rtl' } : {}}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center p-6 text-left ${theme === 'dark' ? 'text-white' : ''}`}
              >
                <span className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {faq.q}
                </span>
                <span className="text-red-500 text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className={`px-6 pb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>


      <section className={`py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-red-50'}`}>
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Heading */}
  <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 text-red-500`}
          style={dir === 'rtl' ? { direction: 'rtl' } : {}}>
          {translations[language].stayUpdated}
        </h2>
        <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-black'}`}
          style={dir === 'rtl' ? { direction: 'rtl' } : {}}>
          {translations[language].newsletterDesc}
        </p>

        {/* Form */}
        <form
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          onSubmit={e => {
            e.preventDefault();
            setNewsletterSubmitted(true);
          }}
        >
          <input
            type="email"
            placeholder={translations[language].email}
            className={`flex-1 px-6 py-4 rounded-xl border w-full sm:w-auto focus:outline-none focus:border-red-500 ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-300 text-gray-800 bg-white'}`}
            disabled={newsletterSubmitted}
            style={dir === 'rtl' ? { direction: 'rtl' } : {}}
          />
          <button
            type="submit"
            className="bg-red-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#00] transition duration-300 w-full sm:w-auto"
            disabled={newsletterSubmitted}
          >
            {newsletterSubmitted ? translations[language].subscribed : translations[language].subscribe}
          </button>
        </form>
        {newsletterSubmitted && (
          <div className="text-green-500 text-center font-semibold mt-4">{translations[language].subscribeSuccess}</div>
        )}
      </div>
    </section>
  
    </div>
  );
}
