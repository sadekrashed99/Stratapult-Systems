/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface Option {
  text: string;
  pts: number;
}

interface Question {
  section: string;
  icon: string;
  sectionIndex: number;
  question: string;
  options: Option[];
}

// 1. QUESTION DATA ARRAY
const QUESTIONS: Question[] = [
    {
      section: 'GETTING FOUND',
      icon: 'search',
      sectionIndex: 1,
      question: 'When someone Googles “emergency [your trade] Melbourne” right now, where do you show up?',
      options: [
        { text: 'Top 3 results — paid ad or organic', pts: 3 },
        { text: 'Page 1, but not in the top 3', pts: 2 },
        { text: 'Page 2 or beyond', pts: 1 },
        { text: 'Honestly, I don’t know', pts: 0 }
      ]
    },
    {
      section: 'GETTING FOUND',
      icon: 'search',
      sectionIndex: 1,
      question: 'What happens when someone visits your website at 11pm on a Saturday?',
      options: [
        { text: 'They can book instantly or get an auto-response within minutes', pts: 3 },
        { text: 'They can fill out a form — I’ll follow up Monday', pts: 1 },
        { text: 'They see my number and can call — that’s it', pts: 1 },
        { text: 'I don’t really have a proper website', pts: 0 }
      ]
    },
    {
      section: 'GETTING FOUND',
      icon: 'search',
      sectionIndex: 1,
      question: 'How many Google reviews do you have, and what’s your rating?',
      options: [
        { text: '50+ reviews at 4.8★ or higher', pts: 3 },
        { text: '20–49 reviews', pts: 2 },
        { text: '1–19 reviews', pts: 1 },
        { text: 'Fewer than 10, or below 4 stars', pts: 0 }
      ]
    },
    {
      section: 'GETTING FOUND',
      icon: 'search',
      sectionIndex: 1,
      question: 'Are you running paid advertising right now?',
      options: [
        { text: 'Yes — active campaigns with tracked ROI', pts: 3 },
        { text: 'Yes, but I’m not really tracking results', pts: 1 },
        { text: 'No — I rely on referrals and organic', pts: 0 },
        { text: 'I tried it once — didn’t really work', pts: 0 }
      ]
    },
    {
      section: 'CAPTURING LEADS',
      icon: 'phone',
      sectionIndex: 2,
      question: 'How fast do you typically respond to a new enquiry or missed call?',
      options: [
        { text: 'Within 5 minutes — every time', pts: 3 },
        { text: 'Within the hour, most of the time', pts: 2 },
        { text: 'Same day when I get a chance', pts: 1 },
        { text: 'When I’m free — could be end of day or next morning', pts: 0 }
      ]
    },
    {
      section: 'CAPTURING LEADS',
      icon: 'phone',
      sectionIndex: 2,
      question: 'When you miss a call, what automatically happens?',
      options: [
        { text: 'An SMS fires within 2 minutes: “Just missed your call — how can I help?”', pts: 3 },
        { text: 'I call back when I see it — usually within a few hours', pts: 1 },
        { text: 'They leave a voicemail and I call back when I can', pts: 0 },
        { text: 'They probably just ring the next person on Google', pts: 0 }
      ]
    },
    {
      section: 'CAPTURING LEADS',
      icon: 'phone',
      sectionIndex: 2,
      question: 'Where do most of your jobs actually come from?',
      options: [
        { text: 'Multiple channels: Google Ads + SEO + referrals + social media', pts: 3 },
        { text: 'Two reliable sources (e.g. referrals + organic Google)', pts: 2 },
        { text: 'Mainly word-of-mouth and referrals', pts: 1 },
        { text: 'Hard to say — it’s pretty random', pts: 0 }
      ]
    },
    {
      section: 'CONVERTING JOBS',
      icon: 'briefcase',
      sectionIndex: 3,
      question: 'What percentage of your quotes turn into actual booked work?',
      options: [
        { text: '70% or more', pts: 3 },
        { text: '50–70%', pts: 2 },
        { text: '30–50%', pts: 1 },
        { text: 'Under 30%, or I don’t track this', pts: 0 }
      ]
    },
    {
      section: 'CONVERTING JOBS',
      icon: 'briefcase',
      sectionIndex: 3,
      question: 'After sending a quote, if you don’t hear back — what happens?',
      options: [
        { text: 'Automated sequence: SMS + email at 24h, 48h, and 72h', pts: 3 },
        { text: 'I personally follow up once or twice', pts: 2 },
        { text: 'I send the quote and wait', pts: 1 },
        { text: 'If they want the job, they’ll call', pts: 0 }
      ]
    },
    {
      section: 'CONVERTING JOBS',
      icon: 'briefcase',
      sectionIndex: 3,
      question: 'Do you know your average job value — and are you actively growing it?',
      options: [
        { text: 'Yes — I know it exactly and I’m working on increasing it', pts: 3 },
        { text: 'Rough idea, but not actively managing it', pts: 1 },
        { text: 'Not really sure what my average job is worth', pts: 0 }
      ]
    },
    {
      section: 'RETAIN & GROW',
      icon: 'refresh-cw',
      sectionIndex: 4,
      question: 'How do you collect Google reviews after a completed job?',
      options: [
        { text: 'Automated — a review request fires to every customer on completion', pts: 3 },
        { text: 'I ask manually when I remember', pts: 1 },
        { text: 'I rely on happy customers to leave one themselves', pts: 0 },
        { text: 'Reviews aren’t really a focus for me', pts: 0 }
      ]
    },
    {
      section: 'RETAIN & GROW',
      icon: 'refresh-cw',
      sectionIndex: 4,
      question: 'Do you have a structured referral system?',
      options: [
        { text: 'Yes — customers and trade partners have a clear incentive to refer', pts: 3 },
        { text: 'I ask happy customers to tell their mates', pts: 1 },
        { text: 'Referrals just happen naturally — no system', pts: 0 }
      ]
    }
  ];

document.addEventListener('DOMContentLoaded', () => {
  const GHL_WEBHOOK_URL = (import.meta as any).env?.VITE_GHL_WEBHOOK_URL || "https://services.leadconnectorhq.com/hooks/placeholder_webhook_url";

  // 2. STATE VARIABLES
  let currentQ = 0;
  let selectedPoints: (number | null)[] = new Array(12).fill(null);
  let selectedIndices: (number | null)[] = new Array(12).fill(null);
  let totalScore = 0;

  // 3. STATE MACHINE
  function showState(stateName: 'intro' | 'question' | 'emailgate' | 'results') {
    const intro = document.getElementById('state-intro');
    const question = document.getElementById('state-question');
    const emailgate = document.getElementById('state-emailgate');
    const results = document.getElementById('state-results');

    [intro, question, emailgate, results].forEach(el => {
      if (el) el.style.display = 'none';
    });

    let target = null;
    if (stateName === 'intro') target = intro;
    else if (stateName === 'question') target = question;
    else if (stateName === 'emailgate') target = emailgate;
    else if (stateName === 'results') target = results;

    if (target) {
      target.style.display = 'block';
    }

    if (typeof (window as any).lucide !== 'undefined') {
      (window as any).lucide.createIcons();
    }
  }

  // 4. LEAK METER UPDATE
  function updateLeakMeter(score: number) {
    const leakPct = ((36 - score) / 36) * 100;
    const estLeak = Math.round((leakPct / 100) * 15000);
    const needleDeg = -90 + (leakPct / 100 * 180);
    
    // Update needles across pages
    ['gauge-needle', 'gauge-needle-gate', 'results-needle'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.style.transition = 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)';
        el.style.transformOrigin = '140px 120px';
        el.style.transform = `rotate(${needleDeg}deg)`;
      }
    });

    // Update mobile sliders
    ['mobile-needle-indicator', 'mobile-needle-indicator-gate'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.left = `${leakPct}%`;
    });
    
    // Update dollar displays
    [
      'leak-dollar', 
      'leak-dollar-gate', 
      'results-leak-amount', 
      'mobile-leak-dollar', 
      'mobile-leak-amount', 
      'mobile-leak-amount-gate'
    ].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '$' + estLeak.toLocaleString();
    });
  }

  // 5. LEAK METER SVG BUILDER
  function buildLeakMeterHTML() {
    return `
      <div class="bg-white dark:bg-[#1C1C1A] border-1.5 border-[#E8E5DF] dark:border-[#2E2E2C] rounded-2xl p-8 shadow-xs flex flex-col items-center">
        <div class="w-full flex justify-center">
          <svg width="260" height="155" viewBox="0 0 280 155" class="w-full overflow-visible">
            <defs>
              <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#1A9080" />
                <stop offset="50%" stop-color="#C9A96E" />
                <stop offset="100%" stop-color="#E8622A" />
              </linearGradient>
            </defs>
            <path d="M 30 120 A 110 110 0 0 1 250 120" fill="none" stroke="#E8E5DF" stroke-width="18" stroke-linecap="round" class="dark:stroke-[#2E2E2C]" />
            <path d="M 30 120 A 110 110 0 0 1 250 120" fill="none" stroke="url(#gaugeGradient)" stroke-width="18" stroke-linecap="round" />
            <text x="25" y="145" fill="#1A9080" font-size="11" font-family="var(--font-sans)" font-weight="700" text-anchor="start">FULL REVENUE</text>
            <text x="255" y="145" fill="#E8622A" font-size="11" font-family="var(--font-sans)" font-weight="700" text-anchor="end">MAJOR LEAK</text>
            <!-- Needle -->
            <g id="gauge-needle" class="origin-[140px_120px]" style="transform: rotate(-90deg); transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);">
              <line x1="140" y1="120" x2="140" y2="20" stroke="#1C1C1A" stroke-width="2.5" stroke-linecap="round" class="dark:stroke-[#F5F2EC]" />
              <circle cx="140" cy="120" r="6" fill="#1C1C1A" class="dark:fill-[#F5F2EC]" />
            </g>
          </svg>
        </div>

        <div class="text-center mt-5">
          <span class="text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 text-[11px] font-sans font-bold tracking-[2px] uppercase">ESTIMATED MONTHLY LEAK</span>
          <div id="leak-dollar" class="text-[#1C1C1A] dark:text-[#F5F2EC] font-display font-bold text-[36px] mt-1 leading-none">$0</div>
        </div>
      </div>
    `;
  }

  // 6. QUESTION RENDERER
  function renderQuestion(index: number) {
    if (!QUESTIONS || !QUESTIONS.length) {
      document.getElementById('state-question').innerHTML = 
        '<p style="color:red;padding:40px">ERROR: QUESTIONS array is empty or undefined</p>';
      return;
    }

    try {
      const q = QUESTIONS[index];
      const progressPct = Math.round((index / 12) * 100);
      
      const optionsHTML = q.options.map((opt, i) => {
        const isSelected = selectedIndices[index] === i;
        const cardClass = isSelected 
          ? 'border-1.5 border-[#1A9080] bg-[rgba(26,144,128,0.08)] dark:bg-[rgba(26,144,128,0.15)] rounded-xl p-4.5 flex items-center gap-4 cursor-pointer transition-all duration-150 select-none answer-option' 
          : 'border-1.5 border-[#E8E5DF] dark:border-[#2E2E2C] rounded-xl p-4.5 flex items-center gap-4 cursor-pointer hover:border-[#1A9080]/50 transition-all duration-150 select-none answer-option';
        
        const circleClass = isSelected 
          ? 'w-5 h-5 rounded-full bg-[#1A9080] flex items-center justify-center shrink-0 text-white radio-circle' 
          : 'w-5 h-5 rounded-full border-1.5 border-[#1C1C1A]/30 dark:border-white/30 flex items-center justify-center shrink-0 transition-all duration-150 radio-circle';
        
        const checkHTML = isSelected ? '<i data-lucide="check" class="w-3 h-3 text-white"></i>' : '';

        return `
          <div class="${cardClass}" data-points="${opt.pts}" data-index="${i}">
            <div class="${circleClass}">${checkHTML}</div>
            <span class="font-sans font-medium text-[15px] sm:text-[16px] text-[#1C1C1A] dark:text-[#F5F2EC]">${opt.text}</span>
          </div>
        `;
      }).join('');
      
      const stateQuestion = document.getElementById('state-question');
      if (stateQuestion) {
        stateQuestion.innerHTML = `
          <!-- Top Progress Bar -->
          <div class="w-full mb-12 flex flex-col">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
              <div class="flex items-center gap-2.5 text-[#1A9080] dark:text-[#22D3EE]">
                <i data-lucide="${q.icon}" class="w-5 h-5"></i>
                <span id="section-label" class="font-sans font-bold text-[13px] tracking-[1.5px] uppercase">${q.section}</span>
              </div>
              <span class="font-sans text-[14px] text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 font-medium" id="question-counter">
                Question <span class="font-bold text-[#1C1C1A] dark:text-[#F5F2EC]">${index + 1}</span> of 12
              </span>
            </div>
            <div class="w-full h-[6px] bg-[#E8E5DF] dark:bg-[#2E2E2C] rounded-full overflow-hidden">
              <div id="progress-bar-fill" class="h-full bg-[#1A9080] rounded-full transition-all duration-300" style="width: ${progressPct}%;"></div>
            </div>
          </div>
  
          <!-- 2-Column Responsive Grid -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start w-full">
            <!-- Column 1 (Left 65%) -->
            <div class="md:col-span-8 flex flex-col relative min-h-[440px]">
              <div id="quiz-question-card" class="bg-white dark:bg-[#1C1C1A] border-1.5 border-[#E8E5DF] dark:border-[#2E2E2C] rounded-2xl p-6 md:p-11 shadow-md relative flex flex-col justify-between min-h-[440px]">
                <div>
                  <div class="flex items-center gap-2 text-[#1C1C1A]/40 dark:text-[#F5F2EC]/40 mb-4">
                    <i data-lucide="${q.icon}" class="w-4 h-4"></i>
                    <span class="font-sans font-semibold text-[11px] tracking-[1px] uppercase">${q.section}</span>
                  </div>
                  
                  <h2 class="font-display font-bold text-[22px] md:text-[26px] text-[#1C1C1A] dark:text-[#F5F2EC] leading-tight mb-8 question-text">
                    ${q.question}
                  </h2>
  
                  <div id="answers-container" class="flex flex-col gap-3.5">
                    ${optionsHTML}
                  </div>
                </div>
  
                <!-- Actions Footer inside card -->
                <div class="flex items-center justify-between border-t border-[#E8E5DF] dark:border-[#2E2E2C] pt-6 mt-8">
                  <!-- Back Button -->
                  ${index > 0 
                    ? `<button id="back-btn" class="flex items-center gap-2 text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 hover:text-[#E8622A] font-sans font-semibold text-[15px] transition-colors cursor-pointer">
                         &larr; Back
                       </button>` 
                    : `<div></div>`
                  }
                  
                  <button id="next-btn" class="bg-[#1C1C1A] dark:bg-[#F5F2EC] hover:bg-[#E8622A] dark:hover:bg-[#E8622A] hover:text-white dark:hover:text-white text-[#F5F2EC] dark:text-[#1C1C1A] font-sans font-bold text-[15px] sm:text-[16px] px-8 py-3.5 rounded-full transition-all duration-200 shadow-xs items-center gap-2 cursor-pointer" style="display: ${selectedPoints[index] !== null ? 'flex' : 'none'};">
                    <span>Next Question</span>
                    &rarr;
                  </button>
                </div>
              </div>
            </div>
  
            <!-- Column 2 (Right 35% - Desktop Sticky Gauge) -->
            <div class="hidden md:block md:col-span-4 sticky top-[110px]">
              ${buildLeakMeterHTML()}
            </div>
          </div>
  
          <!-- Sticky Mini Leak Meter for Mobile Only -->
          <div class="md:hidden bg-white dark:bg-[#1C1C1A] border border-[#E8E5DF] dark:border-[#2E2E2C] rounded-2xl px-5 py-4 sticky top-[72px] z-30 shadow-xs mt-6">
            <div class="flex justify-between items-center mb-2.5">
              <span class="text-[#1C1C1A]/50 dark:text-[#F5F2EC]/50 text-[11px] font-sans font-bold uppercase tracking-[1px]">Est. Monthly Leak:</span>
              <span id="mobile-leak-dollar" class="text-[#E8622A] font-display font-bold text-[22px] leading-none">$0</span>
            </div>
            <div class="relative w-full h-2 bg-[#E8E5DF] dark:bg-[#2E2E2C] rounded-full overflow-visible">
              <div class="absolute inset-0 rounded-full bg-gradient-to-r from-[#1A9080] via-[#C9A96E] to-[#E8622A]"></div>
              <div id="mobile-needle-indicator" class="absolute top-1/2 -translate-y-1/2 w-[16px] h-[16px] bg-white border-[3px] border-[#1C1C1A] rounded-full shadow-md transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1)" style="left: 0%;"></div>
            </div>
          </div>
        `;
      }
      
      // Set active needle smoothly
      const cumulativeScore = selectedPoints.slice(0, index + 1).filter(p => p !== null).reduce((a, b) => a + b, 0);
      updateLeakMeter(cumulativeScore);
  
      if (typeof (window as any).lucide !== 'undefined') {
        (window as any).lucide.createIcons();
      }
      
      // Attach selection handlers via event delegation
      const container = document.getElementById('answers-container');
      if (container) {
        container.addEventListener('click', function(e) {
          const option = (e.target as HTMLElement).closest('.answer-option');
          if (!option) return;
          
          container.querySelectorAll('.answer-option').forEach(el => {
            el.className = 'border-1.5 border-[#E8E5DF] dark:border-[#2E2E2C] rounded-xl p-4.5 flex items-center gap-4 cursor-pointer hover:border-[#1A9080]/50 transition-all duration-150 select-none answer-option';
            const circle = el.querySelector('.radio-circle');
            if (circle) {
              circle.className = 'w-5 h-5 rounded-full border-1.5 border-[#1C1C1A]/30 dark:border-white/30 flex items-center justify-center shrink-0 transition-all duration-150 radio-circle';
              circle.innerHTML = '';
            }
          });
          
          option.className = 'border-1.5 border-[#1A9080] bg-[rgba(26,144,128,0.08)] dark:bg-[rgba(26,144,128,0.15)] rounded-xl p-4.5 flex items-center gap-4 cursor-pointer transition-all duration-150 select-none answer-option';
          const activeCircle = option.querySelector('.radio-circle');
          if (activeCircle) {
            activeCircle.className = 'w-5 h-5 rounded-full bg-[#1A9080] flex items-center justify-center shrink-0 text-white radio-circle';
            activeCircle.innerHTML = '<i data-lucide="check" class="w-3 h-3 text-white"></i>';
          }
          
          const pts = parseInt(option.getAttribute('data-points') || '0', 10);
          const optIndex = parseInt(option.getAttribute('data-index') || '0', 10);
          selectedPoints[currentQ] = pts;
          selectedIndices[currentQ] = optIndex;
          
          saveSessionState();
  
          if (typeof (window as any).lucide !== 'undefined') {
            (window as any).lucide.createIcons();
          }
  
          totalScore = selectedPoints.filter(p => p !== null).reduce((a, b: any) => a + b, 0);
          updateLeakMeter(totalScore);
          
          const nextBtn = document.getElementById('next-btn');
          if (nextBtn) nextBtn.style.display = 'flex';
        });
      }
      
      // Attach Next button listener
      const nextBtn = document.getElementById('next-btn');
      if (nextBtn) {
        nextBtn.addEventListener('click', function() {
          const isLastQ = currentQ === 11;
          const isSectionEnd = [3, 6, 9].includes(currentQ);
          
          if (isLastQ) {
            showState('emailgate');
            attachEmailGateListeners();
          } else if (isSectionEnd) {
            showSectionTransition(currentQ + 1, function() {
              currentQ++;
              renderQuestion(currentQ);
              showState('question');
            });
          } else {
            currentQ++;
            renderQuestion(currentQ);
            showState('question');
          }
        });
      }
  
      // Attach Back button listener
      const backBtn = document.getElementById('back-btn');
      if (backBtn) {
        backBtn.addEventListener('click', function() {
          if (currentQ > 0) {
            currentQ--;
            renderQuestion(currentQ);
          }
        });
      }
    } catch (err: any) {
      console.error(err);
      const stateQuestion = document.getElementById('state-question');
      if (stateQuestion) {
        stateQuestion.innerHTML = `
          <div style="color:white;padding:40px;text-align:center;">
            <p>Quiz error: <span id="quiz-error-msg"></span></p>
          </div>
        `;
        const errMsgEl = document.getElementById('quiz-error-msg');
        if (errMsgEl) {
          errMsgEl.textContent = err.message;
        }
      }
    }
  }

  // 7. SECTION TRANSITION SCREEN
  function showSectionTransition(nextIndex: number, callback: () => void) {
    const nextQ = QUESTIONS[nextIndex];
    const sectionNum = nextIndex === 4 ? 2 : nextIndex === 7 ? 3 : 4;
    
    const stateQuestion = document.getElementById('state-question');
    if (!stateQuestion) {
      callback();
      return;
    }
    
    stateQuestion.innerHTML = `
      <div class="flex flex-col items-center justify-center text-center min-h-[500px] w-full max-w-[680px] mx-auto px-6 py-12 relative animate-fade-in">
        <div id="section-transition-card" class="bg-[#1A9080] rounded-2xl p-8 md:p-16 flex flex-col justify-center items-center text-center text-[#F5F2EC] w-full shadow-lg cursor-pointer transition-transform hover:scale-[1.01] duration-300">
          <div class="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
            <i data-lucide="${nextQ.icon}" class="w-12 h-12 text-[#F5F2EC]"></i>
          </div>
          <span class="font-sans font-medium text-[14px] text-white/70 uppercase tracking-[2px] mb-2">
            Section ${sectionNum} of 4
          </span>
          <h2 class="font-display font-bold text-[32px] md:text-[40px] text-white leading-tight mb-8">
            ${nextQ.section}
          </h2>
          <div class="flex gap-2 justify-center">
            <span class="w-3 h-3 rounded-full bg-[#F5F2EC] opacity-30 animate-bounce" style="animation-delay: -0.3s"></span>
            <span class="w-3 h-3 rounded-full bg-[#F5F2EC] opacity-60 animate-bounce" style="animation-delay: -0.15s"></span>
            <span class="w-3 h-3 rounded-full bg-[#F5F2EC] opacity-90 animate-bounce"></span>
          </div>
          <span class="text-white/40 text-[12px] font-sans mt-5">Click anywhere or wait to continue</span>
        </div>
      </div>
    `;
    
    if (typeof (window as any).lucide !== 'undefined') {
      (window as any).lucide.createIcons();
    }
    
    let transitioned = false;
    const triggerTransition = () => {
      if (transitioned) return;
      transitioned = true;
      callback();
    };
    
    const timer = setTimeout(triggerTransition, 2200);
    
    const card = document.getElementById('section-transition-card');
    if (card) {
      card.addEventListener('click', () => {
        clearTimeout(timer);
        triggerTransition();
      });
    }
  }

  // 8. EMAIL GATE
  function attachEmailGateListeners() {
    updateLeakMeter(totalScore);

    const form = document.getElementById('email-gate-form');
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const firstNameInput = document.getElementById('field-firstname') as HTMLInputElement;
      const emailInput = document.getElementById('field-email') as HTMLInputElement;
      const phoneInput = document.getElementById('field-phone') as HTMLInputElement;
      const tradeTypeSelect = document.getElementById('field-trade') as HTMLSelectElement;
      const suburbInput = document.getElementById('field-suburb') as HTMLInputElement;

      const firstName = firstNameInput?.value?.trim();
      const email = emailInput?.value?.trim();
      const phone = phoneInput?.value?.trim() || "";
      const tradeType = tradeTypeSelect?.value;
      const suburb = suburbInput?.value?.trim();
      
      const errName = document.getElementById("error-first-name");
      const errEmail = document.getElementById("error-email");
      const errTrade = document.getElementById("error-trade-type");
      const errSuburb = document.getElementById("error-suburb");

      if (errName) errName.style.display = 'none';
      if (errEmail) errEmail.style.display = 'none';
      if (errTrade) errTrade.style.display = 'none';
      if (errSuburb) errSuburb.style.display = 'none';

      let valid = true;
      if (!firstName) {
        if (errName) errName.style.display = 'block';
        valid = false;
      }
      if (!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
        if (errEmail) errEmail.style.display = 'block';
        valid = false;
      }
      if (!tradeType || tradeType === '') {
        if (errTrade) errTrade.style.display = 'block';
        valid = false;
      }
      if (!suburb) {
        if (errSuburb) errSuburb.style.display = 'block';
        valid = false;
      }
      if (!valid) return;
      
      const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      const spinner = document.getElementById('gate-spinner');
      const btnText = document.getElementById('gate-btn-text');
      
      if (spinner) spinner.style.display = 'block';
      if (btnText) btnText.textContent = 'Calculating Scores...';
      if (btn) btn.disabled = true;
      
      const s1 = selectedPoints.slice(0,4).filter(p=>p!==null).reduce((a,b: any)=>a+b,0);
      const s2 = selectedPoints.slice(4,7).filter(p=>p!==null).reduce((a,b: any)=>a+b,0);
      const s3 = selectedPoints.slice(7,10).filter(p=>p!==null).reduce((a,b: any)=>a+b,0);
      const s4 = selectedPoints.slice(10,12).filter(p=>p!==null).reduce((a,b: any)=>a+b,0);
      const leakPct = Math.round(((36 - totalScore) / 36) * 100);
      const estLeak = Math.round((leakPct / 100) * 15000);
      
      try {
        await fetch(GHL_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName,
            email,
            phone,
            tradeType,
            suburb,
            totalScore,
            leakPercentage: leakPct,
            estimatedMonthlyLeak: estLeak,
            marketingScore: s1,
            leadCaptureScore: s2,
            pricingScore: s3,
            retentionScore: s4
          })
        });
      } catch (err) {
        console.log('Webhook error (non-blocking):', err);
      }
      
      clearAuditState();
      renderResults();
      showState('results');
    });
  }

  // 9. RESULTS RENDERER
  function renderResults() {
    const s1 = selectedPoints.slice(0,4).filter(p=>p!==null).reduce((a,b: any)=>a+b,0);
    const s2 = selectedPoints.slice(4,7).filter(p=>p!==null).reduce((a,b: any)=>a+b,0);
    const s3 = selectedPoints.slice(7,10).filter(p=>p!==null).reduce((a,b: any)=>a+b,0);
    const s4 = selectedPoints.slice(10,12).filter(p=>p!==null).reduce((a,b: any)=>a+b,0);
    const leakPct = Math.round(((36 - totalScore) / 36) * 100);
    const estLeak = Math.round((leakPct / 100) * 15000);
    
    let tier = '';
    let tierBg = '';
    let tierText = '';
    let tierIcon = '';
    let tierCopy = '';
    let tierCTAHtml = '';
    
    if (totalScore <= 9) {
      tier = 'CRITICAL REVENUE LEAK'; tierBg = '#E8622A'; tierText = '#F5F2EC';
      tierIcon = 'alert-triangle';
      tierCopy = "Your operation has significant room to grow. You’re likely losing 60–80% of potential leads to competitors who respond faster. A single OS deployment can dramatically change your monthly enquiry flow — we’ve seen trades go from 3 jobs/week to 11 in 90 days.";
      tierCTAHtml = `<a href="/contact" style="display:block;background:#F5F2EC;color:#E8622A;text-align:center;padding:16px;border-radius:999px;font-weight:700;text-decoration:none;margin-top:20px;">Book My Free Revenue Recovery Call →</a>`;
    } else if (totalScore <= 18) {
      tier = 'SIGNIFICANT REVENUE LEAK'; tierBg = '#D97706'; tierText = '#F5F2EC';
      tierIcon = 'trending-down';
      tierCopy = "You’ve got some fundamentals in place, but critical gaps in capture and conversion are letting leads slip through. Customers are choosing you — but some are choosing someone else because they responded faster or had more reviews.";
      tierCTAHtml = `<a href="/contact" style="display:block;background:#F5F2EC;color:#D97706;text-align:center;padding:16px;border-radius:999px;font-weight:700;text-decoration:none;margin-top:20px;">Book My Free Revenue Recovery Call →</a>`;
    } else if (totalScore <= 27) {
      tier = 'MODERATE REVENUE LEAK'; tierBg = '#C9A96E'; tierText = '#1C1C1A';
      tierIcon = 'alert-circle';
      tierCopy = "You’re running a solid operation. The leaks at this level are subtle but compounding — missed follow-ups, underpriced jobs, quotes that fell through the cracks. A few targeted fixes are typically worth $2K–$4K/month.";
      tierCTAHtml = `<a href="/#our-os" style="display:block;background:#1C1C1A;color:#F5F2EC;text-align:center;padding:16px;border-radius:999px;font-weight:700;text-decoration:none;margin-top:20px;">View OS Systems →</a>`;
    } else {
      tier = 'REVENUE OPTIMISED'; tierBg = '#1A9080'; tierText = '#F5F2EC';
      tierIcon = 'check-circle';
      tierCopy = "You’re in the top 5% of Melbourne tradies by systems maturity. The opportunity isn’t plugging leaks — it’s amplification. Let’s stack OS systems to compound what’s already working.";
      tierCTAHtml = `<a href="/contact" style="display:block;background:#E8622A;color:#F5F2EC;text-align:center;padding:16px;border-radius:999px;font-weight:700;text-decoration:none;margin-top:20px;">Let’s Talk →</a>`;
    }
    
    const sectionData = [
      { label: 'Getting Found', icon: 'search', score: s1, max: 12 },
      { label: 'Capturing Leads', icon: 'phone', score: s2, max: 9 },
      { label: 'Converting Jobs', icon: 'briefcase', score: s3, max: 9 },
      { label: 'Retain & Grow', icon: 'refresh-cw', score: s4, max: 6 }
    ];
    
    const sectionsHTML = sectionData.map(s => {
      const pct = Math.round((s.score / s.max) * 100);
      const barColor = pct < 50 ? '#E8622A' : pct < 75 ? '#C9A96E' : '#1A9080';
      return `
        <div style="margin-bottom:20px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
            <span style="font-weight:600;color:var(--text-charcoal);">
              <i data-lucide="${s.icon}" style="width:16px;height:16px;display:inline;vertical-align:middle;margin-right:6px;"></i>
              ${s.label}
            </span>
            <span style="color:var(--text-charcoal);opacity:0.6;font-size:14px;">${s.score} / ${s.max}</span>
          </div>
          <div style="background:var(--color-border);border-radius:999px;height:8px;overflow:hidden;">
            <div style="width:${pct}%;background:${barColor};height:8px;border-radius:999px;transition:width 0.8s ease;"></div>
          </div>
        </div>
      `;
    }).join('');
    
    const stateResults = document.getElementById('state-results');
    if (stateResults) {
      stateResults.innerHTML = `
        <div style="text-align:center;padding-bottom:32px;">
          <div style="display:inline-block;width:120px;height:120px;border-radius:50%;border:6px solid ${tierBg};display:flex;align-items:center;justify-content:center;margin:0 auto 16px;">
            <div>
              <div style="font-size:32px;font-weight:800;color:var(--text-charcoal);">${totalScore}</div>
              <div style="font-size:13px;color:var(--text-charcoal);opacity:0.5;">/ 36</div>
            </div>
          </div>
        </div>
        
        <!-- Tier banner -->
        <div style="background:${tierBg};color:${tierText};border-radius:16px;padding:28px;text-align:center;margin-bottom:32px;">
          <i data-lucide="${tierIcon}" style="width:32px;height:32px;margin-bottom:12px;"></i>
          <div style="font-size:22px;font-weight:800;letter-spacing:1px;">${tier}</div>
          <div style="opacity:0.85;margin-top:8px;font-size:15px;">Estimated monthly leak: $${estLeak.toLocaleString()}</div>
        </div>
        
        <!-- Section breakdown -->
        <div style="background:var(--bg-white);border-radius:16px;padding:28px;margin-bottom:24px;border:1px solid var(--color-border);">
          <div style="font-weight:700;color:var(--text-charcoal);margin-bottom:20px;font-size:16px;">Your Breakdown</div>
          ${sectionsHTML}
        </div>
        
        <!-- Tier copy -->
        <div style="background:var(--bg-white);border-radius:16px;padding:28px;margin-bottom:24px;border:1px solid var(--color-border);">
          <p style="color:var(--text-charcoal);line-height:1.7;font-size:15px;margin:0;">${tierCopy}</p>
        </div>
        
        <!-- Action card -->
        <div style="background:${tierBg};border-radius:16px;padding:28px;margin-bottom:32px;">
          <div style="color:${tierText};font-size:20px;font-weight:800;margin-bottom:8px;">What’s your next move?</div>
          <div style="color:${tierText};opacity:0.8;font-size:14px;line-height:1.6;">Get a 30-minute Revenue Recovery Call — no pitch, just a clear plan.</div>
          ${tierCTAHtml}
        </div>
        
        <!-- Retake -->
        <div style="text-align:center;margin-bottom:16px;">
          <button id="btn-retake" style="background:none;border:1.5px solid var(--text-charcoal);color:var(--text-charcoal);padding:12px 28px;border-radius:999px;cursor:pointer;font-size:14px;opacity:0.6;font-weight:600;">Retake the Audit</button>
        </div>
      `;
    }
    
    const retakeBtn = document.getElementById('btn-retake');
    if (retakeBtn) {
      retakeBtn.addEventListener('click', function() {
        resetQuiz();
      });
    }

    if (typeof (window as any).lucide !== 'undefined') {
      (window as any).lucide.createIcons();
    }
  }

  // 10. RESTART AND SESSION PERSISTENCE WIPE
  function resetQuiz() {
    clearAuditState();
    showState('intro');
    updateLeakMeter(36);
  }

  function clearAuditState() {
    selectedPoints = new Array(12).fill(null);
    selectedIndices = new Array(12).fill(null);
    currentQ = 0;
    totalScore = 0;
    localStorage.removeItem('stratapult_audit');
  }

  function saveSessionState() {
    localStorage.setItem(
      'stratapult_audit',
      JSON.stringify({ answers: selectedIndices, points: selectedPoints, currentQ })
    );
  }

  // 11. LAYOUT CONTROLS: THEME & MENU
  function initTheme() {
    const savedTheme = localStorage.getItem("darkMode");
    const isDark = savedTheme === "true";
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function initMenu() {
    const trigger = document.getElementById("mobile-menu-trigger");
    const closeBtn = document.getElementById("mobile-menu-close");
    const drawer = document.getElementById("mobile-drawer");

    trigger?.addEventListener("click", () => {
      drawer?.classList.remove("translate-x-full");
      drawer?.classList.add("translate-x-0");
    });

    closeBtn?.addEventListener("click", () => {
      drawer?.classList.remove("translate-x-0");
      drawer?.classList.add("translate-x-full");
    });

    const drawerLinks = drawer?.querySelectorAll("a");
    drawerLinks?.forEach(link => {
      link.addEventListener("click", () => {
        drawer?.classList.remove("translate-x-0");
        drawer?.classList.add("translate-x-full");
      });
    });
  }

  // 12. RESTORE CACHED SESSION STATE
  function initSession() {
    const cached = localStorage.getItem("stratapult_audit");
    if (cached) {
      try {
        const session = JSON.parse(cached);
        if (session && Array.isArray(session.answers) && Array.isArray(session.points)) {
          selectedIndices = session.answers;
          selectedPoints = session.points;
          currentQ = typeof session.currentQ === "number" ? session.currentQ : 0;
          totalScore = selectedPoints.filter(p => p !== null).reduce((a, b: any) => a + b, 0);

          if (currentQ >= 12) {
            showState('emailgate');
            attachEmailGateListeners();
          } else if (currentQ > 0) {
            showState('question');
            renderQuestion(currentQ);
          } else {
            showState('intro');
            updateLeakMeter(36);
          }
          return;
        }
      } catch (e) {
        console.warn("Corrupt session state, starting fresh on intro.", e);
        clearAuditState();
      }
    }
    showState('intro');
    updateLeakMeter(36);
  }

  // 13. BOOTSTRAPPING
  initTheme();
  initMenu();

  const startBtn = document.getElementById('start-btn');
  if (startBtn) {
    startBtn.addEventListener('click', function() {
      console.log('QUESTIONS:', QUESTIONS);
      clearAuditState();
      showState('question');
      renderQuestion(0);
    });
  }

  initSession();
});
