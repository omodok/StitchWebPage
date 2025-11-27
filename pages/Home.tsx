import React from 'react';
import { Users, GraduationCap, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="relative w-full px-4 md:px-8 py-6">
        <div 
          className="w-full min-h-[500px] md:h-[600px] rounded-2xl overflow-hidden relative flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(17, 25, 33, 0.5), rgba(17, 25, 33, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDb8xPhh0bJGX0M2J7W-vBLKrsHAtrBHZdn5bn6m37H43bvrdrRPZ0VGoP0NfNoTMEOTcOMgxJODd9kPG1zQDCgYEImMEfFSyLVbPMo404dzc5StmY7r0KBS_C-9hwI4Rnf-qJA3JBqt3baObhEmz4rjlYBuOfGkhrFckmHV3kCt8XVvrMrNf-5_MfHdHmFkk6E3bOe1X5a6czvgiAnrTDEio9BwrP6YdRc1JvPNGsIk-wSvsGiLbY6qH7noV5szwvir6FkUC11OIE")`
          }}
        >
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
              本気で学ぶ、<br className="sm:hidden"/>未来のスキルを、ここで。
            </h1>
            <p className="text-slate-100 text-base md:text-lg mb-8 max-w-2xl font-medium">
              少人数制パソコン教室「オモドック・スクール」で、<br className="sm:hidden"/>3DCGとプログラミングのプロフェッショナルを目指そう。
            </p>
            <Link 
              to="/contact"
              className="bg-[#197fe6] hover:bg-[#156ac0] text-white text-lg font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              無料相談はこちら
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-slate-900 text-3xl md:text-4xl font-bold mb-4">
              なぜオモドックが選ばれるのか？
            </h2>
            <p className="text-slate-600">
              私たちは一人ひとりの成長に寄り添う、本格的な学びの場を提供します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Users size={40} />, 
                title: "少人数制", 
                desc: "講師が一人ひとりに目を配り、きめ細やかな指導を実現します。" 
              },
              { 
                icon: <GraduationCap size={40} />, 
                title: "通学制", 
                desc: "仲間と切磋琢磨しながら、モチベーションを高く保てます。" 
              },
              { 
                icon: <Award size={40} />, 
                title: "本格的", 
                desc: "現場で通用する、本物のスキルを基礎から応用まで学べます。" 
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#197fe6] mb-6 p-4 bg-blue-50 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Intro */}
      <section className="py-16 px-4 md:px-8 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-slate-900 text-3xl font-bold mb-4">コース紹介</h2>
            <p className="text-slate-600">あなたの「なりたい」を叶える2つの専門コースをご用意しています。</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Link to="/courses" className="group cursor-pointer">
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all h-full">
                <div 
                  className="w-full aspect-video bg-cover bg-center rounded-xl mb-6 group-hover:scale-[1.02] transition-transform duration-500"
                  style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDoMAtQ7M8KTaVWHt1nZY0bsnCdEwhKHcezc9BNldkrLP2_hhNg4tTmdvOUkJaC-Op6n9BjLAPSS7DqaCACbHNS5rOD_TKR2LuWn4EDwJ5QgGiEEtN5X56ciNkrnO3nr0tGkRhcBI0K1QNeScKK-agJHOm49-LLyq7Z1U_3a8J7GIC_0p7hdo95FH766ZbjH3jO-LYb6SO0DsPbCwfmi5xhvTqGszj3GqqbtvwMSs2JJwoPjgPoeeArnRi0DmT5pfxlbZANuqDIcaA")` }}
                ></div>
                <div className="px-2 pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-slate-900">3DCGデザインコース</h3>
                    <ChevronRight className="text-[#197fe6] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-slate-600">想像をカタチにする。ゲームや映像業界で活躍するクリエイターへ。</p>
                </div>
              </div>
            </Link>

            <Link to="/courses" className="group cursor-pointer">
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all h-full">
                <div 
                  className="w-full aspect-video bg-cover bg-center rounded-xl mb-6 group-hover:scale-[1.02] transition-transform duration-500"
                  style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXY56OJEGBn8FHIpAY8fHGVUYyqxcYHGXyrIGn0vLQk3fnSUPPJb3R1AAyItfKITP4e3Ypn_VNDoVEGVtNz-NIWUlzVXH3IA-n93-Wkui2rolk6c0M-jlE0t_ycyie8MlsInr4cEDTdh0D9LFAyZAX0Evp05VHeroQtzCkK7jKn0LuQO7AT9IrjCtv-dskbyCXkAbr13LJmVtEaNmf2iKNN-FOn-0vuiiM3q0EBPnAv3w83oRxRfHDBpgRqWc4dIHVaH5YscO2pUY")` }}
                ></div>
                <div className="px-2 pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-slate-900">プログラミング言語コース</h3>
                    <ChevronRight className="text-[#197fe6] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-slate-600">論理的思考を武器にする。Webサービスやアプリを開発するエンジニアへ。</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-slate-100 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            まずは一歩、踏み出してみませんか？
          </h2>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed">
            あなたのキャリアに関するお悩みや学習プランについて、専門のカウンセラーが親身にお伺いします。無理な勧誘は一切ありませんので、お気軽にご相談ください。
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-[#197fe6] hover:bg-[#156ac0] text-white font-bold py-4 px-10 rounded-xl transition-colors shadow-md"
          >
            無料相談を予約する
          </Link>
        </div>
      </section>
    </div>
  );
};
