import{j as a,H as x,S as d,m as s,q as c,F as p,a as m}from"./index-WrKJFzL9.js";const b=`
  .font-garamond { font-family: 'Cormorant Garamond', serif; }

  .glass-card-colorful {
    background: rgba(255, 255, 255, 0.65);
    backdrop-filter: blur(25px) saturate(180%);
    -webkit-backdrop-filter: blur(25px) saturate(180%);
    border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.5));
    box-shadow: 0 10px 30px -10px var(--glass-shadow, rgba(139, 26, 74, 0.05)),
                inset 0 0 0 1px rgba(255, 255, 255, 0.8);
    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }

  .glass-card-colorful:hover {
    transform: translateY(-6px);
    border-color: var(--glass-border-hover, rgba(139, 26, 74, 0.25));
    box-shadow: 0 20px 40px -10px var(--glass-shadow-hover, rgba(139, 26, 74, 0.15)),
                inset 0 0 0 1px rgba(255, 255, 255, 0.9);
    background: rgba(255, 255, 255, 0.85);
  }

  .dark-glass-card {
    background: rgba(45, 58, 74, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }

  .animate-pulse-slow {
    animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.12; transform: scale(1); }
    50% { opacity: 0.22; transform: scale(1.08); }
  }
`;function u({seoTitle:t,seoDescription:e,badge:r,title:l,subtitle:o,children:i,wide:n=!1}){return a.jsxs(a.Fragment,{children:[a.jsxs(x,{children:[a.jsx("title",{children:t}),a.jsx("meta",{name:"description",content:e}),a.jsx("style",{children:b})]}),a.jsxs("div",{className:"min-h-screen bg-[#FFF9FA] text-[#1A202C] selection:bg-[#8B1A4A] selection:text-white relative overflow-hidden pb-12",children:[a.jsx(d,{}),a.jsx("div",{className:"absolute top-[120px] -left-[100px] w-[400px] h-[400px] rounded-full bg-[#8B1A4A] opacity-10 blur-[130px] pointer-events-none animate-pulse-slow"}),a.jsx("div",{className:"absolute top-[500px] -right-[150px] w-[500px] h-[500px] rounded-full bg-[#2D3A4A] opacity-5 blur-[160px] pointer-events-none"}),a.jsx("div",{className:"absolute bottom-[200px] left-[5%] w-[350px] h-[350px] rounded-full bg-[#8B1A4A] opacity-[0.06] blur-[110px] pointer-events-none animate-pulse-slow"}),a.jsxs("div",{className:`${n?"max-w-[1600px] px-6 lg:px-12":"max-w-7xl px-6"} mx-auto pt-32 lg:pt-40 relative z-10`,children:[l&&a.jsxs("section",{className:"text-center max-w-4xl mx-auto mb-16 md:mb-20",children:[r&&a.jsxs(s.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.8},style:{"--glass-border":"rgba(139, 26, 74, 0.2)","--glass-shadow":"rgba(139, 26, 74, 0.05)"},className:"inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-colorful mb-6 shadow-sm",children:[a.jsx(c,{className:"w-4 h-4 text-[#8B1A4A]"}),a.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.25em] text-[#8B1A4A]",children:r})]}),a.jsx(s.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.1},className:"font-garamond text-4xl md:text-6xl font-bold leading-tight mb-6 text-[#1A202C]",children:l}),o&&a.jsx(s.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:"text-[#4A4A4A] text-base md:text-lg leading-relaxed font-light max-w-3xl mx-auto",children:o})]}),i]}),a.jsx(p,{}),a.jsx(m,{})]})]})}function h({title:t,subtitle:e}){return a.jsxs("div",{className:"text-center mb-12 md:mb-16",children:[a.jsx("h2",{className:"font-garamond text-3xl md:text-4xl font-bold mb-4",children:t}),e&&a.jsx("p",{className:"text-[#4A4A4A] text-sm font-light max-w-xl mx-auto",children:e}),a.jsx("div",{className:"w-16 h-[2.5px] bg-[#8B1A4A]/30 mx-auto mt-4"})]})}export{u as P,h as S};
