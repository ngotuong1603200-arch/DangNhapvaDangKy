import React from 'react';
import './ForgotPass.css';

// Nhận prop onSwitchTo
const ForgotPass = ({ onSwitchTo }) => {
  return (
    <div className="forgot-container">
      <div className="forgot-card">
        
        <div className="left-panel">
          <div className="promo-text">
            <p>Đặt Hàng Nhanh Chóng</p>
            <p>Với 1 Nút Bấm !</p>
          </div>
          
          <div className="logo-placeholder">
            <div className="logo-circle">
              <span className="logo-title">KFT</span>
              <span className="logo-subtitle">THỨC ĂN NHANH<br/>GIAO HÀNG</span>
            </div>
          </div>
        </div>

        <div className="right-panel">
          <h2>Quên mật khẩu ?</h2>
          <p className="description">
            Điền email gắn với tài khoản của bạn để<br />
            nhận đường dẫn thay đổi mật khẩu
          </p>

          <div className="input-group">
            <input type="email" placeholder="email :" />
          </div>

          <button className="continue-btn">Tiếp Tục</button>

          {/* Gọi onSwitchTo('login') */}
          <a href="#" className="back-link" onClick={(e) => { e.preventDefault(); onSwitchTo('login'); }}>
            Quay lại trang đăng nhập
          </a>
        </div>

      </div>
    </div>
  );
};

export default ForgotPass;