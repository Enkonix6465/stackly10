
import logo from "../assets/logo.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Translation object for all footer text
const translations = {
  en: {
    brand: 'Delighting Your tastebuds, Every Day!',
    quickLinks: 'Quick Links',
    home: 'Home',
    about: 'About Us',
    blog: 'Blog',
    contact: 'Contact Us',
    services: 'Services',
    ourServices: 'Our Services',
    foodDelivery: 'Food Delivery',
    catering: 'Catering Services',
    dineIn: 'Dine-In Experience',
    partyOrders: 'Party Orders & Bulk Meals',
    subscription: 'Subscription Meals',
    takeaway: 'Takeaway / Pickup',
    contactTitle: 'Contact Us',
  address: '123 Food Street, Gourmet City',
  phone: 'Phone: (123) 456-7890',
  email: 'Email: support@foodify.com',
  hours: 'Hours: Mon–Sun, 10 AM – 11 PM',
    follow: 'Follow Us',
    orderNow: 'Order Now',
    orderDesc: 'Craving something delicious? Place your order online and enjoy fast delivery or easy pickup from Foodify!',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    disclaimer: 'Disclaimer',
    copyright: 'All rights reserved.',
  },
  ar: {
    brand: 'نسعد براعم تذوقك كل يوم!',
    quickLinks: 'روابط سريعة',
    home: 'الرئيسية',
    about: 'معلومات عنا',
    blog: 'المدونة',
    contact: 'اتصل بنا',
    services: 'الخدمات',
    ourServices: 'خدماتنا',
    foodDelivery: 'توصيل الطعام',
    catering: 'خدمات التموين',
    dineIn: 'تجربة تناول الطعام',
    partyOrders: 'طلبات الحفلات والوجبات بالجملة',
    subscription: 'وجبات الاشتراك',
    takeaway: 'استلام / وجبات جاهزة',
    contactTitle: 'اتصل بنا',
  address: 'العنوان: 123 شارع الذواقة، المدينة',
  phone: 'الهاتف: (123) 456-7890',
  email: 'البريد الإلكتروني: support@foodify.com',
  hours: 'ساعات العمل: الأحد–السبت، 10 صباحًا – 11 مساءً',
    follow: 'تابعنا',
    orderNow: 'اطلب الآن',
    orderDesc: 'هل ترغب في شيء لذيذ؟ اطلب الآن واستمتع بالتوصيل السريع أو الاستلام السهل من فوديفاي!',
    privacy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
    disclaimer: 'إخلاء المسؤولية',
    copyright: 'جميع الحقوق محفوظة.',
  },
  he: {
    brand: 'משמחים את בלוטות הטעם שלך, כל יום!',
    quickLinks: 'קישורים מהירים',
    home: 'דף הבית',
    about: 'עלינו',
    blog: 'בלוג',
    contact: 'צור קשר',
    services: 'שירותים',
    ourServices: 'השירותים שלנו',
    foodDelivery: 'משלוח אוכל',
    catering: 'שירותי קייטרינג',
    dineIn: 'חווית אוכל במקום',
    partyOrders: 'הזמנות למסיבות וארוחות בכמויות',
    subscription: 'ארוחות במנוי',
    takeaway: 'איסוף / טייק אווי',
    contactTitle: 'צור קשר',
  address: 'כתובת: 123 רחוב גורמה, עיר',
  phone: 'טלפון: (123) 456-7890',
  email: 'אימייל: support@foodify.com',
  hours: 'שעות פעילות: א׳–ש׳, 10:00–23:00',
    follow: 'עקבו אחרינו',
    orderNow: 'הזמן עכשיו',
    orderDesc: 'מתחשק לכם משהו טעים? הזמינו אונליין ותהנו ממשלוח מהיר או איסוף קל מ-Foodify!',
    privacy: 'מדיניות פרטיות',
    terms: 'תנאים והגבלות',
    disclaimer: 'כתב ויתור',
    copyright: 'כל הזכויות שמורות.',
  },
};

const langMap = {
  English: 'en',
  Arabic: 'ar',
  Hebrew: 'he',
  en: 'en',
  ar: 'ar',
  he: 'he',
};


export default function RestaurantFooter() {
  // Theme and language state logic
  const [theme, setTheme] = useState('light');
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'English';
    }
    return 'English';
  });
  const [language, setLanguage] = useState(langMap[selectedLanguage] || 'en');
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    const storedLang = localStorage.getItem('selectedLanguage') || 'English';
    setSelectedLanguage(storedLang);
    setLanguage(langMap[storedLang] || 'en');
  }, []);
  useEffect(() => {
    const handleThemeChange = () => {
      const newTheme = localStorage.getItem('theme') || 'light';
      setTheme(newTheme);
    };
    const handleLangChange = () => {
      const newLang = localStorage.getItem('selectedLanguage') || 'English';
      setSelectedLanguage(newLang);
      setLanguage(langMap[newLang] || 'en');
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
  }, []);
  // Set RTL/LTR direction
  const dir = language === 'ar' || language === 'he' ? 'rtl' : 'ltr';
  return (
    <footer dir={dir} className={theme === 'dark' ? 'bg-[#18181b] border-t mt-0 text-white' : 'bg-white border-t mt-0 text-black'}>
      <div className="max-w-7xl mx-auto px-6 py-10 grid  md:grid-cols-5 gap-8">
        {/* Logo & Brand */}
        <div className="col-span-1 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Stackly Logo" className="h-24 w-24 object-contain" />
          </div>
          <span className="text-red-600 font-semibold mt-2">{translations[language].brand}</span>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-red-700 font-semibold mb-2">{translations[language].quickLinks}</h3>
          <ul className={theme === 'dark' ? 'space-y-1 text-gray-300' : 'space-y-1 text-gray-700'}>
            <li>
              <Link to="/home1" className="hover:text-red-600">{translations[language].home}</Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-red-600">{translations[language].about}</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-red-600">{translations[language].blog}</Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:text-red-600">{translations[language].contact}</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-red-600">{translations[language].services}</Link>
            </li>
          </ul>
        </div>
        {/* Explore Services */}
        <div>
          <h3 className="text-red-700 font-semibold mb-2">{translations[language].ourServices}</h3>
          <ul className={theme === 'dark' ? 'space-y-1 text-gray-300' : 'space-y-1 text-gray-700'}>
            <li>
              <Link to="/Food-Delivery" className="hover:text-red-600">{translations[language].foodDelivery}</Link>
            </li>
            <li>
              <Link to="/Catering-Services" className="hover:text-red-600">{translations[language].catering}</Link>
            </li>
            <li>
              <Link to="/Dine-In-Experience" className="hover:text-red-600">{translations[language].dineIn}</Link>
            </li>
            <li>
              <Link to="/PartyOrders-BulkMeals" className="hover:text-red-600">{translations[language].partyOrders}</Link>
            </li>
            <li>
              <Link to="/Subscription-Meals" className="hover:text-red-600">{translations[language].subscription}</Link>
            </li>
            <li>
              <Link to="/Takeaway-Pickup" className="hover:text-red-600">{translations[language].takeaway}</Link>
            </li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-red-700 font-semibold mb-2">{translations[language].contactTitle}</h3>
          <div className={theme === 'dark' ? 'text-gray-300 text-sm' : 'text-gray-700 text-sm'}>
            <div>{translations[language].address}</div>
            <div>{translations[language].phone}</div>
            <div>
              {(() => {
                // Split label and email for all languages
                const emailStr = translations[language].email;
                const match = emailStr.match(/^(.*?)([\w.-]+@[\w.-]+\.[A-Za-z]{2,})$/);
                if (match) {
                  return <span>{match[1]}<a href={`mailto:${match[2]}`} style={{direction: 'ltr', unicodeBidi: 'bidi-override'}}>{match[2]}</a></span>;
                }
                return emailStr;
              })()}
            </div>
            <div>{translations[language].hours}</div>
          </div>
          <div className="mt-3">
            <span className={theme === 'dark' ? 'font-semibold text-gray-300' : 'font-semibold text-gray-700'}>{translations[language].follow}</span>
            <div className={theme === 'dark' ? 'flex gap-3 mt-1 text-xl text-gray-300' : 'flex gap-3 mt-1 text-xl text-gray-600'}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-red-600"><i className="fab fa-instagram"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-red-600"><i className="fab fa-facebook"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-red-600"><i className="fab fa-linkedin"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red-600"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        {/* Order Now */}
        <div className="flex flex-col items-center md:items-start md:justify-center w-full">
          <h3 className="text-red-700 font-semibold mb-2 md:text-2xl text-lg text-center md:text-left">{translations[language].orderNow}</h3>
          <p className={theme === 'dark' ? 'text-gray-300 text-sm mb-4 md:text-base' : 'text-gray-700 text-sm mb-4 md:text-base'}>{translations[language].orderDesc}</p>
          <a href="/contactus" className="bg-red-600 text-white px-8 md:px-14 py-2 md:py-3 rounded-lg font-semibold shadow hover:bg-red-700 transition w-auto text-center md:text-lg whitespace-nowrap">{translations[language].orderNow}</a>
        </div>
      </div>
      <div className={theme === 'dark' ? 'border-t text-center text-gray-400 text-xs py-4' : 'border-t text-center text-gray-500 text-xs py-4'}>
        <div className="flex flex-row md:flex-row justify-center gap-4 mb-2">
          <a href="#" className="hover:text-red-600">{translations[language].privacy}</a>
          <a href="#" className="hover:text-red-600">{translations[language].terms}</a>
          <a href="#" className="hover:text-red-600">{translations[language].disclaimer}</a>
        </div>
        ©️ 2025 Foodify. {translations[language].copyright}
      </div>
    </footer>
  );
}