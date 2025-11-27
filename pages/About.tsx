import React from 'react';
import { Users, GraduationCap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 py-10">
        <div 
          className="w-full min-h-[480px] rounded-2xl overflow-hidden relative flex flex-col items-center justify-center text-center p-6 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB85ijEodLSryU0qpOGXh18hwP3jWtG1kGVWcj6koZrsAM2wftEt1E0We880aDHyq_ihM-TP7lQCeq8U8Eg0wYR5-nQxjNxLd--2pjQ2HxKSbooilxIZ-V6DCVKjy97iI51h4-mMfBAitpybWa7xcG22upRWNRF_lzKwtI9QU2TDNFDfgEIk85jfA0_bZ72ZcclLlk3TD8hr_3mJR605epKAsxwyh4CLqGEnppbAixSwNaGZtuCjLvpp-VE_k3JgyWoNc0eN1lAGGk")`
          }}
        >
          <h1 className="text-white text-3xl md:text-5xl font-black mb-4 max-w-4xl leading-tight">
            あなたのペースで学べる、<br className="md:hidden"/>少人数制パソコン教室
          </h1>
          <p className="text-white/90 text-sm md:text-base font-medium max-w-2xl mb-8">
            新大久保駅から徒歩5分。初心者から資格取得まで、一人ひとりに合わせた丁寧な指導で、あなたの「できた！」を応援します。
          </p>
          <Link
            to="/contact"
            className="bg-[#197fe6] hover:bg-[#156ac0] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-transform hover:scale-105"
          >
            無料体験レッスンに申し込む
          </Link>
        </div>
      </section>

      {/* 3 Reasons */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-slate-900 text-3xl font-bold mb-4">
              オモドック・スクールが選ばれる3つの理由
            </h2>
            <p className="text-slate-600">
              私たちは、生徒一人ひとりの目標達成を全力でサポートします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-[#197fe6] mb-4">
                <Users size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">少人数制の丁寧な指導</h3>
              <p className="text-slate-600 text-sm">最大5名までのクラスで、質問しやすく、個別の進捗に合わせた指導が受けられます。</p>
            </div>
            <div className="flex flex-col p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-[#197fe6] mb-4">
                <GraduationCap size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">経験豊富なプロ講師</h3>
              <p className="text-slate-600 text-sm">実務経験豊富な講師が、実践的なスキルを分かりやすく教えます。</p>
            </div>
            <div className="flex flex-col p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-[#197fe6] mb-4">
                <MapPin size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">通いやすい駅チカの立地</h3>
              <p className="text-slate-600 text-sm">新大久保駅から徒歩5分。学校や仕事帰りにも気軽に立ち寄れます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="shrink-0">
            <div 
              className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-cover bg-center shadow-md"
              style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXOvJutA58LSkE3ZIeE_lIDo9r92-EZkw_Y2Fo1pXOl8t6NIIokVNDHtBHW8tVbEF2gDmUoDyTZmNPGa1W0OzbrSk7LM0zyeEG5B4l9IvpR6eHXv5__ldluhNQI3_yQU3T15jjvVavX-53kZ_SneFa9DGctywUoz_a9QYWrfIz-WftGx58qSPpcup6qQm3JIIcoAFzd1H64Vdxnh4MddnuNjduIwsQ_OCk4LuyM0MN8CfhI0f-E2ip4V4Eq7CNkwpJgqm_DetGXyc")` }}
            ></div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">講師紹介：山田 太郎</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              「パソコンが苦手」を「楽しい！」に変えるのが私の役目です。これまで200名以上の生徒さんを指導してきました。一人ひとりの目標や不安に寄り添い、丁寧な指導を心がけています。どんな些細なことでも、気軽に質問してくださいね。
            </p>
            <button className="bg-white border border-slate-200 hover:bg-slate-100 text-slate-900 font-bold py-2 px-6 rounded-lg text-sm transition-colors">
              講師について詳しく
            </button>
          </div>
        </div>
      </section>

      {/* Atmosphere */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">教室の雰囲気</h2>
            <p className="text-slate-600">明るく、集中できる学習環境をご用意しています。</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:h-[500px]">
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDReMPx4ZrCCKJ9du5C-dVbIVS4Dlm_hRfvihdJlIpaeC6bHWTfLeYJGdMAClEjv_fHSXq0aY8mrVqvF3ZWCM2VC_DBhxAxMZAC2siMqGnaUYFahMKgFaTvRLp_h9uJSrN0SYMcYUXwEakWghuBX_ptPXUyCHTbsRoC_5De25lfRbncY3TtiQA_zbFz1UxQNhqfnHDv96yQT7abtHui-1mdjLdhpVytfQopRodT_jbT6JcJ3Z0jrMNyBrNBDYtOoUHKiCaRTQXZ6g0" 
                alt="Students" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="rounded-2xl overflow-hidden relative group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU0orCrFXzs4M9nB2dAlc5nRq9KDVwg2ZkCNAD7YyfDD219hWvwm0a-STkR7yT48pqBR3IQIb1PgKxTDox3Z0Et9DfzSoDCDwM6A2hj9NVqCr5w7bQ180T1LpXldN-kh0d-Cby3yjRAh8kia9YWKvqux-_Pjpz8Q8sKI4AgaHqRe_G4KCfvflKQCyLM68LNb14nvuQmbagm9os1I8jorr2sYy4XF8Gg9Vz5KlsScvPp-BeRofmOe1owqPdzoTJZ5hN8PgrpNvGssM" 
                alt="Typing" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="rounded-2xl overflow-hidden relative group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN10q9ypSA1_0h0K1WECtCoKI26dkt4CTPggtJhrF1m9CTDm7mQBOYUOrBFSET4TyHoqBFXwjg7tEWvoPY7l3BLeTJ80OX1cfQdQ7792SRBA3--SYEAwncUFCldTqJ58Xksr41ZW7ha92fIOe8IDp6EgibAHxeFnQk5gHJKPGC7wOi7WbbqqIAeM77vdc8jng7BJZnFAV6Fg_cDSQzPbC7jqd4stkVHIpAa5F3kWP8rPBzJ7xvPA3Jm0YsB4yyPniXB9RRlEUyiTw" 
                alt="Teaching" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden relative group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAvESpe7PeUyMw5pvM7TINcg2UZ_kH7kUL29K0brBz90QyAGZFi9Pq46moss8BfXRVMB19pTo4e_8-JGcOQM2zZkyFCEb1pAWdr3kMu4KPv7TzN6276N1AylROv1yd86nEEgnN-_YYi1VCwKBWNkNaXBq7bsKgvNoaRTZvyIR3cSWWjWVcX2tIR8amtiup5bTY2vwxSvwtJ1tfQq1oxr87AHjmRcDAijT7grfDhfmdSFfd0e_RNaxUS2a8UWM7OFwBFpa0uzwOGQY" 
                alt="Computers" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="py-12 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">アクセス</h2>
          <p className="text-slate-600 mb-8">JR新大久保駅から徒歩5分。アクセスしやすい便利な立地です。</p>
          <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 flex items-center justify-center">
             <p className="text-slate-400">Google Map would be embedded here</p>
          </div>
        </div>
      </section>
    </div>
  );
};
