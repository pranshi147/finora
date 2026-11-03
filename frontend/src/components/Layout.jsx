import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  MessageSquare,
  TrendingUp,
  User,
  LogOut,
  Award,
  DollarSign,
  BarChart3,
  Lock,
  Sun,
  Moon,
  BookOpen,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { getAchievements } from "../utils/achievementManager";

export default function Layout({ children }) {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [showAchievements, setShowAchievements] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigation = [
    {
      name: "Overview",
      href: "/dashboard",
      icon: LayoutDashboard,
      group: "WORKSPACE",
    },
    {
      name: "AI money coach",
      href: "/chat",
      icon: MessageSquare,
      group: "WORKSPACE",
    },
    {
      name: "finora Arena",
      href: "/trading",
      icon: TrendingUp,
      group: "WORKSPACE",
    },
    {
      name: "Spending",
      href: "/expenses",
      icon: DollarSign,
      group: "YOUR MONEY",
    },
    {
      name: "Insights",
      href: "/analytics",
      icon: BarChart3,
      group: "YOUR MONEY",
    },
    {
      name: "Learn & grow",
      href: "/courses",
      icon: BookOpen,
      group: "YOUR MONEY",
    },
    { name: "My profile", href: "/profile", icon: User, group: "ACCOUNT" },
  ];
  const achievements = getAchievements();
  const all = [
    ["🎉", "Getting Started", "Complete the initial questionnaire"],
    ["💬", "First Chat", "Send a message to the AI Coach"],
    ["📈", "First Trade", "Buy a stock or mutual fund"],
    ["💰", "Money Manager", "Add an expense or income entry"],
    ["📚", "Knowledge Seeker", "Finish a micro course lesson"],
    ["🎓", "Learning Master", "Complete 3 micro courses"],
    ["💎", "Diamond Hands", "Grow your portfolio to ₹2,00,000"],
    ["🔥", "Streak Master", "Use finora for 7 consecutive days"],
    ["🎯", "Goal Setter", "Define a savings or investment goal"],
    ["🏆", "Trading Pro", "Complete 50 buy/sell transactions"],
  ];
  const logout = () => {
    ["token", "questionnaireCompleted", "user_id", "user_email"].forEach((k) =>
      localStorage.removeItem(k),
    );
    window.location.assign("/login");
  };
  const sidebar = (
    <div className="finora-sidebar-inner">
      <Link to="/dashboard" className="finora-brand">
        <img src="/finoraLogo.png" alt="" />
        <span>
          finora<span className="brand-dot">.</span>
          <small>YOUR MONEY, IN MOTION</small>
        </span>
      </Link>
      <div className="sidebar-caption">PERSONAL FINANCE</div>
      <nav className="finora-nav">
        {["WORKSPACE", "YOUR MONEY", "ACCOUNT"].map((group) => (
          <div key={group} className="nav-group">
            <p>{group}</p>
            {navigation
              .filter((n) => n.group === group)
              .map((item) => {
                const Icon = item.icon;
                const active = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`finora-nav-link ${active ? "active" : ""}`}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                    {active && (
                      <ChevronRight size={15} className="nav-chevron" />
                    )}
                  </Link>
                );
              })}
          </div>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <div className="sidebar-tip">
          <Sparkles size={17} />
          <div>
            <b>A little progress adds up.</b>
            <span>Build better money habits, one day at a time.</span>
          </div>
        </div>
        <button
          className="finora-nav-link"
          onClick={() => setShowAchievements(true)}
        >
          <Award size={18} />
          <span>Achievements</span>
          <i>{achievements.length}</i>
        </button>
        <button className="finora-nav-link logout-link" onClick={logout}>
          <LogOut size={18} />
          <span>Sign out</span>
        </button>
      </div>
    </div>
  );
  return (
    <div className="finora-app">
      <aside className="finora-sidebar">{sidebar}</aside>
      {mobileOpen && (
        <div className="mobile-backdrop" onClick={() => setMobileOpen(false)}>
          <aside
            className="mobile-sidebar"
            onClick={(e) => e.stopPropagation()}
          >
            {sidebar}
          </aside>
        </div>
      )}
      <main className="finora-main">
        <header className="finora-topbar">
          <button className="mobile-menu" onClick={() => setMobileOpen(true)}>
            ☰
          </button>
          <div className="topbar-breadcrumb">
            Your space <span>/</span>{" "}
            <b>
              {navigation.find((n) => n.href === location.pathname)?.name ||
                "Finora"}
            </b>
          </div>
          <div className="topbar-right">
            <span className="topbar-status">
              <i /> Your financial space
            </span>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              title="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <div className="avatar-chip">F</div>
          </div>
        </header>
        <div className="finora-content">{children}</div>
      </main>
      {showAchievements && (
        <div
          className="finora-modal-backdrop"
          onClick={() => setShowAchievements(false)}
        >
          <section
            className="finora-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-head">
              <div>
                <span className="eyebrow">MILESTONES</span>
                <h2>Your achievements</h2>
                <p>
                  {achievements.length} of {all.length} unlocked. Every step
                  counts.
                </p>
              </div>
              <button onClick={() => setShowAchievements(false)}>✕</button>
            </div>
            <div className="achievement-grid">
              {all.map(([icon, name, req]) => {
                const unlocked = achievements.some((a) => a.name === name);
                return (
                  <div
                    key={name}
                    className={`achievement-tile ${unlocked ? "unlocked" : ""}`}
                  >
                    <span>{icon}</span>
                    <b>{name}</b>
                    <small>{unlocked ? "Unlocked" : req}</small>
                    {!unlocked && <Lock size={13} />}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
