import React, { useState } from 'react';
import './Login.css';

// Nhận prop onSwitchTo
const Login = ({ onSwitchTo }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-left">
          <h2>Đặt Hàng Nhanh Chóng<br />Với 1 Nút Bấm !</h2>
          
          <div className="logo-circle">
            <div className="logo-inner">
               <span className="logo-text">KFT</span>
               <span className="logo-subtext">THỨC ĂN NHANH<br/>& GIAO HÀNG</span>
            </div>
          </div>
        </div>

        <div className="login-right">
          <h2 className="form-title">ĐĂNG NHẬP</h2>
          
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label>Tên Đăng Nhập:</label>
              <input type="text" />
            </div>
            
            <div className="input-group">
              <label>Mật Khẩu :</label>
              <div className="password-wrapper">
                <input type={showPassword ? "text" : "password"} />
                <span className="eye-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </span>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Nhớ Mật Khẩu
              </label>
              {/* Gọi onSwitchTo('forgot') */}
              <a href="#" className="forgot-password" onClick={(e) => { e.preventDefault(); onSwitchTo('forgot'); }}>
                Bạn quên mật khẩu ?
              </a>
            </div>

            <button type="submit" className="btn-main-login">Đăng Nhập</button>
          </form>

          <div className="social-login-section">
            <p>Đăng Nhập Bằng</p>
            <button className="btn-facebook">
              Facebook <span className="icon-fb">f</span>
            </button>
            <button className="btn-google">
              Google <span className="icon-gg">G</span>
            </button>
          </div>

          <div className="register-hint">
            {/* Gọi onSwitchTo('register') */}
            Bạn chưa có tài khoản ? <a href="#" onClick={(e) => { e.preventDefault(); onSwitchTo('register'); }}>Đăng Ký</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;