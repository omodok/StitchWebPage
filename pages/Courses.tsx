import React, { useState } from 'react';
import { Course } from '../types';

const SAMPLE_COURSES: Course[] = [
  {
    id: '1',
    title: 'Introduction to 3D Modeling with Blender',
    description: 'Learn the fundamentals of 3D modeling from scratch.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTBRPL2BKGLYvQl8HXB7N5hSOkkrOVGhBKK4FAwkgtV__-YdHn1XH_K0i1agiYAlfNsMykSq9U7btxJJ-2Gg0ND64jtXWpi_1BuFSjTJui7DTdMn4Snfh3ygryuAjP0DmfmhASNVHFmMD9TH6xGO-Ey1y7qzNXAplllLUErUuoQPk3smVkJOs__zYyCGnobU5v11qEQTHF36VnTRGL5yDyWSGzTupMscIMUu0XvUVlecggarzdBACFOwHsrI94lFk_WYk6J33relg',
    sessions: 25,
    level: 'Beginner Level',
    category: '3DCG'
  },
  {
    id: '2',
    title: 'Character Design Basics',
    description: 'Bring your own unique characters to life.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeF_l5m-xmhIxwbqDgtbQyBTD8wGQ_kss2jyUvKj2t3ULaPrTvl70yO3lPnltoum6QrIlhBo6M3NAwQYPVhH7f_ZyYrdrTs4yJA2ZewJVFAPSQC0cenv4OT4d6PIc-HDXQXXIXHQIuCQTbBoLhBgT6rAtdUmxEEr4t2o91irxTWn8jAzrfFAVf0N__lvT1sggv2wza1jQknyz_5az0XjnGwLPfn3Kr2qfoQW0I9eN_vSzwMdPFb3YCyG06MPJY5_VMZQyB8wVSXV4',
    sessions: 25,
    level: 'Beginner Level',
    category: '3DCG'
  },
  {
    id: '3',
    title: 'Architectural Visualization',
    description: 'Create stunning, realistic architectural scenes.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANvhnPasxNqjBb0uQo-PBppUeBpjTBVsu9nL_tl2R3LdEBi4fZk9SYT7PBQ7nlPrxWuZl4ChF_Fdf0lZHFbiuNqEXpRq9Hd7EukPMuPFvzx4d4241gV3u3rIljQrkDp0oa-axFzQTrCGKzARnFNWqSMkmJAeOMU_Vb6zDg2XwlhD5UiBfOmsSYtEIuDBO9Ksq0_K8u65e4qpVlirfQLr4nQVNci-YjxsHdx26rWWr83l7LK-HoFVSlg6qcr6URLcjPYq0uX4vluiQ',
    sessions: 25,
    level: 'Intermediate',
    category: '3DCG'
  },
  {
    id: '4',
    title: 'Python for Beginners',
    description: 'Master the basics of this versatile programming language.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqlhuHRIcwu7gIyRHrQcBskVAVVCXzTZjHUFleOkBBso64Yw7peQ2a5Kd4TIk3lyDW6zWSg1OeAzFGUSeWx_MlK4IdjitRzPtYncEkhlWKGktkSODQ3o-koIj3n6KgOQ-8Z1nLbvf76Sm7xtSShk1PYtb44guhMW9fG5ilkd8wZ2YS0JsZbixfvik3OmuvlC-3JRTKkZ2L5vvDW_pMbGIlv8pa8Yw4CIgcanxFLN4LxHVF-a6KV6sYRZX2s2F-FFw1X1V6rIOcLXE',
    sessions: 25,
    level: 'Beginner Level',
    category: 'Programming'
  },
  {
    id: '5',
    title: 'Web Development Fundamentals',
    description: 'Build your first website using HTML, CSS, and JavaScript.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJxhPovvGKN8UlFI8F8GRUi5Jl_doz6gwgi-ccezIL0GzEygAtjfXM8T4q5C6pmiLT19AMeHzNaGqoYR0rltRPbyDOR13auUv7AAUUW5RrRj87PLsUa1NYGZ1vHjRhlq84HftZjOBf4isrNpOwiPcW-CIvQTDLtMfwwzvyyeumXo06WHGfuxclP2PbcuCv7_jkas2mvnpxO0LNwWuO3-GEGmrrBfm4ExpziBBK-EaclXSxCwCjgdE9UQxvhSdnSduMps5KnPegD_g',
    sessions: 25,
    level: 'Beginner Level',
    category: 'Programming'
  },
  {
    id: '6',
    title: 'Intro to Game Development with Unity',
    description: 'Start your journey into creating interactive games.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRapQqLCmjw0BvIii_SeKCLdbk7lXAHT2kO2c6SK9yJBMRA6swqtv-1PwzBk6K_38L2KBLLi1QcPPkMXbf7ncxW4n4sUCdNqGm0h6pFeCDRbQhSn7ayBCFgUR_onNNJKlg5ojhwOeA86qS6hN9oh63NQnJJ6g6jhqKttiQB_Qure0JHG_PjU78AYPdYVYosnivUP7WaGvspRj6DsG5it8YaJuU2nYMa-UQfYNDwtD6PIG7P7Visuv89kEW-n7JVO4pKJu99RAXBEI',
    sessions: 25,
    level: 'Beginner Level',
    category: 'Programming'
  }
];

export const Courses: React.FC = () => {
  const [filter, setFilter] = useState<'All' | '3DCG' | 'Programming'>('All');

  const filteredCourses = filter === 'All' 
    ? SAMPLE_COURSES 
    : SAMPLE_COURSES.filter(c => c.category === filter);

  return (
    <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-10">
          <h1 className="text-slate-900 text-4xl md:text-5xl font-black tracking-tight">
            3DCG & Programming Courses
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            Find the perfect course to start your creative journey in 3DCG design and programming.
          </p>
        </div>

        {/* Filter */}
        <div className="flex mb-10">
          <div className="bg-slate-100 p-1.5 rounded-xl inline-flex gap-1">
            {['All', '3DCG Design', 'Programming'].map((label) => {
              const value = label === 'All' ? 'All' : label === '3DCG Design' ? '3DCG' : 'Programming';
              const isActive = filter === value;
              return (
                <button
                  key={value}
                  onClick={() => setFilter(value as any)}
                  className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    isActive 
                      ? 'bg-white text-slate-900 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="group flex flex-col bg-white border border-slate-200 rounded-2xl p-4 hover:shadow-xl transition-all duration-300">
              <div 
                className="w-full aspect-video bg-cover bg-center rounded-xl mb-4 group-hover:scale-[1.02] transition-transform"
                style={{ backgroundImage: `url("${course.image}")` }}
              ></div>
              <div className="flex-1 flex flex-col gap-2 mb-4">
                <h3 className="text-slate-900 text-lg font-bold leading-tight">{course.title}</h3>
                <p className="text-slate-500 text-sm">{course.description}</p>
                <div className="flex gap-2 mt-auto pt-2">
                  <span className="bg-blue-50 text-[#197fe6] text-xs font-bold px-2.5 py-1 rounded-full">
                    {course.sessions} Sessions
                  </span>
                  <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>
              </div>
              <button className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-bold rounded-lg transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
