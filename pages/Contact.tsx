import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(step < 3) {
      setStep(step + 1);
      window.scrollTo(0,0);
    } else {
      alert("送信しました！");
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 sm:p-12">
        {/* Breadcrumb */}
        <div className="flex gap-2 text-sm text-slate-500 mb-8">
          <span>ホーム</span>
          <span>/</span>
          <span className="text-[#197fe6] font-medium">お問い合わせ・お申し込み</span>
        </div>

        {/* Title */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">お問い合わせ・お申し込み</h1>
          <p className="text-slate-600 leading-relaxed">
            体験入学、講座へのお申し込み、資料請求はこちらのフォームより承ります。お気軽にお問い合わせください。
          </p>
        </div>

        {/* Steps */}
        <div className="relative mb-12">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
          <div 
            className="absolute top-1/2 left-0 h-0.5 bg-[#197fe6] -translate-y-1/2 z-0 transition-all duration-500 ease-out"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          ></div>
          
          <div className="relative z-10 flex justify-between">
            {[
              { num: 1, label: '入力' },
              { num: 2, label: '確認' },
              { num: 3, label: '完了' }
            ].map((s) => (
              <div key={s.num} className="flex flex-col items-center gap-2">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                    step >= s.num ? 'bg-[#197fe6] text-white' : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {s.num}
                </div>
                <span className={`text-sm font-bold ${step >= s.num ? 'text-[#197fe6]' : 'text-slate-400'}`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Inquiry Type */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-6">ご希望の項目を選択してください</h2>
            <div className="flex flex-col sm:flex-row gap-2 bg-slate-50 p-2 rounded-xl">
              {[
                { id: 'trial', label: '体験入学に申し込む' },
                { id: 'course', label: '講座に申し込む' },
                { id: 'materials', label: '資料を請求する' }
              ].map((type) => (
                <label key={type.id} className="flex-1 cursor-pointer">
                  <input type="radio" name="type" value={type.id} className="peer sr-only" defaultChecked={type.id === 'trial'} />
                  <div className="w-full h-full flex items-center justify-center py-3 rounded-lg text-sm font-bold text-slate-500 peer-checked:bg-white peer-checked:text-[#197fe6] peer-checked:shadow-sm transition-all">
                    {type.label}
                  </div>
                </label>
              ))}
            </div>
          </section>

          {/* Basic Info */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-6">基本情報</h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  保護者/ご本人様のお名前 <span className="ml-2 text-xs text-[#F5A623] bg-orange-50 px-2 py-0.5 rounded">必須</span>
                </label>
                <input required type="text" placeholder="山田 太郎" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#197fe6] focus:ring-2 focus:ring-[#197fe6]/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  メールアドレス <span className="ml-2 text-xs text-[#F5A623] bg-orange-50 px-2 py-0.5 rounded">必須</span>
                </label>
                <input required type="email" placeholder="example@omodoc.jp" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#197fe6] focus:ring-2 focus:ring-[#197fe6]/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  電話番号 <span className="ml-2 text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded">任意</span>
                </label>
                <input type="tel" placeholder="090-1234-5678" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#197fe6] focus:ring-2 focus:ring-[#197fe6]/20 outline-none transition-all" />
              </div>
            </div>
          </section>

          {/* Details */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-6">詳細情報</h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  希望コース <span className="ml-2 text-xs text-[#F5A623] bg-orange-50 px-2 py-0.5 rounded">必須</span>
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#197fe6] focus:ring-2 focus:ring-[#197fe6]/20 outline-none appearance-none bg-white">
                    <option>選択してください</option>
                    <option>3DCGデザインコース</option>
                    <option>プログラミング言語コース</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  希望日時 <span className="ml-2 text-xs text-[#F5A623] bg-orange-50 px-2 py-0.5 rounded">必須</span>
                </label>
                <input required type="date" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#197fe6] focus:ring-2 focus:ring-[#197fe6]/20 outline-none transition-all" />
              </div>
            </div>
          </section>

          {/* Message */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-6">ご質問・ご要望</h2>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                ご質問や相談したいことがあればご記入ください <span className="ml-2 text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded">任意</span>
              </label>
              <textarea rows={5} placeholder="例：小学生の子供でも参加できるコースはありますか？" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#197fe6] focus:ring-2 focus:ring-[#197fe6]/20 outline-none transition-all"></textarea>
            </div>
          </section>

          {/* Submit */}
          <div className="pt-6 space-y-6">
            <div className="flex items-center justify-center gap-2">
              <input type="checkbox" id="privacy" className="w-4 h-4 text-[#197fe6] rounded border-slate-300 focus:ring-[#197fe6]" />
              <label htmlFor="privacy" className="text-sm text-slate-600 font-bold">
                <a href="#" className="text-[#197fe6] hover:underline">プライバシーポリシー</a>に同意する
              </label>
            </div>
            <div className="text-center">
              <button type="submit" className="w-full max-w-sm bg-[#197fe6] hover:bg-[#156ac0] text-white font-bold py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                入力内容を確認する
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
