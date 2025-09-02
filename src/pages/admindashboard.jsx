import { useState, useEffect } from "react";
// Translation object for all admin dashboard text
const translations = {
  en: {
    userSignup: "User Signup Details",
    sno: "S.No",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    signupTime: "Signup Time",
    signupDate: "Signup Date",
    noUsers: "No user signup details found.",
    revenue: "Revenue Overview (Weekly)",
    popularDishes: "Popular Dishes",
    reservations: "Reservations by Time",
    customerGrowth: "Customer Growth (Monthly)",
    deals: "Deals Performance",
  },
  ar: {
    userSignup: "تفاصيل تسجيل المستخدمين",
    sno: "م.ت",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    email: "البريد الإلكتروني",
    signupTime: "وقت التسجيل",
    signupDate: "تاريخ التسجيل",
    noUsers: "لا توجد تفاصيل تسجيل مستخدمين.",
    revenue: "نظرة عامة على الإيرادات (أسبوعي)",
    popularDishes: "الأطباق الأكثر شعبية",
    reservations: "الحجوزات حسب الوقت",
    customerGrowth: "نمو العملاء (شهري)",
    deals: "أداء العروض",
  },
  he: {
    userSignup: "פרטי הרשמת משתמשים",
    sno: "מס' סידורי",
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    email: "אימייל",
    signupTime: "שעת הרשמה",
    signupDate: "תאריך הרשמה",
    noUsers: "לא נמצאו פרטי הרשמת משתמשים.",
    revenue: "סקירת הכנסות (שבועי)",
    popularDishes: "מנות פופולריות",
    reservations: "הזמנות לפי שעה",
    customerGrowth: "צמיחת לקוחות (חודשי)",
    deals: "ביצועי מבצעים",
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
import clsx from "clsx";
import Header from "../components/Header";
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  AreaChart,
  Area,
} from "recharts";
const revenueData = [
    { day: "Mon", revenue: 2000 },
    { day: "Tue", revenue: 3000 },
    { day: "Wed", revenue: 2500 },
    { day: "Thu", revenue: 4000 },
    { day: "Fri", revenue: 5000 },
    { day: "Sat", revenue: 6500 },
    { day: "Sun", revenue: 3000 },
  ];

  const ordersData = [
    { dish: "Pizza", orders: 120 },
    { dish: "Biryani", orders: 95 },
    { dish: "Pasta", orders: 70 },
    { dish: "Salad", orders: 40 },
  ];

  const reservationsData = [
    { time: "6 PM", tables: 5 },
    { time: "7 PM", tables: 8 },
    { time: "8 PM", tables: 10 },
    { time: "9 PM", tables: 6 },
  ];

  const customersData = [
    { month: "Jan", customers: 400 },
    { month: "Feb", customers: 450 },
    { month: "Mar", customers: 500 },
    { month: "Apr", customers: 600 },
  ];

  const feedbackData = [
    { name: "Positive", value: 70 },
    { name: "Neutral", value: 20 },
    { name: "Negative", value: 10 },
  ];
  const COLORS = ["#22c55e", "#eab308", "#ef4444"];

  const dealsData = [
    { deal: "Happy Hours", redemptions: 120 },
    { deal: "Burger Combo", redemptions: 80 },
    { deal: "Pizza Friday", redemptions: 150 },
  ];

export default function UserDetailsSection() {
  // Language state synced with Header
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'English';
    }
    return 'English';
  });
  const [language, setLanguage] = useState(langMap[selectedLanguage] || 'en');
  useEffect(() => {
    const handleLangChange = () => {
      const newLang = localStorage.getItem('selectedLanguage') || 'English';
      setSelectedLanguage(newLang);
      setLanguage(langMap[newLang] || 'en');
    };
    window.addEventListener('language-changed', handleLangChange);
    window.addEventListener('storage', handleLangChange);
    return () => {
      window.removeEventListener('language-changed', handleLangChange);
      window.removeEventListener('storage', handleLangChange);
    };
  }, []);
  // Set RTL/LTR direction
  const dir = language === 'ar' || language === 'he' ? 'rtl' : 'ltr';
  // Theme state
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  useEffect(() => {
    const syncTheme = () => setTheme(localStorage.getItem("theme") || "light");
    window.addEventListener("storage", syncTheme);
    window.addEventListener("theme-changed", syncTheme);
    return () => {
      window.removeEventListener("storage", syncTheme);
      window.removeEventListener("theme-changed", syncTheme);
    };
  }, []);

  // NOTE: In your theme toggle logic (e.g., in Header), after updating localStorage, add:
  // window.dispatchEvent(new Event("themeChanged"));
  // Remove a blog (same logic as webinars)
  const handleRemoveBlog = (idx) => {
    const newBlogs = blogs.filter((_, i) => i !== idx);
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    setBlogs(newBlogs);
    setEditIdx(null);
  };

  // Start editing a blog (same logic as webinars)
  const handleEditBlog = (idx) => {
    setEditIdx(idx);
    const b = blogs[idx];
    setEditForm({
      title: b.title || '',
      image: b.image || '',
      author: b.author || '',
      description: b.description || ''
    });
  };

  // Save edited blog (same logic as webinars)
  const handleBlogEditSave = (idx) => {
    if (!editForm.title || !editForm.image || !editForm.author || !editForm.description) return;
    const newBlogs = blogs.map((b, i) => i === idx ? { ...editForm, createdAt: b.createdAt } : b);
    setBlogs(newBlogs);
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    setEditIdx(null);
  };
  const [editIdx, setEditIdx] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', date: '', time: '', description: '' });
  const [webinarRegistrations, setWebinarRegistrations] = useState([]);
  const [webinars, setWebinars] = useState([]);
  const [webinarForm, setWebinarForm] = useState({ title: '', date: '', time: '', description: '' });

  const [signupDetails, setSignupDetails] = useState([]);
  const [instructorDetails, setInstructorDetails] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [blogForm, setBlogForm] = useState({ title: '', image: '', author: '', description: '' });

  // Prepare data for signup graph (signups per day)
  
  // Prepare data for instructor graph (instructors per expertise)
  

  useEffect(() => {
    // Fetch all admin data from localStorage
    const fetchDetails = () => {
      const storedUsers = localStorage.getItem("users");
      setSignupDetails(storedUsers ? JSON.parse(storedUsers) : []);
    
    };
    fetchDetails();
    window.addEventListener("storage", fetchDetails);
    return () => window.removeEventListener("storage", fetchDetails);
  }, []);

 


  return (

    <div dir={dir} className={clsx(
      "min-h-screen w-full",
      theme === "dark" ? "bg-[#10141c] text-white" : "bg-[#f6fafd] text-[#22223b]"
    )}>
      <Header />

      {/* User Signup Table Section */}
      <div className={clsx(
        "rounded-xl shadow p-6 mt-16 bg-white text-black border border-red-500"
      )}>
        <h2 className="text-2xl font-bold mb-4 text-red-600">{translations[language].userSignup}</h2>
        {signupDetails.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full border rounded-lg border-red-500">
              <thead className="bg-red-500 text-white">
                <tr>
                  <th className="px-4 py-2 text-center">{translations[language].sno}</th>
                  <th className="px-4 py-2 text-center">{translations[language].firstName}</th>
                  <th className="px-4 py-2 text-center">{translations[language].lastName}</th>
                  <th className="px-4 py-2 text-center">{translations[language].email}</th>
                  <th className="px-4 py-2 text-center">{translations[language].signupTime}</th>
                  <th className="px-4 py-2 text-center">{translations[language].signupDate}</th>
                </tr>
              </thead>
              <tbody>
                {signupDetails.map((user, idx) => (
                  <tr key={user.email || idx} className="border-b border-red-200">
                    <td className="px-4 py-2 text-center">{idx + 1}</td>
                    <td className="px-4 py-2 text-center">{user.firstName}</td>
                    <td className="px-4 py-2 text-center">{user.lastName}</td>
                    <td className="px-4 py-2 text-center">{user.email}</td>
                    <td className="px-4 py-2 text-center">{user.signupTime}</td>
                    <td className="px-4 py-2 text-center">{user.signupDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">{translations[language].noUsers}</p>
        )}
      </div>


  <div className="max-w-7xl mx-auto p-6 space-y-12">
        {/* 1. Revenue Overview */}
        <div className="p-6 rounded-2xl shadow bg-white text-black border border-red-500">
          <h2 className="text-xl font-semibold mb-4 text-red-600">{translations[language].revenue}</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis label={{ value: translations[language].revenue, angle: -90, position: 'insideLeft', fill: '#ef4444', fontSize: 14 }} />
              <Tooltip 
                formatter={(value, name) => [value, translations[language].revenue]}
                labelFormatter={label => label}
              />
              <Legend formatter={() => <span style={{ color: '#ef4444' }}>{translations[language].revenue}</span>} />
              <Line type="monotone" dataKey="revenue" stroke="#ef4444" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 2. Popular Dishes */}
        <div className="p-6 rounded-2xl shadow bg-white text-black border border-red-500">
          <h2 className="text-xl font-semibold mb-4 text-red-600">{translations[language].popularDishes}</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ordersData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dish" />
              <YAxis label={{ value: translations[language].popularDishes, angle: -90, position: 'insideLeft', fill: '#ef4444', fontSize: 14 }} />
              <Tooltip 
                formatter={(value, name) => [value, translations[language].popularDishes]}
                labelFormatter={label => label}
              />
              <Legend formatter={() => <span style={{ color: '#ef4444' }}>{translations[language].popularDishes}</span>} />
              <Bar dataKey="orders" fill="#ef4444" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 3. Reservations Trend & 4. Customer Growth */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Reservations Trend */}
          <div className="p-6 rounded-2xl shadow bg-white text-black border border-red-500">
            <h2 className="text-xl font-semibold mb-4 text-red-600">{translations[language].reservations}</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={reservationsData}>
                <defs>
                  <linearGradient id="colorTables" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" />
                <YAxis label={{ value: translations[language].reservations, angle: -90, position: 'insideLeft', fill: '#ef4444', fontSize: 14 }} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip 
                  formatter={(value, name) => [value, translations[language].reservations]}
                  labelFormatter={label => label}
                />
                <Legend formatter={() => <span style={{ color: '#ef4444' }}>{translations[language].reservations}</span>} />
                <Area type="monotone" dataKey="tables" stroke="#ef4444" fill="url(#colorTables)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
           
          <div className="p-6 rounded-2xl shadow bg-white text-black border border-red-500">
            <h2 className="text-xl font-semibold mb-4 text-red-600">{translations[language].customerGrowth}</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={customersData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis label={{ value: translations[language].customerGrowth, angle: -90, position: 'insideLeft', fill: '#ef4444', fontSize: 14 }} />
                <Tooltip 
                  formatter={(value, name) => [value, translations[language].customerGrowth]}
                  labelFormatter={label => label}
                />
                <Legend formatter={() => <span style={{ color: '#ef4444' }}>{translations[language].customerGrowth}</span>} />
                <Line type="monotone" dataKey="customers" stroke="#ef4444" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 6. Deals Performance */}
        <div className="p-6 rounded-2xl shadow bg-white text-black border border-red-500">
          <h2 className="text-xl font-semibold mb-4 text-red-600">{translations[language].deals}</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dealsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="deal" />
              <YAxis label={{ value: translations[language].deals, angle: -90, position: 'insideLeft', fill: '#ef4444', fontSize: 14 }} />
              <Tooltip 
                formatter={(value, name) => [value, translations[language].deals]}
                labelFormatter={label => label}
              />
              <Legend formatter={() => <span style={{ color: '#ef4444' }}>{translations[language].deals}</span>} />
              <Bar dataKey="redemptions" fill="#ef4444" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
     </div>
  );
}
