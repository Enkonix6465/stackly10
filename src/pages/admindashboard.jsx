import { useState, useEffect } from "react";
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
    <div className={clsx(
      "min-h-screen w-full",
      theme === "dark" ? "bg-[#10141c] text-white" : "bg-[#f6fafd] text-[#22223b]"
    )}>
      <Header />

      {/* User Signup Table Section */}
      <div className={clsx(
        "rounded-xl shadow p-6 mt-16 bg-white text-black border border-red-500"
      )}>
        <h2 className="text-2xl font-bold mb-4 text-red-600">User Signup Details</h2>
        {signupDetails.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full border rounded-lg border-red-500">
              <thead className="bg-red-500 text-white">
                <tr>
                  <th className="px-4 py-2 text-center">S.No</th>
                  <th className="px-4 py-2 text-center">First Name</th>
                  <th className="px-4 py-2 text-center">Last Name</th>
                  <th className="px-4 py-2 text-center">Email</th>
                  <th className="px-4 py-2 text-center">Signup Time</th>
                  <th className="px-4 py-2 text-center">Signup Date</th>
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
          <p className="text-gray-500">No user signup details found.</p>
        )}
      </div>


  <div className="max-w-7xl mx-auto p-6 space-y-12">
        {/* 1. Revenue Overview */}
        <div className="p-6 rounded-2xl shadow bg-white text-black border border-red-500">
          <h2 className="text-xl font-semibold mb-4 text-red-600">Revenue Overview (Weekly)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#ef4444" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 2. Popular Dishes */}
        <div className="p-6 rounded-2xl shadow bg-white text-black border border-red-500">
          <h2 className="text-xl font-semibold mb-4 text-red-600">Popular Dishes</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ordersData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dish" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#ef4444" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 3. Reservations Trend & 4. Customer Growth */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Reservations Trend */}
          <div className="p-6 rounded-2xl shadow bg-white text-black border border-red-500">
            <h2 className="text-xl font-semibold mb-4 text-red-600">Reservations by Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={reservationsData}>
                <defs>
                  <linearGradient id="colorTables" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="tables" stroke="#ef4444" fill="url(#colorTables)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
           
          <div className="p-6 rounded-2xl shadow bg-white text-black border border-red-500">
            <h2 className="text-xl font-semibold mb-4 text-red-600">Customer Growth (Monthly)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={customersData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="customers" stroke="#ef4444" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 6. Deals Performance */}
        <div className="p-6 rounded-2xl shadow bg-white text-black border border-red-500">
          <h2 className="text-xl font-semibold mb-4 text-red-600">Deals Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dealsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="deal" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="redemptions" fill="#ef4444" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
     </div>
  );
}
