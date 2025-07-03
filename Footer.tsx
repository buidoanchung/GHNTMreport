import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-8 py-4 border-t border-slate-200 shadow-inner">
      <div className="container mx-auto px-4 text-center text-sm text-slate-500">
        <p>
          Liên hệ Ban Dự án: <strong>Bùi Đoàn Chung</strong> (<a href="mailto:chungbd@ghn.vn" className="font-semibold text-blue-600 hover:underline">chungbd@ghn.vn</a>)
        </p>
        <p className="mt-1">&copy; {new Date().getFullYear()} Quản lý Nhân tài & Lãnh đạo GHN </p>
      </div>
    </footer>
  );
};

export default Footer;