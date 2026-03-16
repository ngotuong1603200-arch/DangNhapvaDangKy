import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPass from "./components/Forgotpass";
import "./App.css";

// ... phần code bên dưới giữ nguyên

function App() {
  const [currentView, setCurrentView] = useState('login');

  // Hàm chuyển đổi màn hình
  const handleSwitchTo = (viewName) => {
    setCurrentView(viewName);
  };

  return (
    <>
      {/* Truyền prop onSwitchTo xuống các component con */}
      {currentView === 'login' && <Login onSwitchTo={handleSwitchTo} />}
      {currentView === 'register' && <Register onSwitchTo={handleSwitchTo} />}
      {currentView === 'forgot' && <ForgotPass onSwitchTo={handleSwitchTo} />}
    </>
  );
}

export default App;