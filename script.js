const scene = document.getElementById('scene');
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

// 1. 自動適應視窗尺寸
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// 2. 高級平滑 3D 視差引擎（隨滾動深度動態減弱幅度，確保霸氣擴張時不失控）
// 2. 獨立研發：100% 相容的 JS「超載極速擴張」與 3D 視差複合引擎
document.addEventListener('scroll', () => {
  // 核心改動：將滾動進度乘上 3.5 倍！這代表只要滑動 1/3 個螢幕高度，天鵝就會以 3.5 倍的超高速瞬間完全展翅！
  const rawPercent = window.scrollY / window.innerHeight;
  const scrollPercent = Math.min(rawPercent * 3.5, 1); 
  
  const swanCanvas = document.querySelector('.swan-canvas');
  const cyberRadar = document.querySelector('.cyber-radar');
  const feathers = document.querySelectorAll('.feather');

  if (swanCanvas) {
    // 天鵝極速放大 1.45 倍，並極速往前突起
    const scale = 1 + (scrollPercent * 0.45);
    const translateZ = 40 + (scrollPercent * 160);
    
    // 獨立控制透明度：維持原本滾到第二屏才變半透明的節奏（不乘 3.5 倍），避免天鵝太快消失
    const fadePercent = Math.min(rawPercent, 1);
    const opacity = 0.95 - (fadePercent * 0.8); 
    
    swanCanvas.style.transform = `translateZ(${translateZ}px) scale(${scale})`;
    swanCanvas.style.opacity = opacity;

    // 白金高光也隨之極速撕裂噴發
    if (scrollPercent > 0.1) {
      swanCanvas.style.filter = `drop-shadow(0 0 ${40 + scrollPercent * 45}px rgba(255,255,255,${scrollPercent})) drop-shadow(0 0 40px rgba(139, 92, 246, 0.45))`;
    } else {
      swanCanvas.style.filter = `drop-shadow(0 0 40px rgba(139, 92, 246, 0.45))`;
    }
  }

  if (cyberRadar) {
    // 背景圓盾同步以超高速像衝擊波一樣反向炸裂放大 2.2 倍隨後淡出
    const radarScale = 1 + (scrollPercent * 1.2);
    const radarZ = -120 - (scrollPercent * 180);
    const radarOpacity = 1 - scrollPercent;
    cyberRadar.style.transform = `translateZ(${radarZ}px) scale(${radarScale})`;
    cyberRadar.style.opacity = radarOpacity;
  }

  if (feathers.length > 0) {
    // 每根羽翼的角度以 3.5 倍的速度瞬間「極速開合展翅」！
    feathers.forEach(feather => {
      const baseRot = parseFloat(feather.style.getPropertyValue('--rot')) || 0;
      const baseDepth = parseFloat(feather.style.getPropertyValue('--depth')) || 0;
      const baseYRot = parseFloat(feather.style.getPropertyValue('--y-rot')) || 0;

      const currentRot = baseRot * (1 + scrollPercent * 0.45);
      const currentDepth = baseDepth + (scrollPercent * 50);
      const currentYRot = baseYRot * (1 + scrollPercent * 0.3);

      feather.style.transform = `rotate(${currentRot}deg) translateZ(${currentDepth}px) rotateY(${currentYRot}deg)`;
    });
  }
});



// 3. 升級版狂暴量子粒子引擎
const particles = [];
for (let i = 0; i < 150; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2.2 + 0.6,
    speed: Math.random() * 1.5 + 0.4,
    opacity: Math.random() * 0.6 + 0.2,
    color: Math.random() > 0.5 ? 'rgba(6, 182, 212,' : 'rgba(168, 85, 247,'
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.y -= p.speed; // 能量向上噴發
    if (p.y < 0) {
      p.y = canvas.height;
      p.x = Math.random() * canvas.width;
    }
    
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `${p.color} ${p.opacity})`;
    ctx.fill();
    
    // 大粒子發光特效
    if (p.radius > 1.8) {
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color.includes('6, 182') ? '#06b6d4' : '#a855f7';
    } else {
      ctx.shadowBlur = 0;
    }
  });
  requestAnimationFrame(animate);
}
animate();

// ========================================================
// 【旗艦級多國語系核心 - 自由控制初始語系版】
// ========================================================

// 💡 核心開關：只要改這行！想初始為繁中打 'tw'，想初始為英文打 'en'
let currentLang = 'en'; 

const langData = {
  tw: {
    heroSub: "未來科技創辦人 // 全球工作室前導",
    btnProj: "PROJECTS // 核心專案",
    btnTime: "TIMELINE // 人生集合",
    btnGit: "GITHUB // 技術源碼",
    projTitle: "CORE.PROJECTS // 精選作品庫",
    proj1Desc: "這是專門為未來軟體工作室量身打造的核心分散式架構系統。具備極致的高並發處理能力與 3D 資料視覺化監控面板。",
    proj1Link: "LAUNCH DEPLOY // 線上部署 →",
    proj2Desc: "存放個人開源套件、演算法核心與黑客感網頁動態特效的代碼總部。",
    proj2Link: "VIEW SOURCE // 原始碼 →",
    proj3Desc: "記錄硬核計算機科學的修煉軌跡。深入探討 C 語言記憶體管理、指標操作底層邏輯。",
    proj3Link: "READ NOTES // 閱讀筆記 →",
    timeTitle: "LIFE.NEXUS // 人生進度軌跡",
    time1Tag: "SYS.INIT // 起源",
    time1Title: "輸入代碼世界",
    time1Desc: "chri5w4n 帳號正式啟用。寫下第一行 Hello World，開啟無盡探索。",
    time2Tag: "CORE.LOAD // 沉澱",
    time2Title: "硬核內功修煉",
    time2Desc: "直面 CS50 的洗禮。瘋狂手撕 C 語言、指針與記憶體架構，為未來蓄力。",
    time3Tag: "APEX.LAUNCH // 展翅",
    time3Title: "CYGNUS 軟體公司創辦",
    time3Desc: "正式將技術轉化為商業帝國。這隻末日天鵝在黑客空間中徹底展開機械巨翼。"
  },
  en: {
    heroSub: "FUTURE TECHNOLOGY FOUNDER // GLOBAL STUDIO PREVIEW",
    btnProj: "PROJECTS // CORE CASES",
    btnTime: "TIMELINE // LIFE NEXUS",
    btnGit: "SOURCE // CODEBASE",
    projTitle: "CORE.PROJECTS // PORTFOLIO",
    proj1Desc: "A core distributed architecture built for the future software studio. Featuring ultra-high concurrency handling and a 3D data visualization dashboard.",
    proj1Link: "LAUNCH DEPLOY // LIVE DEMO →",
    proj2Desc: "The central repository hosting personal open-source packages, core algorithms, and cyberpunk web animation systems.",
    proj2Link: "VIEW SOURCE // CODEBASE →",
    proj3Desc: "Documenting the rigorous computer science journey. Deep dive into C memory management and low-level pointer mechanics.",
    proj3Link: "READ NOTES // STUDY LOG →",
    timeTitle: "LIFE.NEXUS // TRAJECTORY",
    time1Tag: "SYS.INIT // ORIGIN",
    time1Title: "Entering the Matrix",
    time1Desc: "The alias chri5w4n was initialized. Executed the first Hello World, embarking on endless exploration.",
    time2Tag: "CORE.LOAD // CONSOLIDATION",
    time2Title: "Deep Grind",
    time2Desc: "Confronting CS50. Mastering C language, pointers, and memory architecture, accumulating potential for the future.",
    time3Tag: "APEX.LAUNCH // FLIGHT",
    time3Title: "CYGNUS Founded",
    time3Desc: "Transforming high-end tech into a business empire. The cybernetic swan fully spreads its massive mecha wings."
  }
};

// 核心功能 A：一鍵更新全站文字與按鈕文字
function updatePageLanguage() {
  const langToggleBtn = document.getElementById('langToggle');
  
  // 依據當前語系，智慧校正右上角按鈕的提示狀態
  if (langToggleBtn) {
    langToggleBtn.innerHTML = currentLang === 'tw' ? '中文' : 'EN';
  }
  
  // 抽換全站 ID 文字
  const currentDict = langData[currentLang];
  for (const id in currentDict) {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.innerHTML = currentDict[id];
    }
  }
}

// 核心功能 B：點擊按鈕時觸發的切換邏輯
window.toggleLanguage = function() {
  currentLang = currentLang === 'tw' ? 'en' : 'tw';
  updatePageLanguage();
};

// 核心功能 C：網頁一打開就立刻全自動對齊初始語系
document.addEventListener('DOMContentLoaded', updatePageLanguage);
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  updatePageLanguage();
}
