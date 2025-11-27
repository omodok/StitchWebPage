import React from 'react';
import { Hexagon } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-slate-900">スクールについて</h3>
          <Link to="/about" className="text-slate-500 hover:text-[#197fe6] text-sm">オモドックの強み</Link>
          <Link to="/about" className="text-slate-500 hover:text-[#197fe6] text-sm">講師紹介</Link>
          <a href="#" className="text-slate-500 hover:text-[#197fe6] text-sm">卒業生の声</a>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-slate-900">コース</h3>
          <Link to="/courses" className="text-slate-500 hover:text-[#197fe6] text-sm">3DCGデザイン</Link>
          <Link to="/courses" className="text-slate-500 hover:text-[#197fe6] text-sm">プログラミング</Link>
          <a href="#" className="text-slate-500 hover:text-[#197fe6] text-sm">料金プラン</a>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-slate-900">サポート</h3>
          <a href="#" className="text-slate-500 hover:text-[#197fe6] text-sm">よくある質問</a>
          <Link to="/about" className="text-slate-500 hover:text-[#197fe6] text-sm">アクセス</Link>
          <Link to="/contact" className="text-slate-500 hover:text-[#197fe6] text-sm">お問い合わせ</Link>
        </div>
        <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 text-slate-900">
             <div className="text-[#197fe6]">
              <Hexagon fill="currentColor" className="w-6 h-6" />
            </div>
            <h2 className="font-bold">オモドック・スクール</h2>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            〒123-4567<br />
            東京都千代田区丸の内1-2-3<br />
            info@omodoc.school
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-100 text-center text-xs text-slate-400">
        <p>© 2024 Omodoc School. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
